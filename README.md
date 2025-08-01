# TV Show Backend

This is the backend API for the TV Show app, built with **Node.js**, **Express**, **MySQL**, **Sequelize**, and **JWT authentication**. It provides a secure RESTful API for managing users and their favorite movies or TV shows.

## 📁 Project Structure

```
server/
├── config/           # Sequelize DB configuration
├── controllers/      # Request handler functions
├── middleware/       # JWT auth middleware
├── models/           # Sequelize models
├── routes/           # API route definitions
├── .env              # Environment variables
├── server.js         # Entry point
└── package.json      # Project dependencies and scripts
```

## 🛠️ Tech Stack

- Node.js
- Express
- MySQL
- Sequelize ORM
- JWT Authentication
- dotenv

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Theja-5Thej/Tvshow.git
cd Tvshow/server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the `server` folder and add the following:

```env
PORT=5000
DB_HOST=your-mysql-host
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
DB_NAME=your-database-name
JWT_SECRET=your-secret-key
```

> Replace the placeholders with your actual DB and secret values.

### 4. Run database migrations/sync

The project uses Sequelize to sync models:

```bash
node server.js
```

Make sure the database exists before running the server.

### 5. Start the server

```bash
npm start
```

The server should run on `http://localhost:5000`.

## 🛡️ Authentication

JWT tokens are used for protected routes. After logging in, include the token in the `Authorization` header as:

```
Authorization: Bearer <your_token_here>
```

## 📬 API Endpoints

> Example base URL: `http://localhost:5000/api`

- `POST /auth/register` – Register new user
- `POST /auth/login` – Authenticate user and return JWT
- `GET /shows` – Get list of TV shows (protected)
- `POST /shows` – Add a new show (protected)
- `PUT /shows/:id` – Update a show (protected)
- `DELETE /shows/:id` – Delete a show (protected)

## 🐞 Scripts

```bash
npm run dev     # Start server with nodemon
npm start       # Start server normally
```

## 🧪 Testing (Coming soon)

Unit and integration testing with Jest and Supertest can be added.

## 📄 License

MIT License

---

Made with ❤️ by [@Theja-5Thej](https://github.com/Theja-5Thej)
