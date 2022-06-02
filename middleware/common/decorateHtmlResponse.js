function decorateHtmlResponse(page_title) {

    return function (req, res, next) {

        res.locals.html = true;
        res.locals.title = `${page_title} - ${process.env.APP_NAME}`;
        res.locals.loggedInUser = {};
        res.locals.errors = {};
        res.locals.data = {};

        next();
        // if we don't call "next()" here, 
        // then app going to hang.... at this section
    }
}

module.exports = decorateHtmlResponse;