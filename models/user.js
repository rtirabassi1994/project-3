const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: "Please enter your first name"
  },
  firstName: {
    type: String,
    trim: true,
    // required: 'Please enter your name.'
  },
  lastName: {
    type: String,
    trim: true,
    // required: 'Please enter your name.'
  },
  password: {
    type: String,
    required: "Please enter your password"
  },
  matches: [
    {
      employerId: String,
      employerName: String
    }
  ],
  location: {
    city: {
      type: String,
      // required: 'Please enter your city'
    },
    state: {
      type: String,
      // required: 'Please enter your state'
    }
  },
  bio: {
    type: String,
    // required: 'Please enter your bio.'
  },
  jobTitle: {
    type: String,
    // required: 'Please enter your Job Title'
  },
  emStatus: {
    type: String,
    // required: 'Please enter your current employement status'
  },
  img: { 
    data: Buffer, 
    contentType: String 
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
