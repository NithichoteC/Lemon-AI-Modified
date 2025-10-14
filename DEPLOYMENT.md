# Lemon AI Deployment Guide

## 🚀 Quick Deployment with Coolify

### Prerequisites
- Coolify instance running
- GitHub repository access
- Docker Desktop (for local testing)

### Deployment Steps

#### 1. Using Coolify UI
1. **Create New Resource** → **Application**
2. **Repository**: `https://github.com/NithichoteC/Lemon-AI-Modified.git`
3. **Branch**: `main`
4. **Docker Compose File**: Use `docker-compose.production.yml`

#### 2. Environment Variables
Set these in Coolify:
- `DOCKER_HOST_ADDR=host.docker.internal`
- `ACTUAL_HOST_WORKSPACE_PATH=/workspace`
- `NODE_ENV=production`
- `VITE_IS_CLIENT=false`

#### 3. Port Configuration
- **Internal Port**: `5005`
- **External Port**: `5005` (or your preferred port)

#### 4. Volumes
- `./workspace:/app/workspace`
- `./data:/app/data`

### 🐛 SVG Issue Fix
This repository includes the SVG rendering fix for production deployment. The issue was resolved by:
1. Adding `frontend/src/utils/svg.js` utility
2. Proper Vite configuration for production builds
3. Environment variables for production mode

### 🔧 Local Testing
```bash
# Clone the repository
git clone https://github.com/NithichoteC/Lemon-AI-Modified.git
cd Lemon-AI-Modified

# Run locally
docker-compose -f docker-compose.production.yml up
```

### 📋 Features
- ✅ SVG rendering fixed for production
- ✅ Environment variables configured
- ✅ Health checks included
- ✅ Production-ready Docker configuration
- ✅ Workspace and data persistence

### 🌐 Access
Once deployed, Lemon AI will be available at your Coolify domain (e.g., `lemonai.umbryth.com`)

### 📚 Documentation
- Official Lemon AI docs: [lemon-11.gitbook.io](https://lemon-11.gitbook.io/lemonai/)
- GitHub Repository: [https://github.com/NithichoteC/Lemon-AI-Modified](https://github.com/NithichoteC/Lemon-AI-Modified)
