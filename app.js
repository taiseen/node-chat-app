import mongoDB from './connection/mongoDB.js';
import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config()


const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));



app.get('/', (req, res) => {
    console.log("res....");
    res.send('Testing....')
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    mongoDB();
    console.log('Server start on port :', PORT, '🟩');
})