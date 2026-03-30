# GameLinked
A LinkedIn for gamers.

## Boilerplate created (Node.js)

Project structure:

- `Backedn/` → Node.js + Express backend
- `Frontend/` → Simple static frontend

## Backend setup

1. Go to the backend folder:
	- `cd Backedn`
2. Install packages:
	- `npm install`
3. Create env file:
	- `cp .env.example .env`
4. Run in development:
	- `npm run dev`

## Prisma + Database

This backend uses Prisma and reads database connection from `.env`:

- `DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"`

Prisma commands:

- `npm run prisma:generate`
- `npm run prisma:push`
- `npm run prisma:studio`

API routes added:

- `GET /api/profiles`
- `POST /api/profiles`

Backend will run at `http://localhost:5000`.

Health endpoint:

- `GET /api/health`

## Frontend setup

Open `Frontend/index.html` with Live Server (or any static file server).

Then click **Check API Status** to test backend connection.
