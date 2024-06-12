const mongoose = require("mongoose");

const Course_Schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    class_IDs: []
});

const Course = mongoose.model("courses", Course_Schema);

module.exports = Course;