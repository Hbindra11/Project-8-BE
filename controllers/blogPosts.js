import BlogPost from "../models/BlogPost.js";

export const createBlogPost = async (req, res) => {
  try {
    const {
      body: { author, title, content, cover },
    } = req;
    // console.log('my blog: '+req.json);
    if (!author || !title || !content || !cover)
      return res
        .status(400)
        .json({ error: "Fields: author,title,content, and cover are all required!" });

    const blogPost = await BlogPost.create(req.body);
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.findAll();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const blog = await BlogPost.findByPk(id);
    if (!blog) return res.status(400).json({ error: "Blog not found!" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const {
      body: { author, title, content, cover },
      params: { id },
    } = req;
    if (!author || !title || !content || !cover)
      return res
        .status(400)
        .json({ error: "author,title,content, and cover are all required!" });
    const blog = await BlogPost.findByPk(id);
    if (!blog) return res.status(400).json({ error: "Blog not found!" });
    await blog.update(req.body);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const blog = await BlogPost.findByPk(id);
    if (!blog) return res.status(400).json({ error: "Blog not found!" });
    await blog.destroy();
    res.json({ message: "Blog was deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
