const express = require("express");
const authController = require("../controllers/authController");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const middleware = require("../middleware/authMiddleware");

const router = express.Router();
router.use(cookieParser());
router.use(cors());

router.post("/api/auth/signup", authController.signup_post);

router.post("/api/auth/login", authController.login_post);

router.get("/api/auth/login", authController.logout_get);

router.get("/api/auth/logout", authController.logout_get);

router.get("/api/auth/check_user", middleware.check_user);

module.exports = router;