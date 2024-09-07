const Task = require('../models/Task');

// Create a new task
exports.createTask = async (req, res) => {
    const { title } = req.body;

    try {
        const task = new Task({ title, user: req.user.id });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Get all tasks for the user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Task removed' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};