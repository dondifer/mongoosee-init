const express = require("express");

const router = express.Router();

const PostController = require("../controllers/PostController");
const { authentication, isAdmin } = require("../middlewares/authentication");

router.post("/", authentication, PostController.create);
router.put("/update/:_id", authentication, PostController.update);
router.delete("/delete/:_id", authentication, PostController.delete);

module.exports = router;
