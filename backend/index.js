const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({limit:'50mb'}));

const connUrl = process.env.CONN_URL;
const client = new MongoClient(connUrl, {
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

// Global error handling
app.use(function (err, _req, res) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

function getDb() {
    return db;
}

exports.getDb = getDb;