const { doLoginValidators, doLoginValidationHandler } = require("../middleware/login/loginValidators");
const { getLogin, login, logout } = require("../controllers/loginController");
const { redirectLoggedIn } = require("../middleware/common/checkLogin");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const express = require("express");


const router = express.Router();


// login page
router.get("/", decorateHtmlResponse("Login"), redirectLoggedIn, getLogin);


// process login
router.post(
    "/",
    decorateHtmlResponse("Login"),
    doLoginValidators,
    doLoginValidationHandler,
    login
);


// logout
router.delete("/", logout);


module.exports = router;