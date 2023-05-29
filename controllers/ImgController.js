const Post = require("../models/Post.js");
const User = require("../models/User");

const ImgController = {
  async update(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.body.id,
        { $set: { image: req.file.filename } },
        {
          new: true,
        }
      );
      console.log(req.body.id);
      res.send({ message: "Se ha añadido a imagen perfectamienstes", post });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = ImgController;
