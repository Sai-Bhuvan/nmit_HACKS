const express = require('express');
const router = express.Router();

const Web3 = require('web3');
const main = require('../../index');

router.post('/deposit/', async function(req, res) {
    try {
        const db = main.getDb();
        const from = req.body.from;
        const amount = req.body.amount;

        const users = db.collection('Merchants');
        const fromUser = await users.findOne({ phoneNo: from });

        if(!fromUser) throw Error('User not found!');

        const contractAbi = require('../../smart-contract/main_contract_abi.json');
        const provider = new Web3.providers.HttpProvider(process.env.RPC_URL, { timeout: 5000, keepAlive: true });
        const web3 = await new Web3(provider);
        const mainContract = new web3.eth.Contract(contractAbi, process.env.CONTRACT_ADDRESS);
        
        const gasPrice = await web3.eth.getGasPrice();
        const nonce = await web3.eth.getTransactionCount(process.env.OWNER_ADDRESS);
        const data = await mainContract.methods.deposit(fromUser._id.toString()).encodeABI();
        const tx = {
            from: process.env.OWNER_ADDRESS,
            to: process.env.CONTRACT_ADDRESS,
            nonce: nonce,
            gasPrice: gasPrice,
            gas: 300000,
            data: data,
            value: amount
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
            'to': 'self',
            'time': Date.now(),
            'amount': amount,
            'note': 'nice deposit',
            'transactionHash': transHash,
            'status': status
        });

        res.status(200).json({ message: 'Transaction Success!', transactionHash: transHash, status: status, statusCode: 200 });

        // res.status(200).json({ message: 'Not Implemented', statusCode: 200 });
    }
    catch(e) {
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;