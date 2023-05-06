const express = require('express');
const router = express.Router();

const main = require('../../index');
const bcrypt = require('bcrypt');
const Web3 = require('web3');

router.post("/sign-up", async (req, res) => {
    try {
        console.log('yo');
        const db = main.getDb();
        const bcryptSalt = bcrypt.genSaltSync(10);
        const pass = bcrypt.hashSync(req.body.password, bcryptSalt);
        const newMerchant = {
            name: req.body.name,
            email: req.body.email,
            shopName: req.body.shop,
            shopDetails: req.body.shopdetails,
            phoneNo: req.body.phoneno,
            password: pass,
            image: req.body.image,
            isMerchant: req.body.isMerchant
        };
        // console.log(registered);
        const mer = db.collection("Merchants");
        console.log('yo');

        const registered = await mer.insertOne(newMerchant);

        console.log(registered);

        const contractAbi = require('../../smart-contract/main_contract_abi.json');
        const provider = new Web3.providers.HttpProvider(process.env.RPC_URL, { timeout: 5000, keepAlive: true });
        const web3 = await new Web3(provider);
        const mainContract = new web3.eth.Contract(contractAbi, process.env.CONTRACT_ADDRESS);

        const gasPrice = await web3.eth.getGasPrice();
        const nonce = await web3.eth.getTransactionCount(process.env.OWNER_ADDRESS);
        const data = await mainContract.methods.registerUser(registered.insertedId.toString()).encodeABI();
        const tx = {
            from: process.env.OWNER_ADDRESS,
            to: process.env.CONTRACT_ADDRESS,
            nonce: nonce,
            gasPrice: gasPrice,
            gas: 300000,
            data: data,
            value: 1000000
        };
        const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.OWNER_PRIVATE_KEY);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        const transHash = receipt.transactionHash;
        const status = receipt.status == true ? 'SUCCESS' : 'FAILURE';

        console.log(receipt);

        // store it in database (from, to, hash, date time, note, type:credit/debit, )
        // const transactionCollection = db.collection('transactions');
        const transCol = db.collection('transactions');
        await transCol.insertOne({
            'from': 'boss',
            'to': registered.insertedId,
            'time': Date.now(),
            'amount': 1000000,
            'note': 'nice deposit',
            'transactionHash': transHash,
            'status': status
        });

        console.log(registered);
        res.status(201).json({phoneNo: req.body.phoneno, isMerchant: req.body.isMerchant, statusCode: 201});
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;