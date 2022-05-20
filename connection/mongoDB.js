import mongoose from "mongoose";

const mongoDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected To MongoDB ==> OK ✅");
    } catch (error) {
        console.log(error);
    }
}

export default mongoDB;