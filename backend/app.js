import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import "dotenv/config";

const port = 3001;
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

mongoose.connect(process.env.DB_CONNECTION_STRING_DOCKER).then(() => {
  app.listen(port, () => console.log(`Server started on port ${port}`));
});
