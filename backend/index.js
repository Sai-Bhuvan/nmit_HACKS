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

const connUrl = `mongodb+srv://nmit_hacks:${pass}@cluster0.wjhpxdo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(connUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get different collections
const db = client.db('backend');

const bcryptSalt = bcrypt.genSaltSync(10);

// Routes to different services
app.use(require('./routes/transaction/transaction'));
app.use(require('./routes/transaction/transactionStatus'));

// Global error handling
// app.use((err, _req, res)=> {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// Sign-Up
app.post("/sign-up", async (req, res)=>{
    try {
        const myDb = db;
        console.log(newMerchant);
        const newMerchant = [{
            name: req.body.name,
            email: req.body.email,
            shopName: req.body.shop,
            shopDetails: req.body.shopdetails,
            phoneNo: req.body.phoneno,
            password: bcrypt.hashSync(req.body.password, bcryptSalt),
        }];
        console.log(registered);
        const mer = db.collection("Merchants");

        const registered = await mer.insertOne(newMerchant);
        console.log(registered);
        res.status(201).json("registered");
    } catch (err) {
        res.status(400).json(err);
    }
})

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

module.exports = { db };