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
        .json({ error: "author,title,content, and cover are all required!" });
        
     const blogPost = await BlogPost.create(req.body); 
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};
