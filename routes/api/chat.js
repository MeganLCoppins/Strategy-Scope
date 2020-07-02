const router = require("express").Router();
const chatController = require("../../controllers/chatController");
const authRoute = require("../../utils/authO");

// matches with /api/chat/
router
  .route("/")
  .get(authRoute, chatController.findAll)
  .post(authRoute, chatController.create);

// Matches with "/api/chat/:id"
router.route("/:id").get(authRoute, chatController.findById);

module.exports = router;
