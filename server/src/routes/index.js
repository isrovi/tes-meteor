const express = require("express");

const router = express.Router();

const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const { login, checkAuth } = require("../controllers/auth");

const { auth } = require("../middlewares/auth");

router.post("/user", addUsers);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

module.exports = router;
