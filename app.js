const express = require('express');
const taskRoutes = require('./routes/task');
const app = express();

app.use(express.json());
app.use('/api/tasks', taskRoutes);

module.exports = app; // ✅ export app for testing
