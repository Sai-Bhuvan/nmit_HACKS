const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNo: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    shopDetails: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
});

const Merchant = new mongoose.model("Merchant", merchantSchema);

module.exports=Merchant;