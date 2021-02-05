const router = require("express").Router();
const createUserRoute = require("./createUser");
const getUser = require("./getUser");
const deleteUser = require("./deleteUser");

router.use("/createUser", createUserRoute);

router.use("/getUser", getUser);

router.use("/deleteUser", deleteUser);

module.exports = router;