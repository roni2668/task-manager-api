const Task = require('../models/Task');

// GET all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks); // ✅ include status(200)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task); // ✅ include status(200)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create new task
exports.createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask); // ✅ 201 for created
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update task
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(updatedTask); // ✅ include status(200)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE task
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' }); // ✅ include status(200)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
