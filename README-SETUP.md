# Pulse - Premium Social Blogging Platform

## Quick Start

### Prerequisites
- Node.js v16+ installed
- npm or yarn

### Installation & Development

```bash
# Install dependencies for both frontend and backend
npm run build

# Start both servers concurrently
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### Build for Production

```bash
npm run build
```

Generated files:
- `frontend/dist/` - Production frontend build
- `backend/` - Production backend ready

### Testing

```bash
# Run all tests
npm test

# Test frontend only
npm run test:frontend

# Test backend only
npm run test:backend

# Test API endpoints
npm run test:api
```

## Project Structure

```
pulse/
├── frontend/              # React + Vite frontend
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/               # Node.js + Express backend
│   ├── src/
│   ├── server.js
│   └── package.json
├── docs/                  # Documentation
├── tests/                 # Integration & API tests
└── package.json           # Root package.json
```

## API Endpoints

### Health & Status
- `GET /api/health` - Health check
- `GET /api/version` - API version
- `GET /` - API overview

### Authentication (Phase 2)
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh-token`

### Users (Phase 2-3)
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `GET /api/users/:id/followers`
- `GET /api/users/:id/following`

### Posts (Phase 3)
- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PUT /api/posts/:id`
- `DELETE /api/posts/:id`

### Comments (Phase 4)
- `POST /api/comments`
- `GET /api/comments/:id`
- `PUT /api/comments/:id`
- `DELETE /api/comments/:id`

### Notifications (Phase 5)
- `GET /api/notifications`
- `PUT /api/notifications/:id/read`
- `DELETE /api/notifications/:id`

## Features Checklist

### Phase 1: Foundation ✅
- [x] Project setup with Vite + React
- [x] Express.js backend
- [x] Tailwind CSS with Caviche font
- [x] Redux state management structure
- [x] Socket.io setup
- [x] API health checks
- [x] Complete testing framework
- [x] Build configuration

### Phase 2: User System 🔄
- [ ] JWT authentication
- [ ] User signup/login
- [ ] User profiles
- [ ] Avatar upload

### Phase 3: Content Platform
- [ ] Post creation
- [ ] Image upload (S3)
- [ ] Feed algorithm
- [ ] Post interactions

### Phase 4: Social Features
- [ ] Follow system
- [ ] Comments
- [ ] Reactions (likes)
- [ ] Discovery/Explore

### Phase 5: Real-time & Notifications
- [ ] Socket.io events
- [ ] Real-time notifications
- [ ] Live feed updates

### Phase 6: Polish & Optimization
- [ ] Performance optimization
- [ ] Dark/light theme
- [ ] Accessibility audit
- [ ] Unit tests (95% coverage)

### Phase 7: Deployment
- [ ] Production build
- [ ] Deployment pipeline
- [ ] Monitoring

## Development Guidelines

### Frontend
- Use React hooks and functional components
- Follow the component structure in `frontend/src/components/`
- Global styles in `frontend/src/styles/globals.css`
- Use Caviche font via Tailwind classes
- State management with Redux slices

### Backend
- Use controllers for request handling
- Models for database schemas
- Services for business logic
- Middleware for validation and authentication
- RESTful API design

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/pulse
JWT_SECRET=your-secret-key-change-this
JWT_EXPIRE=7d
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
AWS_S3_BUCKET=pulse-images
```

## Technology Stack

### Frontend
- React 18+
- Vite
- Tailwind CSS
- Redux & React-Redux
- React Router
- Framer Motion
- Axios
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB/Mongoose
- Socket.io
- JWT
- Bcryptjs
- Multer (file uploads)
- AWS SDK

### Testing
- Jest
- React Testing Library
- Supertest
- Custom API test suite

## Support & Issues

For issues, feature requests, or contributions, please open an issue on GitHub.

## License

MIT License - See LICENSE file

---

**Pulse** - Where Creativity Meets Community ✨
