const express = require('express');
const app = express();

app.use(express.json());
const taskRoutes = require('./routes/task');
app.use('/api/tasks', taskRoutes);

module.exports = app; // ✅ important!
