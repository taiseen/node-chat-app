const mongoose = require('mongoose');

const mongoDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected To MongoDB ==> OK ✅");
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongoDB;