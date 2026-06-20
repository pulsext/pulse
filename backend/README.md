# Backend Directory Structure

## Directories

### /src
Main application source code

- **controllers/** - Request handlers for routes
- **routes/** - API route definitions
- **models/** - Database schemas (Mongoose models)
- **middleware/** - Express middleware (auth, validation, error handling)
- **services/** - Business logic and external API calls
- **utils/** - Helper functions and utilities
- **config/** - Configuration files (database, env, etc.)
- **validators/** - Input validation schemas
- **app.js** - Express app configuration

### /tests
Test files (unit, integration, e2e)

### Files

- **server.js** - Server entry point
- **.env.example** - Environment variables template
- **package.json** - Dependencies and scripts

## API Structure

```
/api
  /auth
    POST   /signup
    POST   /login
    POST   /logout
    POST   /refresh-token
  /users
    GET    /:id
    PUT    /:id
    DELETE /:id
    GET    /:id/followers
    GET    /:id/following
  /posts
    GET    /
    POST   /
    GET    /:id
    PUT    /:id
    DELETE /:id
    GET    /:id/comments
  /comments
    POST   /
    PUT    /:id
    DELETE /:id
  /reactions
    POST   /
    DELETE /:id
  /notifications
    GET    /
    PUT    /:id/read
  /search
    GET    /?q=query
```
