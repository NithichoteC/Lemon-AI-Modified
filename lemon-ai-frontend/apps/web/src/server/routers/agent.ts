import { router, protectedProcedure } from '../trpc/instance';
import { AgentConfigSchema } from '@lemonai/types';
import { koaClient } from '../trpc/koa-client';
import { z } from 'zod';

export const agentRouter = router({
  // Create new agent
  create: protectedProcedure
    .input(AgentConfigSchema.omit({ id: true, user_id: true }))
    .mutation(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.post(
        '/api/agent',
        { user_id: ctx.user.id, ...input },
        token
      );
    }),

  // Get agent by ID
  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.get(`/api/agent/${input.id}`, token);
    }),

  // List user's agents
  list: protectedProcedure.query(async ({ ctx }) => {
    const token = ctx.session?.access_token;
    return koaClient.get(`/api/agents?user_id=${ctx.user.id}`, token);
  }),

  // Update agent
  update: protectedProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        data: AgentConfigSchema.partial().omit({ id: true, user_id: true }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.put(`/api/agent/${input.id}`, input.data, token);
    }),

  // Delete agent
  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const token = ctx.session?.access_token;
      return koaClient.delete(`/api/agent/${input.id}`, token);
    }),
});
