// external imports
const express = require("express");
const { check } = require("express-validator");

const { addUserValidators, addUserValidationHandler } = require("../middleware/users/userValidators");
const { getUsers, addUser, removeUser } = require("../controllers/usersController");
const { checkLogin, requireRole } = require("../middleware/common/checkLogin");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const avatarUpload = require("../middleware/users/avatarUpload");


const router = express.Router();


// users page
router.get(
    "/",
    decorateHtmlResponse("Users"),
    // checkLogin,
    // requireRole(["admin"]),
    getUsers
);


// add user
router.post(
    "/",
    // checkLogin,
    // requireRole(["admin"]),
    avatarUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
);


// remove user
router.delete("/:id", checkLogin, requireRole(["admin"]), removeUser);


module.exports = router;