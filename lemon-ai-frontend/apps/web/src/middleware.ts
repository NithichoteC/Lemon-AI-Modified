import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Check for demo session cookie first (bypass Supabase)
  const hasDemoSession = request.cookies.get('lemon-ai-demo-session')?.value === 'true';

  const protectedPaths = ['/chat', '/settings', '/agents'];
  const isProtectedPath = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path));

  const authPaths = ['/auth/sign-in', '/auth/sign-up'];
  const isAuthPath = authPaths.some(path => request.nextUrl.pathname.startsWith(path));

  // If demo session exists, allow access to protected paths
  if (hasDemoSession) {
    if (isAuthPath) {
      return NextResponse.redirect(new URL('/chat', request.url));
    }
    return response;
  }

  // Otherwise, check real Supabase auth
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({ request: { headers: request.headers } });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options });
          response = NextResponse.next({ request: { headers: request.headers } });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (isProtectedPath && !user) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  if (isAuthPath && user) {
    return NextResponse.redirect(new URL('/chat', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
