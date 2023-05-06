const express = require('express');
const router = express.Router();
const { getDb } = require('../../index');

router.post('/previousTranactions/', async function (req, res) {
    const phone = req.body.phone;
    try {
        const db = getDb();
        const mycoll = db.collection("transactions");
        const result = await mycoll.find({ $or: [{ 'to': phone }, { 'from': phone }] }).toArray();
        res.status(200).json({ transactions: result, statusCode: 200, message: "success" });
    }
    catch (e) {
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;