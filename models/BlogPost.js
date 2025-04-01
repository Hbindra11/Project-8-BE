import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

/**
 * Defines the BlogPost model.
 * 
 * @typedef {Object} BlogPost
 * @property {string} author - The author of the blog post. Defaults to "Anonymous".
 * @property {string} title - The title of the blog post. This field is required.
 * @property {string} content - The content of the blog post. This field is required.
 * @property {string} cover - The URL of the cover image for the blog post. Defaults to a placeholder image URL.
 */
const BlogPost = sequelize.define("BlogPost", {
  author: { type: DataTypes.STRING,  defaultValue: "Anonymous"},
  title: { type: DataTypes.TEXT, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  cover: { type: DataTypes.TEXT, defaultValue:"https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" },
});
BlogPost.sync({alter:true});
export default BlogPost;
