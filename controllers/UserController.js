const User = require("../models/User");
const Post = require("../models/Post.js");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/key.js");

const UserController = {
  async register(req, res, next) {
    try {
      const user = await User.create({ ...req.body, image: req.image });
      res.status(201).send({ message: "Usuario registrado con exito", user });
    } catch (error) {
      error.origin = "usuario";
      next(error);
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });

      const token = jwt.sign({ _id: user._id }, jwt_secret);

      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      await user.save();

      res.send({ message: "Welcome " + user.name, token });
    } catch (error) {
      console.error(error);
    }
  },
  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });

      res.send({ message: "Desconectado con éxito" });
    } catch (error) {
      console.error(error);

      res.status(500).send({
        message: "Hubo un problema al intentar desconectar al usuario",
      });
    }
  },
  async getInfo(req, res) {
    try {
      const user = await User.findById(req.user._id);
      const userPosts = await Post.find({ userId: req.user._id });
      const userPost = { userInfo: user, posts: userPosts };

      res.send({ message: "Ete he Sech", userPost });
    } catch (error) {
      console.error(error);

      res.status(500).send({
        message: "Hubo un problema al intentar obtener el usuario",
      });
    }
  },
};

module.exports = UserController;
