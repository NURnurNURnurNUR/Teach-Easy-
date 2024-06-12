const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");

const max_age = 24 * 60 * 60 * 1000
const generate_token = (id) => {
    return jwt.sign({ id }, "teach-easy", {
        expiresIn: max_age
    });
};

module.exports.login_post = async (req, res) => {
    const {email, password} = req.body;
    try {
        const teacher = await Teacher.login(email, password);
        const token = generate_token(teacher._id);
        res.cookie("jwt", token, {httpOnly: true, maxAge: max_age, sameSite : "Lax", secure: true, path: "/"});
        res.status(200).json(teacher);
        res.end();
    }
    catch(error) {
        console.log(error);
        res.status(400).json(error);
    };
};

module.exports.signup_post = async (req, res) => {
    const {email, password} = req.body;
    try {
        const teacher = await Teacher.create({ email, password });
        const token = generate_token(teacher._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: max_age});
        res.status(201).json(teacher);
    }
    catch (error) {
        res.status(400).json(error);
    };
};

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json("success");
    res.end();
};

