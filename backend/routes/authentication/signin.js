const express = require('express');
const router = express.Router();

const main = require('../../index');

router.post("/sign-in", async (req, res)=>{
    const pin = req.body.pin;
    const phone = req.body.phone;
    console.log(req.body);
    const mer = main.getDb().collection("Merchants");
    const userFound = await mer.findOne({phoneNo: phone});
    console.log(userFound);
    const passOk = bcrypt.compareSync(pin, userFound.password);
    console.log(passOk);
    if (passOk) {
        res.status(200).json({ message: 'pass-ok', statusCode: 200 });
    }
    else{
        res.status(200).json({ message: 'pass-wrong', statusCode: 400 });
    }
});

module.exports = router;