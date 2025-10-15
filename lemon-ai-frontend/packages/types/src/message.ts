import { z } from 'zod';

export const MessageSchema = z.object({
  id: z.string().uuid(),
  conversation_id: z.string().uuid(),
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
  artifacts: z.array(z.record(z.unknown())).default([]),
  tool_calls: z.array(z.record(z.unknown())).default([]),
  metadata: z.record(z.unknown()).default({}),
  created_at: z.string().datetime(),
});

export type Message = z.infer<typeof MessageSchema>;
