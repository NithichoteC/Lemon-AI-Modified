import { router } from '../trpc/instance';
import { agentRouter } from './agent';
import { conversationRouter } from './conversation';
import { messageRouter } from './message';

export const appRouter = router({
  agent: agentRouter,
  conversation: conversationRouter,
  message: messageRouter,
});

export type AppRouter = typeof appRouter;
