Great! Here's a full **final version of your `README.md`** tailored to your Task Manager API project, including all required sections and a placeholder for your test coverage screenshot:

---

````markdown
# 🗂️ Task Manager API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to perform full CRUD operations on tasks. It also includes comprehensive **unit**, **integration**, and **API tests** using **Jest** and **Supertest**.

---

## 📦 Features

- ✅ Create, Read, Update, Delete (CRUD) tasks
- ✅ MongoDB database integration
- ✅ Clean modular file structure (MVC pattern)
- ✅ Environment configuration with `.env`
- ✅ In-memory MongoDB testing
- ✅ Test coverage using `jest --coverage`

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Testing:** Jest, Supertest, mongodb-memory-server
- **Tools:** dotenv, nodemon

---

## 📁 API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/api/tasks`     | Get all tasks         |
| GET    | `/api/tasks/:id` | Get task by ID        |
| POST   | `/api/tasks`     | Create new task       |
| PUT    | `/api/tasks/:id` | Update task by ID     |
| DELETE | `/api/tasks/:id` | Delete task by ID     |

---

## 🧪 Testing

### ✅ How to Run All Tests:

```bash
npm test
````

### ✅ How to Run with Coverage:

```bash
npx jest --coverage
```

### ✅ Coverage Report:

To view the full report:

```bash
start ./coverage/lcov-report/index.html  # For Windows
```

or open manually in a browser.

### 📸 Test Coverage Screenshot:

![Test Coverage Screenshot](./coverage.png)

> 📌 <img width="956" alt="task_coverage" src="https://github.com/user-attachments/assets/fb4f3200-c588-4309-80d7-596f54836736" />

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
npm install
```

Create a `.env` file and add:

```env
MONGO_URI=your-mongodb-connection-string
PORT=5000
```

Start the server:

```bash
npm run dev
```

---

## 👨‍🔬 Tools & Libraries Used

* **Jest**: JavaScript testing framework
* **Supertest**: HTTP assertions for Express APIs
* **mongodb-memory-server**: In-memory testing DB
* **dotenv**: Environment variable management

---

## 📌 Author

**Your Name**
[GitHub] (https://github.com/roni2668) | [LinkedIn](http://www.linkedin.com/in/ronimandal)

---

## 📝 License

This project is licensed under the MIT License.


