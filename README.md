# 📝 Task Manager API

A simple Task Manager RESTful API built with **Node.js**, **Express**, and **MongoDB**. This project supports full **CRUD operations**, has **Keploy AI-based API testing** integrated, and uses **GitHub Actions** for CI/CD.

---

## 🔧 Features

- Create, read, update, and delete tasks
- MongoDB database
- RESTful endpoints
- Tested with Keploy AI Testing Platform
- CI/CD integration using GitHub Actions

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/task-manager-api.git
cd task-manager-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the API server
bash
Copy
Edit
docker compose up --build
Server will run on: http://localhost:5000/api/tasks

📄 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	List all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a specific task
DELETE	/api/tasks/:id	Delete a task

🔍 OpenAPI Schema
OpenAPI schema is auto-generated using swagger-jsdoc and served via Swagger UI.

Schema file: openapi.yaml

🤖 Keploy API Testing (AI)
This project uses Keploy to auto-generate test cases and mocks from API calls.

How to Record API Calls:
bash
Copy
Edit
keploy record --path keploy-report --command "docker compose up --build" --container-name task-api
How to Run Tests:
bash
Copy
Edit
keploy test --path keploy-report --delay 10
⚙️ GitHub Actions CI/CD
A GitHub Actions workflow runs tests automatically on push and pull requests.

🔗 .github/workflows/keploy-tests.yml
yaml
Copy
Edit
name: Keploy API Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  keploy-test:
    runs-on: ubuntu-latest
    services:
      mongo:
        image: mongo
        ports:
          - 27017:27017
    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run app with Keploy in record mode
        run: |
          curl -sL https://github.com/keploy/keploy/releases/latest/download/install.sh | bash
          keploy record --path keploy-report --command "npm start" --container-name task-api &
          sleep 20
          curl -X POST http://localhost:5000/api/tasks -H "Content-Type: application/json" -d '{"title":"Test","description":"CI test"}'

      - name: Run Keploy Tests
        run: keploy test --path keploy-report --delay 10

✅ Keploy Test Report Screenshot
Below is a sample screenshot of how the tests look when run with Keploy:

<img width="835" alt="01" src="https://github.com/user-attachments/assets/73107408-cde8-4068-8591-49786eb22c27" />



📂 Folder Structure
Copy
Edit
task-manager-api/
├── controllers/
├── routes/
├── models/
├── keploy-report/
├── openapi.yaml
├── Dockerfile
├── docker-compose.yml
├── README.md

🧠 Tech Stack
Node.js

Express.js

MongoDB (with Mongoose)

Docker + Docker Compose

Keploy (API Testing using AI)

GitHub Actions (CI/CD)

📬 Contact
Made by [Roni Mandal]

📧 [mandalroni406@gmail.com]
🌐 https://github.com/roni2668



---
2. Push everything to your GitHub repo:

```bash
git add .
git commit -m "Added README with Keploy test + CI/CD"
git push origin main
