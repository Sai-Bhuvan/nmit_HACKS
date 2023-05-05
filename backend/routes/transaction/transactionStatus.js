const express = require('express');
const router = express.Router();

const web3 = require('web3');

router.post('/transactionStatus/', async function(req, res) {
    // App needs to call this after making a transaction
    // Get transaction status from blockcain and send it to app
});

module.exports = router;