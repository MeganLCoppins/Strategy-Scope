const router = require("express").Router();
const projectController = require("../../controllers/projectController");
const authRoute = require("../../utils/authO");

// matches with /api/projects
router
.route("/")
.get(authRoute, projectController.findAll)
.post(authRoute, projectController.create)

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(authRoute, projectController.findById)
  .put(authRoute, projectController.update)
  // .delete(authRoute, taskController.remove);

module.exports = router;
