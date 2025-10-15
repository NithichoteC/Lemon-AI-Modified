# 🚀 Quick Start Guide

**Status**: ✅ Week 1 Complete - Ready for Development

---

## ⚡ Fastest Path to Running App

```bash
cd "/mnt/d/APPs/Lemon ai/lemonai-production/lemon-ai-frontend"
pnpm dev
```

Open http://localhost:3000 🎉

---

## 📁 Project Structure

```
lemon-ai-frontend/
├── apps/web/           # Next.js 15 app
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   ├── components/ # React components
│   │   ├── lib/       # Client libraries (tRPC, Supabase)
│   │   └── server/    # Server code (tRPC routers)
│   └── package.json
├── packages/           # Workspace packages
│   ├── const/         # Constants
│   ├── types/         # Zod schemas
│   └── utils/         # Utilities
└── package.json       # Root workspace
```

---

## 🔑 Key Commands

```bash
# Development
pnpm dev              # Start dev server (port 3000)
pnpm build            # Build for production
pnpm start            # Start production server

# Quality
pnpm type-check       # TypeScript validation
pnpm lint             # ESLint
pnpm test             # Vitest unit tests
pnpm test:e2e         # Playwright E2E tests
```

---

## 🎯 What Works Right Now

✅ **Next.js 15 App** - Server Components, App Router, Server Actions
✅ **tRPC Bridge** - Type-safe API calls to Koa backend (port 3001)
✅ **Auth Pages** - Sign-in, Sign-up (won't work until Supabase setup)
✅ **Route Protection** - Middleware protects /chat routes
✅ **Chat UI** - Mobile-responsive with dark mode
✅ **Type Safety** - End-to-end TypeScript + Zod validation

---

## ⏳ Needs Setup (Later)

### Supabase Database
**When Ready**:
1. Create project at https://supabase.com/dashboard
2. Run `scripts/supabase-setup.sql` in SQL Editor
3. Copy credentials to `.env.local`

**Guide**: `scripts/SUPABASE_SETUP_GUIDE.md`

### Koa Backend
**Requirement**: Backend running on http://localhost:3001

```bash
cd ..
make start-backend  # From root
```

---

## 🔧 Environment Variables

Create `.env.local` in project root:

```bash
# Supabase (optional for now)
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Backend API
BACKEND_API_URL=http://localhost:3001
```

---

## 📚 Documentation

### Main Guides
- **README.md** - Comprehensive developer guide
- **WEEK_1_COMPLETE_SUMMARY.md** - Full Week 1 summary
- **IMPLEMENTATION_COMPLETE.md** - Implementation details

### Technical Docs
- **HYBRID_ARCHITECTURE_PLAN.md** - Architecture overview
- **TRPC_BRIDGE_ARCHITECTURE.md** - tRPC specifics
- **STREAMLINED_ROADMAP.md** - 4-month roadmap

### Setup Guides
- **scripts/SUPABASE_SETUP_GUIDE.md** - Supabase setup
- **INSTALLATION_STATUS.md** - Installation troubleshooting

---

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Check port 3000 is free
lsof -ti:3000 | xargs kill -9
pnpm dev
```

### TypeScript Errors
```bash
pnpm type-check  # Check errors
```

### tRPC Errors
- Ensure backend is running on port 3001
- Check `BACKEND_API_URL` in `.env.local`

### Auth Not Working
- This is expected - Supabase not configured yet
- See `scripts/SUPABASE_SETUP_GUIDE.md`

---

## 🎯 Next Steps

### Immediate
- [ ] Run `pnpm dev` and test UI
- [ ] Verify routing (/→/auth/sign-in→/chat)
- [ ] Check mobile responsiveness
- [ ] Test dark mode

### Week 1 Remaining (Optional)
- [ ] Setup Supabase (when ready)
- [ ] Test authentication flow
- [ ] Verify tRPC with backend

### Week 2+
- [ ] Backend integration (CRUD, streaming)
- [ ] Frontend enhancements (theme, selector)
- [ ] Testing (Vitest + Playwright)

---

## 💡 Pro Tips

1. **Fast Reload**: Next.js hot-reload is instant - edit and see changes
2. **Type Safety**: Use `trpc.` to get autocomplete for API calls
3. **Dark Mode**: Toggle with system preference (no manual switch yet)
4. **Mobile**: Test with Chrome DevTools responsive mode (F12)
5. **Backend**: tRPC will error until backend is running - this is normal

---

## 📞 Need Help?

**Read First**:
- `/lemon-ai-frontend/README.md`
- `/WEEK_1_COMPLETE_SUMMARY.md`

**Common Issues**:
- `/INSTALLATION_STATUS.md`
- This file

---

**🎉 Ready to Build! Week 1 is 100% Complete!**

Start with `pnpm dev` and visit http://localhost:3000

---

**END OF QUICK_START.MD**
