const mongoose = require("mongoose");

const Class_Schema = new mongoose.Schema({
    name: {
        type: String
    },
    student_IDs: []
});

const Class = new mongoose.model("classes", Class_Schema);

module.exports = Class;

