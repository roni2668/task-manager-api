const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use(express.static('public'));
app.use('/api/tasks', taskRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});