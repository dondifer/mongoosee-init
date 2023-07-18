const express = require("express");
const upload = require("multer")();
const router = express.Router();

const PostController = require("../controllers/PostController");
const {
  authentication,
  isAuthor,
  isAuthorComment,
} = require("../middlewares/authentication");

const { setImage } = require("../middlewares/imageUpload");

router.post("/", authentication, PostController.create);
router.put("/update/:_id", authentication, isAuthor, PostController.update);
router.delete("/delete/:_id", authentication, isAuthor, PostController.delete);
router.get("/getAll", PostController.getAll);
router.put("/comment/:_id", authentication, PostController.insertComment);
router.put(
  "/updateComment/:_id",
  authentication,
  isAuthorComment,
  PostController.updateComment
);
router.delete(
  "/deleteComment/:_id",
  authentication,
  isAuthorComment,
  PostController.deleteComment
);
router.get("/findById/:_id", PostController.findById);
router.get("/findByTitle/:title", PostController.getPostsByName);
router.put("/like/:_id", authentication, PostController.insertLike);
router.delete("/unlike/:_id", authentication, PostController.removeLike);

module.exports = router;
