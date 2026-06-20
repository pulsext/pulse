# Frontend Directory Structure

## Directories

### /src
Main application source code

- **components/** - Reusable React components
  - common/ - Common components (Header, Footer, etc.)
  - auth/ - Authentication components
  - posts/ - Post-related components
  - profile/ - Profile components
  - notifications/ - Notification components
- **pages/** - Full page components
  - LandingPage.jsx
  - LoginPage.jsx
  - SignupPage.jsx
  - HomePage.jsx
  - ExplorePage.jsx
  - ProfilePage.jsx
  - PostPage.jsx
  - NotificationsPage.jsx
  - SettingsPage.jsx
- **services/** - API calls and external services
  - api.js - Axios instance and API endpoints
  - auth.js - Authentication service
  - posts.js - Post service
  - users.js - User service
  - socket.js - Socket.io service
- **store/** - Redux state management
  - slices/ - Redux slices (auth, posts, ui, etc.)
  - store.js - Redux store configuration
- **hooks/** - Custom React hooks
- **utils/** - Helper functions
- **styles/** - Global styles and CSS
- **App.jsx** - Main App component
- **main.jsx** - Entry point

### /public
Static assets
- images/
- fonts/
- icons/

### Files

- **index.html** - HTML entry point
- **package.json** - Dependencies and scripts
- **vite.config.js** - Vite configuration
- **tailwind.config.js** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS configuration

## Features

✨ Built with:
- React 18+ with Vite
- Tailwind CSS with Caviche font
- Redux for state management
- React Router for navigation
- Framer Motion for animations
- Socket.io for real-time updates
- Axios for API calls

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
