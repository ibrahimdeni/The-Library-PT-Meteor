const express = require("express");

const router = express.Router();

// Controller
const { register, login } = require("../controllers/auth.js");
const { refreshToken } = require("../controllers/refreshToken.js");
const { getUsers } = require("../controllers/user.js");

// Auth Routes ---
router.post("/register", register);
router.post("/login", login);
router.get("/token", refreshToken);

// User Routes ---
router.get("/users", getUsers);

module.exports = router;
