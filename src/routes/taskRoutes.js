const express = require("express");
const { getAllTasks, createTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.delete('/', deleteTask);

module.exports = router;