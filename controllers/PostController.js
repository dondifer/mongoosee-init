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
      const { page = 1, limit = 10 } = req.query;
      const post = await Post.find()
        .populate("userId")
        .limit(limit)
        .skip((page - 1) * limit);
      res.send({ message: "Aki tan todos los post", post });
    } catch (error) {
      console.error(error);
    }
  },
  async insertComment(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        {
          $push: {
            comments: { comment: req.body.comment, userId: req.user._id },
          },
        },

        { new: true }
      );

      res.send(post);
    } catch (error) {
      console.error(error);

      res.status(500).send({ message: "There was a problem with your review" });
    }
  },
  async findById(req, res) {
    try {
      const post = await Post.findById(req.params._id);
      res.send({ message: "Aki ta su post", post });
    } catch (error) {
      console.error(error);
    }
  },
  async getPostsByName(req, res) {
    try {
      const title = new RegExp(req.params.title, "i");
      const post = await Post.find({ title });
      res.send(post);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = PostController;
