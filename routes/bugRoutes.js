const express = require("express");
const router  = express.Router();
const bugController = require("../controllers/bugController");

/**
 * GET
 */
router.get("/:projectId", bugController.allByProject);

/**
 * CREATE
 */
router.get("/create/:projectId", bugController.createGet);

router.post("/create", bugController.createPost);

/**
 * DELETE
 */
router.get("/delete/:id", bugController.deleteGet);
router.post("/delete", bugController.deletePost);


module.exports = router;