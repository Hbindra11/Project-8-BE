import pg from "pg";
const { Client } = pg;
const client = new Client();
await client.connect();

try {
  const reponse = await client.query("SELECT $1::text as message", [
    "Hello world",
  ]);
  console.log(reponse.rows[0].message);
} catch (error) {
  console.error(error);
} finally {
  await client.end();
}
