const mongoose = require("mongoose");

const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Why no title?"],
    },
    description: {
      type: String,
      required: [true, "No description?"],
    },
    image: {
      type: String,
    },
    comments: [
      {
        userId: { type: ObjectId, ref: "User" },
        comment: {
          type: String,
          required: [true, "Your comment is empty?"],
        },
      },
    ],
    userId: {
      type: ObjectId,
      ref: "User",
    },
    likes: [{ userId: { type: ObjectId, ref: "User" } }],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
