import { router, protectedProcedure } from '../trpc/instance';
import { koaClient } from '../trpc/koa-client';
import { z } from 'zod';

export const conversationRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        agent_id: z.string().uuid().nullable(),
        title: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.post(
        '/api/conversation',
        { user_id: ctx.user.id, ...input },
        token
      );
    }),

  list: protectedProcedure.query(async ({ ctx }) => {
    const token = ctx.session?.access_token;
    return koaClient.get(`/api/conversations?user_id=${ctx.user.id}`, token);
  }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.get(`/api/conversation/${input.id}`, token);
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        data: z.object({ title: z.string().optional() }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.put(`/api/conversation/${input.id}`, input.data, token);
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.delete(`/api/conversation/${input.id}`, token);
    }),
});
