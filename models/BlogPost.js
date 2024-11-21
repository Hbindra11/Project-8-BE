import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const BlogPost = sequelize.define("BlogPost", {
  author: { type: DataTypes.STRING,  defaultValue: "Anonymous"},
  title: { type: DataTypes.TEXT, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  cover: { type: DataTypes.TEXT, defaultValue:"https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" },
});
BlogPost.sync({alter:true});
export default BlogPost;
