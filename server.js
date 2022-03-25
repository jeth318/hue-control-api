const { port } = require("./rest/config");
const cors = require("cors");
const bodyParser = require("body-parser");
// config should be imported before importing any other file
const app = require("express")();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = require("./router");
app.use("/hue", router);

app.listen(port, () => {
  console.info(`server started on port ${port}`);
});

module.exports = app;
