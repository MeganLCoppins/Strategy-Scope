const router = require("express").Router();
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
const chatRoutes = require("./chat");
// Project routes
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/chat", chatRoutes);

module.exports = router;
