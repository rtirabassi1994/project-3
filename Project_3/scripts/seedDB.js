const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/championmeat"
);

const userSeed = [
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  },
  {
    first_name: "First Name",
    last_name: "Last Name",
    company: false,
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
