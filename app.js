
const mongoDB = require('./connection/mongoDB');
const cookieParser = require('cookie-parser');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const { notFoundHandler, errorHandler } = require("./middleware/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");


const app = express();
dotenv.config()


app.use(express.json()); // parse request as JSON
app.use(express.static(path.join(__dirname, 'public'))); // set static folder 
app.use(express.urlencoded({ extended: true })); // for HTML Form data passing | query parameter.
app.use(cookieParser(process.env.COOKIE_SECRET)); // parse cookies


// set view engine for UI
app.set('view engine', 'ejs');


// routing...
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);



// 404 Not Found Error Handler
app.use(notFoundHandler);


// Common Error Handler
app.use(errorHandler);



// app is running + connecting to MongoDB...
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    mongoDB();
    console.log('Server start on port :', PORT, '🟩');
})