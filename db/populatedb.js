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
    connectionString:
      "postgresql://postgres:LWlysELHhxLFEsarQOChadXTppMKhsBW@yamabiko.proxy.rlwy.net:26169/railway",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
