import BlogPost from "../models/BlogPost.js"; // Import the BlogPost model

// Controller to create a new blog post
export const createBlogPost = async (req, res) => {
  try {
    const {
      body: { author, title, content, cover }, // Destructure the request body
    } = req;

    //console.log('my blog: ' + req.json); // Debugging log 

    // Validate required fields
    if (!title || !content)
      return res
        .status(400)
        .json({
          error: "Fields title and content are required!", // Return error if title or content is missing
        });

    // Create a new blog post in the database
    const blogPost = await BlogPost.create(req.body);

    // Respond with the created blog post
    res.json(blogPost);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: error.message });
  }
};

// Controller to fetch all blog posts
export const getBlogs = async (req, res) => {
  try {
    // Retrieve all blog posts from the database
    const blogs = await BlogPost.findAll();

    // Respond with the list of blog posts
    res.json(blogs);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: error.message });
  }
};

// Controller to fetch a single blog post by its ID
export const getBlogById = async (req, res) => {
  try {
    const {
      params: { id }, // Destructure the ID from request parameters
    } = req;

    // Find the blog post by its primary key (ID)
    const blog = await BlogPost.findByPk(id);

    // If the blog post is not found, return an error
    if (!blog) return res.status(400).json({ error: "Blog not found!" });

    // Respond with the blog post
    res.json(blog);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: error.message });
  }
};

// Controller to update an existing blog post
export const updateBlog = async (req, res) => {
  try {
    const {
      body: { author, title, content, cover }, // Destructure the request body
      params: { id }, // Destructure the ID from request parameters
    } = req;

    // Validate required fields
    if (!title || !content)
      return res
        .status(400)
        .json({ error: "Fields title and content are required!" });

    // Find the blog post by its primary key (ID)
    const blog = await BlogPost.findByPk(id);

    // If the blog post is not found, return an error
    if (!blog) return res.status(400).json({ error: "Blog not found!" });

    // Update the blog post with the new data
    await blog.update(req.body);

    // Respond with the updated blog post
    res.json(blog);
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a blog post
export const deleteBlog = async (req, res) => {
  try {
    const {
      params: { id }, // Destructure the ID from request parameters
    } = req;

    // Find the blog post by its primary key (ID)
    const blog = await BlogPost.findByPk(id);

    // If the blog post is not found, return an error
    if (!blog) return res.status(400).json({ error: "Blog not found!" });

    // Delete the blog post from the database
    await blog.destroy();

    // Respond with a success message
    res.json({ message: "Blog was deleted!" });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: error.message });
  }
};
