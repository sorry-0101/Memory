import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
const CONNECTION_URL =
  "mongodb+srv://admin:tiger@cluster0.xemff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server is running : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
// mongoose.set("useFindAndModify", false);
