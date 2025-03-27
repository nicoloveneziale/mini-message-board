const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "nicolo",
  database: "message_board",
  password: "pgpass",
  port: 5432,
});
