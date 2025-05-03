const express = require("express");
const taskRoutes = require("./routes/taskRoutes.js");

const app = express();

// Middlewares
app.use(express.json());
app.use('/tasks', taskRoutes);

// Default route
app.get('/', (request, response) => {
    response.send("Hello from your Task Manager!");
});

app.get("/health", (request, response) => {
    response.json({
        status: "OK"
    });
});

module.exports = app;