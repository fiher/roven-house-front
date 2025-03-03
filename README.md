# Roven Guest house front end

A modern React application built with TypeScript, comprehensive testing, and Docker support.

## Features

- React 18 with TypeScript
- Chakra UI component library
- React Router for navigation
- Zustand for state management
- React Query for data fetching
- Winston for logging
- Jest and React Testing Library for tests
- ESLint and Prettier for code quality
- Docker and Docker Compose setup
- Git hooks with Husky and lint-staged

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm 7 or higher
- Docker and Docker Compose (optional for containerization)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd 
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

## Development

### Available Scripts

- `npm start`: Start the development server
- `npm test`: Run tests
- `npm run build`: Build for production
- `npm run lint`: Lint the code
- `npm run format`: Format the code with Prettier

### Docker

To build and run the application using Docker:

```
docker-compose up --build
```

The application will be available at http://localhost:3000.

## Project Structure

```
src/
├── assets/        # Static assets like images, fonts, etc.
├── components/    # Reusable UI components
│   ├── common/    # Common components used across the application
│   ├── layouts/   # Layout components
│   └── ui/        # Basic UI components
├── contexts/      # React context providers
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API services and data fetching
├── tests/         # Test files
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
    └── logger/    # Logging utilities
```

## License

This project is licensed under the MIT License.

