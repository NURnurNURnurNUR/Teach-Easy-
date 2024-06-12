const mongoose = require("mongoose");

const Subject_Schema = new mongoose.Schema({
    title: {
        type: String
    }
});

const Subject = new mongoose.model("subjects", Subject_Schema);

module.exports = Subject;
