const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    if INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR ( 255 ),
    message TEXT
    );
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://nicolo:pgpass@localhost:5432/messages",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
