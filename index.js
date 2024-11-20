import express from "express";
import "./db/index.js";
import cors from "cors";
import {
  createBlogPost,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "./controllers/blogPosts.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.route("/blogPosts").get(getBlogs).post(createBlogPost);
//.get((req, res) => res.json({ message: "GET ALL/" }))
//.post((req, res) => res.json({ message: "POST /" }));
app
  .route("/blogPosts/:id")
  .put(updateBlog) //((req, res) => res.json({ message: "PUT /" }))
  .get(getBlogById) //((req, res) => res.json({ message: "GET /" }))
  .delete(deleteBlog); //((req, res) => res.json({ message: "DELETE /" }));

app.listen(port, () => console.log(`Server is running on port ${port} `));
