const express = require('express');
const router = express.Router();

// const { db } = require('../../index');
const Web3 = require('web3');
const main = require('../../index');
// const Provider = require('@truffle/hdwallet-provider');

router.post('/getBalance/', async function(req, res) {
    
    // Get requirements from req body (from, to, amount, note)
    // here from to us mob number
    const db = main.getDb();
    const body = req.body;
    const from = body.from;
    
    try {
        // send transaction t smart contract
        // get user id using mobile number then send it to blockchain
        const users = db.collection('Merchants');
        const fromUser = await users.findOne({ phoneNo: from });

        // prepare smart contract
        const contractAbi = require('../../smart-contract/main_contract_abi.json');
        const provider = new Web3.providers.HttpProvider(process.env.RPC_URL, { timeout: 5000, keepAlive: true });
        const web3 = await new Web3(provider);
        const mainContract = new web3.eth.Contract(contractAbi, process.env.CONTRACT_ADDRESS);
        
        const balance = await mainContract.methods.getBalance(fromUser._id.toString()).call({
            from: process.env.OWNER_ADDRESS
        });
        // const balance = await mainContract.methods.getBalance("1").call({
        //     from: process.env.OWNER_ADDRESS
        // });

        res.status(200).json({ message: 'Got Balance', balance: balance, statusCode: 200 });
    }
    catch(e) {
        console.log(e);
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;