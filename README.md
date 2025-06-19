
# 📝 Task Manager API

A simple full-stack Task Manager web app that allows users to Create, Read, Update, and Delete tasks using a custom-built RESTful API with Express.js and MongoDB. A lightweight HTML frontend is also included to interact with the backend.

---

## 🔧 APIs Created and Their Functionality

| Method | Endpoint             | Description                        |
|--------|----------------------|------------------------------------|
| GET    | `/api/tasks`         | Get all tasks                      |
| GET    | `/api/tasks/:id`     | Get a single task by ID            |
| POST   | `/api/tasks`         | Create a new task                  |
| PUT    | `/api/tasks/:id`     | Update an existing task by ID      |
| DELETE | `/api/tasks/:id`     | Delete a task by ID                |

Each task includes:
```json
{
  "title": "string",
  "description": "string (optional)",
  "status": "pending | completed"
}
```

---

## 🛢️ Database Used

- **Database**: MongoDB (local or Atlas)
- **Integration**: Handled using the `mongoose` ODM

MongoDB is connected in `config/db.js`:
```js
mongoose.connect(process.env.MONGO_URI);
```

The connection string is stored in `.env`:
```
MONGO_URI=mongodb://localhost:27017/taskdb
```

---

## 🚀 How to Run the Server

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure `.env`
Create a `.env` file:
```
MONGO_URI=mongodb://localhost:27017/taskdb
PORT=5000
```

### 4. Run the Server
```bash
npm run dev
```

Server will be available at:  
```
http://localhost:5000
```

---

## 💻 How to Run the Frontend (Optional)

Open the following file in your browser:

```
public/index.html
```

Or, if `express.static('public')` is set in `server.js`, just go to:

```
http://localhost:5000
```

You’ll see a UI to:
- Add a task
- Delete a task
- Edit a task

---

## 📡 How to Interact with the API (Postman)

You can use [Postman](https://www.postman.com/) to test the API endpoints.

### ➕ Create Task
- **Method**: POST  
- **URL**: `http://localhost:5000/api/tasks`  
- **Body** (raw JSON):
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

### 📥 Get All Tasks
- **Method**: GET  
- **URL**: `http://localhost:5000/api/tasks`

### 📄 Get Task by ID
- **Method**: GET  
- **URL**: `http://localhost:5000/api/tasks/<id>`

### ✏️ Update Task
- **Method**: PUT  
- **URL**: `http://localhost:5000/api/tasks/<id>`  
- **Body** (raw JSON):
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed"
}
```

### 🗑️ Delete Task
- **Method**: DELETE  
- **URL**: `http://localhost:5000/api/tasks/<id>`

---

## 📌 Author

**Your Name**  
GitHub: https://github.com/roni2668

---

## 📄 License

MIT License
