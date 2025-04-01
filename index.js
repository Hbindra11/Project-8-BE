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
/**
 * The port number on which the server will listen.
 * It first checks for an environment variable `PORT` and uses its value if defined.
 * If `PORT` is not defined, it defaults to 8080.
 * 
 * @constant {number} port - The port number for the server.
 */
const port = process.env.PORT || 8080;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Route to handle operations on the collection of blog posts
app
  .route("/blogPosts")
  // GET request to retrieve all blog posts
  .get(getBlogs)
  // POST request to create a new blog post
  .post(createBlogPost);

// Route to handle operations on a specific blog post identified by its ID
app
  .route("/blogPosts/:id")
  // PUT request to update an existing blog post by ID
  .put(updateBlog)
  // GET request to retrieve a specific blog post by ID
  .get(getBlogById)
  // DELETE request to remove a specific blog post by ID
  .delete(deleteBlog);

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server is running on port ${port} `));
