import { z } from 'zod';

export const AgentConfigSchema = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid(),
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  system_prompt: z.string().optional(),
  model: z.string().default('gpt-4'),
  tools: z.array(z.string()).default([]),
  settings: z.record(z.unknown()).default({}),
  is_active: z.boolean().default(true),
});

export type AgentConfig = z.infer<typeof AgentConfigSchema>;
