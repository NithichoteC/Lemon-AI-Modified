import { z } from 'zod';

export const ConversationSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  agent_id: z.string().uuid().nullable(),
  title: z.string(),
  metadata: z.record(z.unknown()).default({}),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type Conversation = z.infer<typeof ConversationSchema>;
