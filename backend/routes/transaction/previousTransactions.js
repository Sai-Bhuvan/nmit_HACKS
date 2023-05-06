const express = require('express');
const router = express.Router();
const main = require('../../index');

router.post('/previousTransactions/', async function (req, res) {
    const phone = req.body.phone;
    try {
        const db = main.getDb();
        const mycoll = db.collection("transactions");
        const result = await mycoll.find({ $or: [{ 'to': phone }, { 'from': phone }] }).toArray();
        res.status(200).json({ transactions: result, statusCode: 200, message: "success" });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;