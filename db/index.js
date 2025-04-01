// Import the Sequelize class from the library
import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();

// Create a new instance of Sequelize with the connection string
const sequelize = new Sequelize(process.env.PG_URI, {
    //host: process.env.DB_HOST,
    dialect: "postgres",
  });
// Export the instance so we can use it in other files
export default sequelize; 