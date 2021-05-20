const express = require("express");
const router  = express.Router();
const userStoryController = require("../controllers/userStoryController");

router.get("/:projectId", userStoryController.allByProject);

router.get("/create/:projectId", userStoryController.createGet);
router.post("/create", userStoryController.createPost);

module.exports = router;