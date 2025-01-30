# Secure Kanban Board

## Description
A full-stack Kanban board application with secure JWT authentication, allowing teams to manage their work tasks efficiently. The application features a secure login system, protected routes, and an intuitive task management interface.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features
- **Secure Authentication**
  - JWT-based authentication system
  - Protected API routes
  - Automatic session expiration
  - Secure token storage
- **Kanban Board**
  - Three-column task organization
  - Drag-and-drop functionality
  - Task status management
  - Real-time updates
- **Bonus Features**
  - Task filtering capabilities
  - Custom task sorting
  - Task categorization

## Technologies Used
### Frontend
- React
- TypeScript
- Local Storage for token management
- Axios for API requests
- Modern CSS/SCSS

### Backend
- Node.js
- Express
- PostgreSQL
- JSON Web Tokens (JWT)
- TypeScript

## Installation

1. Clone the repository:
```bash
git clone [your-repo-link]
```

2. Install dependencies for both client and server:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

## Environment Setup

1. Create a `.env` file in the server directory:
```env
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
JWT_SECRET=your_jwt_secret_key
PORT=3001
DATABASE_URL=your_database_url
```

2. Set up the database:
```bash
# Run migrations
npm run migrate
```

## Usage

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the client:
```bash
cd client
npm run dev
```

3. Access the application at `http://localhost:3000`

## API Documentation

### Authentication Endpoints
```
POST /api/auth/login
- Request: { username: string, password: string }
- Response: { token: string }

POST /api/auth/logout
- Headers: { Authorization: "Bearer <token>" }
- Response: { message: "Logged out successfully" }
```

### Task Endpoints
```
GET /api/tasks
- Headers: { Authorization: "Bearer <token>" }
- Response: { tasks: Task[] }

POST /api/tasks
- Headers: { Authorization: "Bearer <token>" }
- Request: { title: string, status: string }
- Response: { task: Task }
```

## Security Features
- JWT token validation
- Protected API routes
- Secure password handling
- Session expiration
- XSS protection
- CORS configuration

## Deployment
This application is deployed on Render. Follow these steps to deploy your own instance:

1. Create a new Render account
2. Connect your GitHub repository
3. Configure environment variables in Render dashboard
4. Deploy the application

Live Demo: [Your Deployed URL]

## Local Development
To run the application locally:

1. Ensure PostgreSQL is installed and running
2. Set up your local `.env` file
3. Run database migrations
4. Start both client and server in development mode

## Screenshots
[Add screenshots of your application here]
- Login page
- Kanban board
- Task management interface

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License
[Choose and include an appropriate license]

## Contact
- Developer: [Your Name]
- GitHub: [Your GitHub Profile]
- Email: [Your Email]
