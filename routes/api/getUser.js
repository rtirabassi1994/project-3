const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
    .get(usersController.findUser)

router.route("/:userName/:password")
    .get(usersController.findUser)

module.exports = router;