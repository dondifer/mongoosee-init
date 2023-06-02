module.exports = {
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",

        name: "Authorization",

        in: "header",
      },
    },
    schemas: {
      post: {
        type: "object",

        properties: {
          _id: {
            type: "objectId",

            description: "post identification number",

            example: "6201064b0028de7866e2b2c4",
          },

          title: {
            type: "string",

            description: "post  title",

            example: "My post",
          },

          description: {
            type: "string",

            description: "post description",

            example: "This is my post description",
          },
          image: {
            type: "string",
            description: "post image",
            example: "324hfe9h9t23t23t9h32f32f93hf32f9g32f93rt.jpg",
          },
          comments: {
            type: "object[]",

            description: "post comments",

            example:
              "[{userId:6234064b0028d23d66e2b2c4, comment: 'hello',image:'e1eb32i2bf22b3ifb32d2f2.jpg'},{userId:3454064b0028d23d66e2b2c4, comment: 'how are you?',image:'bfh29fh239f3ifb32d2f2.jpg'}]",
          },
          userId: {
            type: "objectId",

            description: "post author user id",

            example: "620106777728de7866e2b2c4",
          },
          likes: {
            type: "object[]",
            description: "post likes",
            example:
              "[{userId:6234064b0028d23d66e2b2c4},{userId:3454064b0028d23d66e2b2c4}]",
          },
        },
      },
      postInput: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "post's title",
            example: "My post title",
          },
          description: {
            type: "string",
            description: "My post description title",
            example: "my post description",
          },
        },
      },
      _id: {
        type: "objectId",

        description: "An id of a post",

        example: "6470da3ba50d0ed22dd4ef96",
      },
    },
  },
};
