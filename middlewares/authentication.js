const User = require("../models/User");
const Post = require("../models/Post");
require("dotenv").config();

const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: payload._id, tokens: token });

    if (!user) {
      return res.status(401).send({ message: "No puedes pasar!" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .send({ error, message: "Ha habido un problema con el token" });
  }
};

const isAdmin = async (req, res, next) => {
  const admins = ["admin", "superadmin"];

  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      message: "No permiso for you",
    });
  }

  next();
};

const isAuthor = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params._id);

    if (post.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .send({ message: "Quieto parao! Este post no es el tuyo" });
    }

    next();
  } catch (error) {
    console.error(error);

    return res.status(500).send({
      error,
      message: "Ha habido un problema al editar o borrar el post",
    });
  }
};

const isAuthorComment = async (req, res, next) => {
  try {
    const comment = await Post.findOne({
      "comments._id": req.params._id,
    });

    if (comment.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .send({ message: "Quieto parao! Este comentario no es el tuyo" });
    }

    next();
  } catch (error) {
    console.error(error);

    return res.status(500).send({
      error,
      message: "Ha habido un problema al editar o borrar el comentario",
    });
  }
};

module.exports = { authentication, isAdmin, isAuthor, isAuthorComment };
