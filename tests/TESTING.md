# Testing Guide

## Backend API Tests

Run the API test suite to verify the backend is working correctly:

```bash
npm run test:api
```

### What Gets Tested

✅ Server connectivity
✅ Health check endpoint
✅ API version endpoint
✅ Root API endpoint
✅ 404 error handling
✅ CORS configuration
✅ JSON response format
✅ Multiple endpoint accessibility

### Test Output Example

```
============================================================
  PULSE BACKEND - API TEST SUITE
============================================================

✅ Server is running
✅ GET / returns API overview
✅ GET /api/version returns version info
✅ GET /api/health returns health status
✅ GET /invalid-route returns 404
✅ Server responds with appropriate CORS headers
✅ API returns valid JSON responses
✅ Multiple endpoints are accessible

============================================================
  RESULTS: 8 passed, 0 failed
============================================================
```

## Frontend Tests

Frontend testing with Jest and React Testing Library:

```bash
cd frontend
npm test
```

## Backend Unit Tests

Backend unit tests with Jest:

```bash
cd backend
npm test
```

## Manual Testing

### Test the Frontend

1. Start the development server:
   ```bash
   cd frontend
   npm run dev
   ```

2. Visit http://localhost:3000

3. Verify:
   - Page loads successfully with no errors
   - Header with logo "Pulse" is visible
   - Three feature cards are displayed with emojis
   - Responsive design works on mobile (test with DevTools)
   - Caviche font is applied globally
   - Sign In button is clickable
   - Footer displays copyright

### Test the Backend

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Test endpoints with curl or Postman:

   **Health Check:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Expected:
   ```json
   {
     "status": "ok",
     "message": "Pulse Backend is running",
     "timestamp": "2026-06-20T..."
   }
   ```

   **API Overview:**
   ```bash
   curl http://localhost:5000/
   ```
   Expected:
   ```json
   {
     "message": "Pulse Backend API",
     "version": "1.0.0",
     "endpoints": { ... }
   }
   ```

   **API Version:**
   ```bash
   curl http://localhost:5000/api/version
   ```
   Expected:
   ```json
   { "version": "1.0.0" }
   ```

   **Invalid Route (404):**
   ```bash
   curl http://localhost:5000/api/invalid
   ```
   Expected:
   ```json
   { "error": "Route not found" }
   ```

## Complete Testing Flow

### 1. Build Phase
```bash
npm run build:frontend
npm run build:backend
```

### 2. Start Servers
```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev
```

### 3. Run Tests
```bash
# API Tests (requires backend running)
npm run test:api

# Frontend Tests
npm run test:frontend

# Backend Tests
npm run test:backend
```

### 4. Manual Verification
- Visit http://localhost:3000 and verify UI
- Visit http://localhost:5000 and verify API responses
- Check console for any errors
- Test responsive design

## CI/CD Pipeline

Tests will be automatically run on:
- Pull requests
- Commits to main branch
- Before deployment

## Performance Benchmarks

Target metrics to track:
- Frontend bundle size: < 100KB (gzipped)
- Initial page load: < 2 seconds
- API response time: < 100ms
- Test coverage: 95%+
- Lighthouse score: > 90

## Deployment Checklist

- [ ] All unit tests pass
- [ ] API integration tests pass
- [ ] Build completes without warnings
- [ ] No console errors in frontend
- [ ] No server errors in backend
- [ ] Frontend loads without issues
- [ ] All API endpoints respond correctly
- [ ] Responsive design verified
- [ ] Performance metrics acceptable
- [ ] Documentation is updated
