const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URL || 'mongodb://localhost:27017/taskdb';
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('✅ MongoDB connected');
};

module.exports = connectDB;
