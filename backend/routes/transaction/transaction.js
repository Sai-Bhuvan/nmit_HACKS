const express = require('express');
const router = express.Router();

// const { db } = require('../../index');
const Web3 = require('web3');
const main = require('../../index');
const bcrypt = require('bcrypt');
// const Provider = require('@truffle/hdwallet-provider');

router.post('/transaction/', async function(req, res) {
    
    // Get requirements from req body (from, to, amount, note)
    // here from to us mob number
    const db = main.getDb();
    const body = req.body;
    console.log(req.body);
    const from = body.from;
    const to = body.to;
    const amount = body.amount;
    const note = body.note;
    const pass = body.pass;

    try {
        // send transaction t smart contract
        // get user id using mobile number then send it to blockchain
        const users = db.collection('Merchants');
        const fromUser = await users.findOne({ phoneNo: from });
        const toUser = await users.findOne({ phoneNo: to });

        const correctPass = bcrypt.compareSync(pass, fromUser.password);

        if(!correctPass) throw Error('Wrong PIN!');

        // Get transaction hash
        const contractAbi = require('../../smart-contract/main_contract_abi.json');
        const provider = new Web3.providers.HttpProvider(process.env.RPC_URL, { timeout: 5000, keepAlive: true });
        const web3 = await new Web3(provider);
        const mainContract = new web3.eth.Contract(contractAbi, process.env.CONTRACT_ADDRESS);
        
        const gasPrice = await web3.eth.getGasPrice();
        const nonce = await web3.eth.getTransactionCount(process.env.OWNER_ADDRESS);
        const data = await mainContract.methods.transact(fromUser._id.toString(), toUser._id.toString(), amount).encodeABI();
        // const data = await mainContract.methods.transact(from, to, amount).encodeABI();
        const tx = {
            from: process.env.OWNER_ADDRESS,
            to: process.env.CONTRACT_ADDRESS,
            nonce: nonce,
            gasPrice: gasPrice,
            gas: 300000,
            data: data,
        };
        const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.OWNER_PRIVATE_KEY);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        const transHash = receipt.transactionHash;
        const status = receipt.status == true ? 'SUCCESS' : 'FAILURE';

        // console.log(receipt);

        // store it in database (from, to, hash, date time, note, type:credit/debit, )
        // const transactionCollection = db.collection('transactions');
        const transCol = db.collection('transactions');
        await transCol.insertOne({
            'from': from,
            'to': to,
            'time': Date.now(),
            'amount': amount,
            'note': note,
            'transactionHash': transHash,
            'status': status
        });

        res.status(200).json({ message: 'Transaction Success!', transactionHash: transHash, status: status, statusCode: 200 });
    }
    catch(e) {
        console.log(e);
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;