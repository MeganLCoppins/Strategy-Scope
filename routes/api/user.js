const router = require("express").Router();
const userController = require("../../controllers/userController");
const authRoute = require("../../utils/authO");

// matches with /api/tasks
router.route("/")
.get(authRoute, userController.findAll)
.post(authRoute, userController.create)

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(authRoute, userController.findById)
  .put(userController.update)
  .delete(authRoute, userController.remove)

module.exports = router;
