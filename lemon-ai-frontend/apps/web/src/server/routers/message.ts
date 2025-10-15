import { router, protectedProcedure } from '../trpc/instance';
import { koaClient } from '../trpc/koa-client';
import { z } from 'zod';

export const messageRouter = router({
  send: protectedProcedure
    .input(
      z.object({
        conversation_id: z.string().uuid(),
        content: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.post('/api/message', input, token);
    }),

  list: protectedProcedure
    .input(z.object({ conversation_id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.get(
        `/api/messages?conversation_id=${input.conversation_id}`,
        token
      );
    }),
});
