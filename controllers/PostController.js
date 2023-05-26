const Post = require("../models/Post.js");

const PostController = {
  async create(req, res) {
    try {
      const post = await Post.create({
        ...req.body,
        userId: req.user._id,
      });

      res.status(201).send(post);
    } catch (error) {
      console.error(error);
    }
  },
  async update(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id },
        {
          new: true,
        }
      );
      console.log(req.params._id);
      res.send({ message: "Se ha actualizado perfecstamiente", post });
    } catch (error) {
      console.error(error);
    }
  },
  async delete(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);
      res.send({ message: "Éxito al borrar el post", post });
    } catch (error) {
      console.error(error);
    }
  },
  async getAll(req, res) {
    try {
      const post = await Post.find().populate("userId");
      res.send({ message: "Aki tan todos los post", post });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = PostController;
