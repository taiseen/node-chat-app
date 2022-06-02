const { getInbox, searchUser, addConversation, getMessages, sendMessage } = require("../controllers/inboxController");
const { checkLogin } = require("../middleware/common/checkLogin");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const attachmentUpload = require("../middleware/inbox/attachmentUpload");
const express = require("express");


const router = express.Router();


// inbox page
router.get("/", decorateHtmlResponse("Inbox"), checkLogin, getInbox);

// search user for conversation
router.post("/search", checkLogin, searchUser);

// add conversation
router.post("/conversation", checkLogin, addConversation);

// get messages of a conversation
router.get("/messages/:conversation_id", checkLogin, getMessages);

// send message
router.post("/message", checkLogin, attachmentUpload, sendMessage);


module.exports = router;