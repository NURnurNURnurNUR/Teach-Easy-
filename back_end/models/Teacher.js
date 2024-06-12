const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const Teacher_Schema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Please, enter your email"],
      unique: true,
      validate: [isEmail, "username in not valid"]
    },
    password: {
      type: String,
      required: [true, "Please, enter your password"],
      minlength: [10, "Minimum password length is 10 characters"]
    },
    assigned_course_IDs: []
});

Teacher_Schema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

Teacher_Schema.statics.login = async function(email, password) {
    const user = await this.findOne(({ email }));
    if(user) {
      const auth = await bcrypt.compare(password, user.password);
      if(auth) {
        return user;
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  };

const Teacher = mongoose.model("teachers", Teacher_Schema);

module.exports = Teacher;