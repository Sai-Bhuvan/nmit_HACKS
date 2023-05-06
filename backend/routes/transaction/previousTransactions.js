const express = require('express');
const router = express.Router();

const { getDb } = require('../../index');

router.post('/previousTranactions/', async function(req, res) {
    try {
        const db = getDb();
        
        res.status(200).json({ message: 'Not Implemented', statusCode: 200 });
    }
    catch(e) {
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;