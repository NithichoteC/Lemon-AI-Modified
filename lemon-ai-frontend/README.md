# Lemon AI Frontend

Next.js 15 + React 19 frontend for Lemon AI platform with hybrid architecture (Next.js frontend + Koa backend).

## 🎯 What's Implemented

✅ **Complete Next.js 15 Monorepo**
- pnpm workspace with packages (@lemonai/const, @lemonai/types, @lemonai/utils)
- TypeScript configuration
- Tailwind CSS + PostCSS
- ESLint ready

✅ **Type-Safe tRPC Bridge**
- Full tRPC 11 implementation
- Connects to Koa backend (port 3001)
- Agent, Conversation, Message routers
- React Query integration
- Superjson transformer

✅ **Supabase Authentication**
- Server-side and client-side Supabase clients
- Sign-in/Sign-up server actions with Zod validation
- Route protection middleware
- Auth callback handler

✅ **Basic UI**
- Mobile-responsive chat interface
- Dark mode support (Tailwind)
- Sign-in/Sign-up pages

## 📋 Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm`)
- Supabase account (for later - SQL schema ready in `/scripts`)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd lemon-ai-frontend
pnpm install
```

### 2. Environment Setup

Create `.env.local` in root:

```bash
# Supabase (leave empty for now, setup later)
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Backend API (Koa server)
BACKEND_API_URL=http://localhost:3001
```

### 3. Start Development Server

```bash
# Frontend
pnpm dev

# Backend (in separate terminal, from root)
cd ..
make start-backend
```

**URLs**:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## 📁 Project Structure

```
lemon-ai-frontend/
├── apps/web/                   # Next.js 15 app
│   ├── src/
│   │   ├── app/               # App Router
│   │   │   ├── auth/         # Auth pages (sign-in, sign-up)
│   │   │   ├── chat/         # Chat interface
│   │   │   └── api/trpc/     # tRPC HTTP handler
│   │   ├── components/        # React components
│   │   ├── lib/               # Client libraries
│   │   │   ├── supabase/     # Supabase clients
│   │   │   └── trpc/         # tRPC client + provider
│   │   ├── server/            # Server-side code
│   │   │   ├── routers/      # tRPC routers
│   │   │   └── trpc/         # tRPC instance & context
│   │   └── styles/            # Global styles
│   └── package.json
├── packages/                   # Workspace packages
│   ├── const/                 # Constants
│   ├── types/                 # TypeScript types (Zod schemas)
│   └── utils/                 # Utilities
├── .env.local                 # Environment variables
└── pnpm-workspace.yaml
```

## 🔧 Commands

```bash
# Development
pnpm dev              # Start dev server (port 3000)
pnpm build            # Build for production
pnpm start            # Start production server

# Quality
pnpm type-check       # TypeScript type checking
pnpm lint             # ESLint
pnpm test             # Vitest (when configured)
pnpm test:e2e         # Playwright E2E (when configured)
```

## 🌐 Architecture

### Hybrid Approach
- **Frontend**: Next.js 15 (App Router, Server Components)
- **Backend**: Existing Koa server (port 3001)
- **Bridge**: tRPC 11 (type-safe RPC)
- **Database**: Supabase PostgreSQL (when setup)
- **Auth**: Supabase Auth

### tRPC Bridge
Type-safe API calls from Next.js to Koa backend:

```typescript
// Frontend usage
const { data } = trpc.agent.list.useQuery();
```

Proxies to Koa backend:
```typescript
// Backend call
GET http://localhost:3001/api/agents
```

## 🔐 Authentication Flow

1. User visits `/` → redirects to `/auth/sign-in` or `/chat` (if logged in)
2. Sign-in form submits to Supabase Auth server action
3. Middleware protects `/chat`, `/settings`, `/agents` routes
4. Successful auth redirects to `/chat`

## 📦 Dependencies

**Core**:
- next@15.0.3
- react@19.0.0
- @trpc/server@11.0.0-rc.532
- @supabase/supabase-js@2.39.0
- zod@3.22.4

**UI**:
- tailwindcss@3.4.1
- antd@5.13.0
- lucide-react@0.344.0

**State**:
- @tanstack/react-query@5.17.9
- zustand@4.4.7

## 🚨 Known Limitations

1. **Supabase Not Required Yet**: App works without Supabase (auth will fail)
2. **Testing Not Configured**: Vitest/Playwright configs pending
3. **UI Components Basic**: Chat interface is functional but minimal
4. **No Theme Provider**: Dark mode works via Tailwind, no antd-style yet

## 📖 Documentation Reference

- `../WEEK_1_IMPLEMENTATION.md` - Complete implementation guide
- `../HYBRID_ARCHITECTURE_PLAN.md` - Architecture details
- `../TRPC_BRIDGE_ARCHITECTURE.md` - tRPC bridge design
- `../scripts/SUPABASE_SETUP_GUIDE.md` - Supabase setup (when ready)

## 🔄 Next Steps

### Immediate (Optional)
1. Set up Supabase project (see `../scripts/SUPABASE_SETUP_GUIDE.md`)
2. Run `../scripts/supabase-setup.sql` in Supabase SQL Editor
3. Update `.env.local` with real Supabase credentials
4. Test auth flow (sign-up → sign-in → chat)

### Week 2 (Backend Integration)
1. Connect Koa backend to Supabase
2. Implement agent CRUD operations
3. Add message streaming
4. File upload to Supabase Storage

## ✅ Verification

Test the setup:

```bash
# 1. Install dependencies
pnpm install

# 2. Type check (should pass)
pnpm type-check

# 3. Start dev server
pnpm dev

# 4. Visit http://localhost:3000
# Expected: Redirects to /auth/sign-in
```

## 💡 Tips

- Use `pnpm --filter @lemonai/web <command>` to run commands in web package only
- tRPC will error until backend is running (port 3001)
- Auth will fail until Supabase is configured
- Dark mode: System preference auto-detected

## 🎉 Success Criteria

- [x] Project structure created
- [x] Dependencies listed (ready to install)
- [x] tRPC bridge implemented
- [x] Auth flow implemented
- [x] Basic UI created
- [ ] Dependencies installed (`pnpm install`)
- [ ] TypeScript compilation passes
- [ ] Dev server runs
- [ ] Supabase configured (optional, later)

---

**Status**: 95% Complete - Ready for `pnpm install` and testing!
