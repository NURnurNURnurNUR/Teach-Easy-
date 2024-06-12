const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");

/*
const handle_errors = (error) => {
    const err = {user_name : "", user_password : ""};

    if(error.message === "incorrect username") {
        err.user_name = "The username is not registered";
    }

    if(error.message === "incorrect password") {
        err.user_password = "Password is not correct";
    }

    if(error.message.includes("users validation failed")) {
        Object.values(error.errors).forEach(( { properties }) => {
            err[properties.path] = properties.message;
        });
    }
    return err;
};
*/

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
        res.cookie("jwt", token, {httpOnly: true, maxAge: max_age});
        res.status(200).json(teacher);
        res.end();
    }
    catch(error) {
        //const errors = handle_errors(error);
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
        //const errors = handle_errors(error);
        res.status(400).json(error);
    };
};

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.status(200).json("success");
    res.end();
};

