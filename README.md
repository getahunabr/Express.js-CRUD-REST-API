# Express.js CRUD REST API

A simple **REST API** built with **Express.js** that performs **CRUD operations** on `city` resources using an **in-memory array**. No database is required.

The project uses:

- **ES6 Modules**
- **dotenv** for environment variables
- **Nodemon** for development
- MVC-style folder structure (controllers & routes)

---

## Features

- Create a city (`POST /cities`)
- Get all cities (`GET /cities`)
- Get a city by ID (`GET /cities/:id`)
- Update a city (`PUT /cities/:id`)
- Delete a city (`DELETE /cities/:id`)
- Uses **in-memory storage** (data resets on server restart)
- Fully compatible with **ES6 modules**

---

## 🗂 Project Structure

```
project/
│
├── server.js          # Starts the server
├── app.js             # Express app & middleware
├── .env               # Environment variables
│
├── routes/
│   └── city.routes.js
│
├── controllers/
│   └── city.controller.js
│
├── package.json
└── node_modules/
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/express-crud-api.git
cd express-crud-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
PORT=3000
```

---

## 🏃 Running the Server

**Development with hot reload (nodemon):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

Server will run at:

```
http://localhost:3000
```

---

## 📌 API Endpoints

| Method | Endpoint    | Description    |
| ------ | ----------- | -------------- |
| POST   | /cities     | Create a city  |
| GET    | /cities     | Get all cities |
| GET    | /cities/:id | Get city by ID |
| PUT    | /cities/:id | Update a city  |
| DELETE | /cities/:id | Delete a city  |

---

## 🧪 Testing

You can test the API using:

- [Postman](https://www.postman.com/)
- [cURL](https://curl.se/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)

---

## ⚡ Notes

- Data is **stored in-memory**, so all cities will reset when the server restarts.
- `.env` is used for configuration (port, environment variables).
- No database is needed.
