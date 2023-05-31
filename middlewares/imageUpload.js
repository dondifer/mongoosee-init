require("dotenv").config();

const setImage = async (req, res, next) => {
  try {
    req.image = req.files[0].originalname;
    next();
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .send({ error, message: "Ha habido un problema con la imagen" });
  }
};

module.exports = { setImage };
