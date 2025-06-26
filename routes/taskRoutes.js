const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); // adjust the path if needed

const app = express();
app.use(express.json()); // important for parsing JSON

// ✅ Mount the route
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
