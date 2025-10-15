'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  full_name: z.string().min(1).optional(),
});

export async function signUp(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    full_name: formData.get('full_name') as string | undefined,
  };

  const validated = SignUpSchema.safeParse(data);

  if (!validated.success) {
    return { error: 'Invalid input' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
    options: {
      data: {
        full_name: validated.data.full_name,
      },
    },
  });

  if (error) {
    return { error: error.message };
  }

  redirect('/auth/verify-email');
}
