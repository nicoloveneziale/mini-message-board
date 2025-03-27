const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

function newMessageGet(req, res) {
  res.render("form");
}

async function newMessagePost(req, res) {
  const { messageText, messageUser } = req.body;
  await db.insertMessage(messageUser, messageText);
  res.redirect("/");
}

module.exports = {
  getMessages,
  newMessageGet,
  newMessagePost,
};
