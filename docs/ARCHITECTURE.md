# Pulse Architecture

## System Overview

Pulse follows a modern full-stack architecture with a clear separation between frontend and backend.

## Frontend Architecture

### Directory Structure
```
frontend/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── auth/
│   │   ├── posts/
│   │   ├── profile/
│   │   └── notifications/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

### Component Hierarchy

```
App
├── Layout
│   ├── Header/Navigation
│   ├── Sidebar
│   ├── MainContent
│   └── Footer
├── Pages (via Router)
│   ├── LandingPage
│   ├── AuthPages (Login/Signup)
│   ├── HomeFeed
│   ├── ExplorePage
│   ├── ProfilePage
│   ├── PostPage
│   ├── NotificationsPage
│   └── SettingsPage
└── Modals/Overlays
    ├── PostCreationModal
    ├── ConfirmDialogs
    └── ImagePreview
```

## Backend Architecture

### Directory Structure
```
backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   ├── config/
│   ├── validators/
│   └── app.js
├── tests/
├── .env.example
├── package.json
└── server.js
```

### API Routes Structure

```
GET    /api/health
GET    /api/version

# Authentication
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token

# Users
GET    /api/users/:id
GET    /api/users/:id/profile
PUT    /api/users/:id
DELETE /api/users/:id
GET    /api/users/:id/followers
GET    /api/users/:id/following

# Posts
GET    /api/posts
GET    /api/posts/:id
POST   /api/posts
PUT    /api/posts/:id
DELETE /api/posts/:id
GET    /api/posts/:id/comments

# Follow System
POST   /api/follow/:userId
DELETE /api/follow/:userId
GET    /api/suggestions

# Comments
POST   /api/comments
GET    /api/comments/:id
PUT    /api/comments/:id
DELETE /api/comments/:id

# Reactions
POST   /api/reactions
DELETE /api/reactions/:id

# Notifications
GET    /api/notifications
GET    /api/notifications/:id
PUT    /api/notifications/:id/read
DELETE /api/notifications/:id

# Search
GET    /api/search?q=query
GET    /api/search/hashtags?q=query

# Trending
GET    /api/trending/posts
GET    /api/trending/users
GET    /api/trending/hashtags
```

## Database Schema

### User Collection/Table
```javascript
{
  _id: ObjectId,
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  avatar: String (URL),
  bio: String,
  coverImage: String (URL),
  followers: [ObjectId],
  following: [ObjectId],
  postsCount: Number,
  createdAt: Date,
  updatedAt: Date,
  isVerified: Boolean
}
```

### Post Collection/Table
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  title: String,
  caption: String,
  images: [String] (URLs),
  hashtags: [String],
  category: String,
  likesCount: Number,
  commentsCount: Number,
  sharesCount: Number,
  viewsCount: Number,
  createdAt: Date,
  updatedAt: Date,
  isPublished: Boolean
}
```

### Comment Collection/Table
```javascript
{
  _id: ObjectId,
  postId: ObjectId,
  userId: ObjectId,
  parentCommentId: ObjectId (for replies),
  content: String,
  likesCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Notification Collection/Table
```javascript
{
  _id: ObjectId,
  recipientId: ObjectId,
  senderId: ObjectId,
  type: String (like, comment, follow, share),
  targetId: ObjectId (post/comment/user),
  message: String,
  isRead: Boolean,
  createdAt: Date
}
```

## Authentication Flow

1. User submits credentials
2. Backend validates and hashes password
3. JWT token generated
4. Token stored in secure cookie (httpOnly)
5. Requests include token in Authorization header
6. Middleware validates token on protected routes
7. Token refresh on expiration

## State Management

### Redux/Context Structure
- **auth**: Authentication state (user, token, isLoading)
- **posts**: Posts feed and details
- **users**: User profiles and suggestions
- **notifications**: Real-time notifications
- **ui**: UI state (theme, modals, loading)

## Real-time Communication

- **Socket.io** for real-time features
- Events:
  - `new-comment`: New comment on post
  - `new-like`: New like on post
  - `new-follow`: New follower
  - `new-notification`: Generic notification
  - `live-feed-update`: Real-time feed updates

## Image Handling

1. Client-side compression
2. Upload to S3/Cloud Storage
3. Server stores URL in database
4. Lazy loading on frontend
5. CDN serving for optimization

## Error Handling

- Consistent error response format
- HTTP status codes
- Error logging to monitoring service
- User-friendly error messages
- Validation errors with field mapping

## Security Measures

- HTTPS only
- JWT token authentication
- CSRF protection
- Input validation and sanitization
- Rate limiting
- SQL injection prevention
- XSS protection
- CORS configuration
- Password hashing with bcrypt
