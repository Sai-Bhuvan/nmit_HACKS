const express = require('express');
const router = express.Router();

// const { db } = require('../../index');
const Web3 = require('web3');
// const Provider = require('@truffle/hdwallet-provider');

router.post('/transaction/', async function(req, res) {
    
    // Get requirements from req body (from, to, amount, note)
    // here from to us mob number
    const body = req.body;
    const from = body.from;
    const to = body.to;
    const amount = body.amount;
    const note = body.note;
    
    try {
        // send transaction t smart contract
        // get user id using mobile number then send it to blockchain
        // Get transaction hash
        const contractAbi = require('../../smart-contract/main_contract_abi.json');
        const provider = new Web3.default.providers.HttpProvider(process.env.RPC_URL);
        var web3 = new Web3(provider);
        var mainContract = new web3.eth.Contract(contractAbi, process.env.CONTRACT_ADDRESS);
        // var balance = await mainContract.methods.getBalance("1").call();
        // console.log("balance : " + balance);

        // store it in database (from, to, hash, date time, note, type:credit/debit, )
        // const transactionCollection = db.collection('transactions');

        res.status(200).json({ message: 'Transaction Success', statusCode: 200 });
    }
    catch(e) {
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;