const express = require("express");
const {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.js");
const router = express.Router();

router.get("/", getUsers);
router.post("/add", addUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router;
