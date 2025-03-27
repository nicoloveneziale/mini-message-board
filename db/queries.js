const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(author, message) {
  await pool.query("INSERT INTO messages (author, message) VALUES ($1, $2)", [
    author,
    message,
  ]);
}

module.exports = {
  getAllMessages,
  insertMessage,
};
