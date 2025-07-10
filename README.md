
# 📦 Simple REST API with Express.js

This is a basic RESTful API built using **Node.js** and **Express.js**. It supports CRUD operations (without DELETE) on a list of in-memory items.

---

## 🚀 Features

- `GET /` – Root route with a welcome message.
- `GET /items` – Fetch all items.
- `GET /items/:id` – Fetch a single item by ID.
- `POST /items` – Add a new item.
- `PUT /items/:id` – Update an item by ID.
- Error handling for invalid routes and inputs.

---

## 🛠️ Technologies

- Node.js
- Express.js

---

## 📂 Project Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/simple-express-api.git
cd simple-express-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the server**

```bash
node index.js
```

The server will run at: `http://localhost:5000`

---

## 🔌 API Endpoints

### `GET /`
Returns a welcome message.

---

### `GET /items`
Returns all items.

**Response**
```json
[
  {
    "id": 1,
    "name": "Book",
    "description": "A mystery novel"
  }
]
```

---

### `GET /items/:id`
Returns a single item by ID.

**Response**
```json
{
  "id": 2,
  "name": "Pen",
  "description": "A blue ink pen"
}
```

---

### `POST /items`
Create a new item.

**Request**
```json
{
  "name": "Notebook",
  "description": "A plain notebook"
}
```

**Response**
```json
{
  "data": {
    "id": 3,
    "name": "Notebook",
    "description": "A plain notebook"
  },
  "message": "New item created successfully"
}
```

---

### `PUT /items/:id`
Update an item by ID.

**Request**
```json
{
  "name": "Updated Pen",
  "description": "Now a red ink pen"
}
```

**Response**
```json
{
  "data": {
    "id": 2,
    "name": "Updated Pen",
    "description": "Now a red ink pen"
  },
  "message": "Item updated successfully"
}
```

---

## ❌ Error Examples

- **404 Not Found**
  - Route not found: `/wrongroute`
  - Item not found: `/items/999`

- **400 Bad Request**
  - Missing `name` or `description` in POST or PUT

---

