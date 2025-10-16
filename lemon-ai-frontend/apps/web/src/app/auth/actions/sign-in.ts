'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { z } from 'zod';

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Mock demo credentials
const DEMO_EMAIL = 'demo@lemonai.local';
const DEMO_PASSWORD = 'demo123';

export async function signIn(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const validated = SignInSchema.safeParse(data);

  if (!validated.success) {
    throw new Error('Invalid email or password format');
  }

  // Check for demo login (bypass Supabase)
  if (validated.data.email === DEMO_EMAIL && validated.data.password === DEMO_PASSWORD) {
    const cookieStore = await cookies();

    // Set mock session cookie
    cookieStore.set('lemon-ai-demo-session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    redirect('/chat');
  }

  // Real Supabase login for production
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect('/chat');
}
