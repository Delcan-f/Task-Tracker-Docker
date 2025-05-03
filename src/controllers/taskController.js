const { request } = require("http");
const Task = require("../models/taskModel.js");

const getAllTasks = async (request, response) => {
    const items = await Task.find();
    response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    try {
        const { title, description, status } = request.body;

        const newTask = await Task.create({
            title, description, status
        });

        response.status(201).json(newTask);
    } catch (err) {
        response.status(400).json({ error: err.message });
    }
};

const deleteTask = async (request, response) => {
    try {
        const { id } = request.params;

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return response.status(404).json({ error: 'Task not found' });
        }

        response.status(204).send();
    } catch (err) {
        response.status(400).json({ error: err.message });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    deleteTask
}