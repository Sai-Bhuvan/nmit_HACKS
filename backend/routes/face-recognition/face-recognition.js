const express = require('express');
const router = express.Router();

const main = require('../../index');

const faceapi = require('face-api.js');
const canvas = require("canvas");
const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const { test1, test2 } = require('./test');
const { json } = require('express/lib/response');

// optimization (takes time from 20s to ~1.5s)
require('@tensorflow/tfjs-node');

async function init() {
    await faceapi.nets.ssdMobilenetv1.loadFromDisk("./routes/face-recognition/models");
    await faceapi.nets.faceLandmark68Net.loadFromDisk("./routes/face-recognition/models");
    await faceapi.nets.faceRecognitionNet.loadFromDisk("./routes/face-recognition/models");

    // await faceapi.loadFaceRecognitionModel.('/models');

    console.log('face api init complete!');
}

init();

router.post('/compareFace/', async function(req, res) {
    try {
        const from = req.body.from;
        const image = req.body.image;
        // const sentImage = await canvas.loadImage(Buffer.from(test1, 'base64'));
        const sentImage = await canvas.loadImage(Buffer.from(image, 'base64'));

        const db = main.getDb();
        const userCol = db.collection('Merchants');
        const user = await userCol.findOne({ phoneNo: from });
        console.log(user);
        // const dbImage = await canvas.loadImage(Buffer.from(test2, 'base64'));
        const dbImage = await canvas.loadImage(Buffer.from(user.image, 'base64'));
        
        // To optimize the same we can store detection result directly in mongodb
        const detection1 = await faceapi
            .detectSingleFace(sentImage)
            .withFaceLandmarks()
            .withFaceDescriptor();

        const detection2 = await faceapi
            .detectSingleFace(dbImage)
            .withFaceLandmarks()
            .withFaceDescriptor();

        console.log("1: " + JSON.stringify(detection1.descriptor));
        console.log("2: " + JSON.stringify(detection2.descriptor))

        const distance = faceapi.euclideanDistance(detection1.descriptor, detection2.descriptor);
        console.log(distance);
        const statusCode = distance < 0.4 ? 200 : 201;
        const message = distance < 0.4 ? 'Face Matched' : 'Face Do not match';

        res.status(statusCode).json({ message: message, statusCode: statusCode });
    }
    catch(e) {
        console.log(e);
        res.status(400).json({ message: e.message, statusCode: 400 });
    }
});

module.exports = router;