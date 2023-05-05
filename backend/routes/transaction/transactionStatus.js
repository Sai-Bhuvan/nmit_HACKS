const express = require('express');
const router = express.Router();

const web3 = require('web3');

router.post('/transactionStatus/', async function(req, res) {
    try {
        // App needs to call this after making a transaction
        // Get transaction status from blockcain and send it to app
        // const transactionHash = req.body.transactionHash;
        res.status(200).json({ message: 'Not Implemented', statusCode: 200 });
    }
    catch(e) {
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;