# Express API Container (task-tracker-app)
- Base Image: node:16-alpine for a lightweight Node.js environment.
- Working Directory: /app where application code resides.
- Dependencies: Installed via npm install using package*.json.
- Port Exposure: Exposes port 3000 for incoming HTTP requests.
- Environment Variables: Configured through .env files for different environments.

# MongoDB Container (mongodb)
- Image: mongo:6.0 official MongoDB image.
- Port Exposure: Exposes port 27017 for database connections.
- Data Persistence: Utilizes Docker volume mongo-data to persist data across container restarts.

# Docker Compose Configuration
## Services:
- app: Builds from the local Dockerfile, depends on mongodb, and uses environment variables from .env files.
- mongodb: Uses the official MongoDB image and mounts the mongo-data volume.

## Volumes: 
- mongo-data: Named volume for persisting MongoDB data.

# Environment Variables:
- .env: Default environment variables.
- .env.development: Variables specific to the development environment.
- .env.production: Variables specific to the production environment.
- .env.test: Variables specific to the testing environment.