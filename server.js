const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); // adjust if needed

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://mongo:27017/tasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected');

  // Mount routes
  app.use('/api/tasks', taskRoutes);

  // Start server
  app.listen(5000, () => {
    console.log('✅ Server running on http://localhost:5000');
  });
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});
