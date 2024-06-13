const express = require("express");
const platformController = require("../controllers/platformController");

const router = express.Router();

router.post("/api/create/subject", platformController.subject_post);

router.post("/api/create/student", platformController.student_post);

router.post("/api/create/course", platformController.course_post);

router.post("/api/create/class", platformController.class_post);

router.post("/api/global", platformController.create_global);

module.exports = router; 