# Backend Setup (Node.js/Express)

1. Install dependencies:
   npm install

2. Copy .env.example to .env and configure MongoDB, JWT, any API keys

3. Run dev server:
   npm run dev

## Stack
- Node.js
- Express.js
- MongoDB
- Socket.IO (for real-time chat, notifications)

API endpoints:
- /api/auth
- /api/groups
- /api/events
- /api/users
- /api/setlists
- /api/messages

---
Deployment: Use the Dockerfile/NGINX config in this repo. Cloud deployment recommended.