const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const Merchant = require('./Models/Merchant');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const pass = process.env.PASS;

app.use(cors());
app.use(express.json({limit:'100mb'}));

const connUrl = process.env.CONN_URL;
const client = new MongoClient("mongodb+srv://nmit_hacks:ifyouseethisyouaregay@cluster0.wjhpxdo.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get different collections
const db = client.db('backend');

const bcryptSalt = bcrypt.genSaltSync(10);

// Routes to different services
app.use(require('./routes/transaction/transaction'));
app.use(require('./routes/transaction/transactionStatus'));
app.use(require('./routes/transaction/deposit'));
app.use(require('./routes/face-recognition/face-recognition'));

// Global error handling
// app.use((err, _req, res)=> {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// Sign-Up
app.post("/sign-up", async (req, res)=>{
    try {
        const myDb = db;
        console.log(req.body);
        const newMerchant = {
            name: req.body.name,
            email: req.body.email,
            shopName: req.body.shop,
            shopDetails: req.body.shopdetails,
            phoneNo: req.body.phoneno,
            password: bcrypt.hashSync(req.body.password, bcryptSalt),
        };
        // console.log(registered);
        const mer = db.collection("Merchants");

        const registered = await mer.insertOne(newMerchant);
        console.log(registered);
        res.status(201).json("registered");
    } catch (err) {
        res.status(400).json(err);
    }
})

// Sign-In
app.post("/sign-in", (req, res)=>{
    const pin = req.body.pin;
    const phone = req.body.phone;
    const mer = db.collection("Merchants");
    const userFound = mer.findOne({phoneNo: phone});
    const passOk = bcrypt.hashSync(bcrypt.compareSync(pin, userFound.password));
    if (passOk) {
        res.status(200).json("pass-ok");
    }
    else{
        res.status(400).json("pass wrong");
    }
})

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

function getDb() {
    return db;
}

exports.getDb = getDb;