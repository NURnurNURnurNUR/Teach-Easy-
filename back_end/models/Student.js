const mongoose = require("mongoose");

const Student_Schema =  new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    birthday: {
        type: String
    },
    emergency_number: {
        type: String
    }
});

const Student = new mongoose.model("students", Student_Schema);

module.exports = Student;