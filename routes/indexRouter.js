const { Router } = require("express");
const {
  getMessages,
  newMessageGet,
  newMessagePost,
} = require("../controllers/indexController");

const router = Router();

router.get("/", getMessages);

router.get("/new", newMessageGet);

router.post("/new", newMessagePost);

module.exports = router;
