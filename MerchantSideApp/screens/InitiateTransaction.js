import { Layout, Input, Text, Button, Spinner } from "@ui-kitten/components";
import { useState, useRef } from "react";
import global from "../global";
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from 'expo-face-detector';
import { View } from "react-native";

export default function InitiateTransaction(){
    const [mobNo, setMobNo] = useState("");
    const [pin, SetPin] = useState("");
    const [amt, setAmt] = useState("");

    const [transactionProcessing, setTransactionProcessing] = useState(false);
    const [openCamera, setOpenCamera] = useState(false);
    const [canTakePic, setCanTakePic] = useState(false);
    const [verified, setVerified] = useState(false);
    const cameraref=useRef(null);

    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }
    
    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={global.screen}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
        // requestPermission();
    }

    const handleFacesDetected = ({ faces }) => { 
        setCanTakePic(faces.length == 1);
    }; 

    const takePicture = async () => {
        if(cameraref){
            try{
                const imageBase64 = await cameraref.current.takePictureAsync({
                    base64: true,
                    quality: 0.1
                });

                console.log('verifying');
                
                var result = await fetch('http://192.168.137.1:3000/compareFace', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        from: mobNo,
                        image: imageBase64.base64
                    })
                });

                // result = await result.json();
                console.log(await result.json());

                // If face match take to transaction processing page
                if(result.status == 200) {
                    setVerified(true);
                    setOpenCamera(false);

                    // Take to transaction processing page
                }

                // Send this image to backend to match
            }catch(e){
                setOpenCamera(false);
                console.log(e);
            }
        }
    }


    return (
        <Layout style={global.screen}>
            {
            !openCamera ?
                <Layout>
                    <Input 
                            style = {global.input}
                            label= "Mobile Number"
                            placeholder='Enter your Mobile Number'
                            value={mobNo}
                            onChangeText={(text)=>setMobNo(text)}
                            keyboardType='numeric'
                        />
                    <Input 
                            style = {global.input}
                            label= "Amount"
                            placeholder='Enter amount'
                            value={amt}
                            onChangeText={(text)=>setAmt(text)}
                            keyboardType='default'
                        />
                    <Input 
                            style = {global.input}
                            label= "PIN"
                            placeholder='Enter your 4 digit PIN'
                            value={pin}
                            onChangeText={(text)=>SetPin(text)}
                            keyboardType='default'
                        />
                    <Button
                        style={global.button}
                        appearance='outline'
                        onPress={() => setOpenCamera(true)}
                    >
                        <Text>Submit</Text>
                    </Button>
                </Layout>
                :
                <View style={global.screen}>
                    <Camera
                        onFacesDetected={handleFacesDetected}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
                            runClassifications: FaceDetector.FaceDetectorClassifications.none,
                            minDetectionInterval: 100,
                            tracking: true
                        }}
                        ref={cameraref}
                        style={{flex: 1}}
                        type={CameraType.front}
                    >
                        {canTakePic && <Button
                            style={[global.button, {flexDirection: 'row', margin:60, alignSelf: 'flex-end'}]}
                            appearance='outline'
                            onPress={takePicture}
                        ><Text>Verify</Text></Button>}
                    </Camera>
                </View>
            }
        </Layout>
    )
}