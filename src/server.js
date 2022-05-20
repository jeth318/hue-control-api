import cors from "cors";
import router from "./router";
import { port } from "./rest/config";
import { urlencoded, json } from "body-parser";

const app = require("express")();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/hue", router);

app.listen(port, () => {
  console.info(`server started on port ${port}`);
});

export default app;
