const { Pool } = reqiure("pg");

module.exports = new Pool({
  host: "localhost",
  user: "nicolo",
  database: "message_board",
  password: process.env.DBPASS,
});
