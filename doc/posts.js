module.exports = {
  paths: {
    "/posts/getAll": {
      get: {
        tags: {
          Posts: "Get Posts",
        },

        description: "Get Posts",

        operationId: "getPosts",

        parameters: [],

        responses: {
          200: {
            description: "Posts were obtained",

            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/post",
                },
              },
            },
          },
        },
      },
    },
    "/posts": {
      post: {
        security: [
          {
            ApiKeyAuth: [],
          },
        ],

        tags: {
          Post: "Create a post",
        },

        description: "Create a post",

        operationId: "createPost",

        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  file: {
                    type: "string",
                    format: "binary",
                  },
                  title: {
                    type: "string",
                    format: "string",
                  },
                  description: {
                    type: "string",
                    format: "string",
                  },
                },
              },
            },
          },
        },

        responses: {
          201: {
            description: "Post created successfully",
          },
        },
      },
    },

    "/posts/update/{_id}": {
      put: {
        security: [{ ApiKeyAuth: [] }],

        tags: {
          Post: "Update a post",
        },

        description: "Update post",

        operationId: "updatePost",

        parameters: [
          {
            name: "_id",

            in: "path",

            schema: {
              $ref: "#/components/schemas/_id",
            },

            description: "Id of Post to be updated",
          },
        ],

        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/postInput" },
            },
          },
        },

        responses: {
          200: { description: "Post updated successfully" },

          404: { description: "Post not found" },

          500: { description: "Server error" },
        },
      },
    },
  },
};
