import express from "express";
import "./db/index.js";
import cors from "cors";
import { createBlogPost } from "./controllers/blogPosts.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app
  .route("/blogPosts")
  .get((req, res) => res.json({ message: "GET ALL/" })).post(createBlogPost);
  //.post((req, res) => res.json({ message: "POST /" }));
app
  .route("/blogPosts/:id")
  .put((req, res) => res.json({ message: "PUT /" }))
  .get((req, res) => res.json({ message: "GET /" }))
  .delete((req, res) => res.json({ message: "DELETE /" }));


app.listen(port, () => console.log(`Server is running on port ${port} `));
