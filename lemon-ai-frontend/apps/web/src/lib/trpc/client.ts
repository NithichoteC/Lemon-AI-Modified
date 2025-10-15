import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@/server/routers';
import superjson from 'superjson';

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/api/trpc`,
      transformer: superjson,
    }),
  ],
});
