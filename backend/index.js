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

app.use(cors());
app.use(express.json({limit:'100mb'}));

const connUrl = process.env.CONN_URL;
const client = new MongoClient(process.env.CONN_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get different collections
const db = client.db('backend');

// Routes to different services
app.use(require('./routes/transaction/transaction'));
app.use(require('./routes/transaction/transactionStatus'));
app.use(require('./routes/transaction/deposit'));
app.use(require('./routes/face-recognition/face-recognition'));
app.use(require('./routes/transaction/getBalance'));
app.use(require('./routes/transaction/previousTransactions'));
app.use(require('./routes/authentication/signup'));
app.use(require('./routes/authentication/signin'));


// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

function getDb() {
    return db;
}

exports.getDb = getDb;