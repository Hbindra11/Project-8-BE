import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const BlogPost = sequelize.define("BlogPost", {
  author: { type: DataTypes.STRING, allowNull: false },
  title: { type: DataTypes.TEXT, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  cover: { type: DataTypes.TEXT, allowNull: false },
});
BlogPost.sync();
export default BlogPost;
