# Build & Deployment Guide

## Building the Project

### Development Build

```bash
# Install all dependencies
npm run build

# Start development servers
npm run dev
```

### Production Build

```bash
# Build frontend
npm run build:frontend

# Prepare backend
npm run build:backend
```

## Build Output

### Frontend
- Output: `frontend/dist/`
- Includes: Minified JS, CSS, HTML
- Size: < 100KB (gzipped)
- All assets optimized

### Backend
- Output: Ready to run with `npm start`
- No compilation needed
- All dependencies installed

## Deployment Steps

### 1. Pre-deployment Testing

```bash
# Run all tests
npm test

# Run API tests
npm run test:api

# Check build
npm run build
```

### 2. Environment Setup

Create `.env` in backend directory:
```
PORT=5000
NODE_ENV=production
CLIENT_URL=https://yourdomain.com
MONGODB_URI=your-mongodb-connection
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
```

### 3. Start Backend

```bash
cd backend
npm start
```

### 4. Serve Frontend

Option A: With Node.js
```bash
cd frontend/dist
npx http-server
```

Option B: With nginx
```nginx
server {
    listen 3000;
    root /path/to/frontend/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Option C: With PM2
```bash
npm install -g pm2
pm2 start "cd frontend && npm run preview"
pm2 start "cd backend && npm start"
pm2 save
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t pulse:latest .
```

### Run Container

```bash
docker run -p 3000:3000 -p 5000:5000 \
  -e MONGODB_URI=your-db-uri \
  -e JWT_SECRET=your-secret \
  pulse:latest
```

## Heroku Deployment

### 1. Create Heroku App

```bash
heroku create your-app-name
```

### 2. Set Environment Variables

```bash
heroku config:set MONGODB_URI=your-db-uri
heroku config:set JWT_SECRET=your-secret
heroku config:set NODE_ENV=production
```

### 3. Deploy

```bash
git push heroku main
```

## Vercel Deployment (Frontend)

### 1. Connect Repository

```bash
vercel link
```

### 2. Deploy

```bash
vercel --prod
```

### 3. Configure

- Set build command: `npm run build:frontend`
- Set output directory: `frontend/dist`

## AWS Deployment

### Frontend (S3 + CloudFront)

1. Build frontend
2. Upload `frontend/dist` to S3
3. Create CloudFront distribution
4. Set domain in Route53

### Backend (EC2 + RDS)

1. Launch EC2 instance
2. Install Node.js
3. Clone repository
4. Configure .env
5. Start with PM2

## Health Checks

After deployment, verify:

```bash
# Frontend
curl https://yourdomain.com

# Backend
curl https://yourdomain.com/api/health

# API Version
curl https://yourdomain.com/api/version
```

## Monitoring

### Logs

```bash
# Backend logs
pm2 logs

# Docker logs
docker logs -f container-id
```

### Performance

- Monitor response times
- Track error rates
- Monitor database connections
- Check memory usage

## Rollback

```bash
# If deployment fails
git revert <commit-hash>
git push
```

## Scaling

- Use load balancer for multiple backend instances
- Cache frontend with CDN
- Database replication for reliability
- Queue system for long operations

## Troubleshooting

### Frontend not loading
- Check build completed successfully
- Verify static files are served
- Check CORS configuration
- Review browser console for errors

### API not responding
- Check backend is running
- Verify environment variables
- Check MongoDB connection
- Review backend logs

### WebSocket connection fails
- Check Socket.io is configured
- Verify CORS settings
- Check firewall rules
- Review browser console
