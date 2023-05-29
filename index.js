const express = require("express");
const multer = require("multer");
const app = express();

const path = require("path");
const upload = multer({ dest: "uploads/" });

const htmlfile = path.join(__dirname, "./main.html");
app.get("/", (req, res) => {
  res.sendFile(htmlfile);
});

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const { typeError } = require("./middlewares/errors");

const { dbConnection } = require("./config/config");
const ImgController = require("./controllers/ImgController");
const { authentication } = require("./middlewares/authentication");

app.use(express.json());
dbConnection();
app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));

app.post("/img", upload.single("img"), ImgController.update);

app.use(typeError);
app.listen(PORT, console.log(`Server started at port ${PORT}`));
