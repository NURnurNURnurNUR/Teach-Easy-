const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/api/auth/signup", authController.signup_post);

router.post("/api/auth/login", authController.login_post);

router.get("/api/auth/login", authController.logout_get);

router.get("/api/auth/logout", authController.logout_get);

module.exports = router;