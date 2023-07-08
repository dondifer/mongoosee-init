const express = require("express");
const upload = require("multer")();

const router = express.Router();

const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");
const { setImage } = require("../middlewares/imageUpload");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/info", authentication, UserController.getInfo);
router.delete("/logout", authentication, UserController.logout);

module.exports = router;
