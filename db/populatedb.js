const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR (255 ),
    message TEXT
    );
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString:
      "postgresql://postgres:MqQrLguxdDafDFGQZKPcqgfvhcnxIIEg@yamanote.proxy.rlwy.net:43421/railway",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

main();
