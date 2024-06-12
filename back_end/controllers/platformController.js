const Subject = require("../models/Subject");
const Student = require("../models/Student");
const Course = require("../models/Course");
const Class = require("../models/Class");

module.exports.subject_post = async (req, res) => {
    const { title } = req.body;
    try {
        const subject = await Subject.create({ title });
        res.status(201).json(subject);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    };
};

module.exports.student_post = async (req, res) => {
    const { first_name, last_name, birthday, emergency_number } = req.body;
    try {
        const student = await Student.create({ first_name, last_name, birthday, emergency_number });
        res.status(201).json(student);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    };
};

module.exports.course_post = async (req, res) => {
    const { name } = req.body;
    try {
        const course = await Course.create({ name });
        res.status(201).json(course);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

module.exports.class_post = async (req, res) => {
    const {name} = req.body;
    try {
        const class_ = await Class.create({ name });
        res.status(201).json(class_);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
