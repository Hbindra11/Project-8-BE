import pg from "pg";
import express from "express";
import cors from 'cors';
const { Client } = pg;
const app = express();
const port = 3000;

// connecting to my postgreSQL db --- was successful!!
const client = new Client({
  connectionString: process.env.PG_URI,
});
await client.connect();
//app.use(express.json());
app.use(cors());
let result = ''
try {
  //   const reponse = await client.query("SELECT $1::text as message", [
  //     "Hello world!!",
  //   ]);
  const response = await client.query(
    "SELECT * FROM blogPosts WHERE id = $1;",
    [1]
  );
  console.log(response.rows[0]);
  result = response.rows[0];
} catch (error) {
  console.error(error);
} finally {
  await client.end();
}
console.log(result);


// using express to handel http requests and responses -- and server runs alright!!
//app.get("/", (request, response) => {response.send("Hello, World again!!!")});
app.get('/', (request, response )=> {response.send(result)});
app.listen(port, () => console.log(`Server is running on port ${port} `));
