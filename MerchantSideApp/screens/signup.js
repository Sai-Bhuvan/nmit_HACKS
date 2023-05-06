import { Layout, Input, Text, Button, Divider } from "@ui-kitten/components";
import React, { useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from "../global";
import { Alert, ScrollView, TouchableOpacity, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from 'expo-face-detector';
import Home from "./Home";

export default function Signup({ onPageChange }) {
  const [name, setname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [email, setemail] = useState("");
  const [shop, setshop] = useState("");
  const [shopdetails, setshopdetails] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmsetpassword] = useState("");

  const [openCamera, setOpenCamera] = useState(false);
  const [canTakePic, setCanTakePic] = useState(false);
  const [image, setImage] = useState(null);
  const cameraref = useRef(null);

  

  async function Submit() {
    if (
      !name ||
      !phoneno ||
      !email ||
      !shop ||
      !shopdetails ||
      !password ||
      !confirmpassword
    ) {
      Alert.alert("OOPS", "sorry you have not entered ", [
        { text: "OK", onPress: () => console.log("alert done") },
      ]);
    }
    if (password !== confirmpassword) {
      Alert.alert("OOPS", "sorry your passwords are not matching change it", [
        { text: "OK", onPress: () => console.log("password alert done") },
      ]);
    } else {
      var res =await fetch("http://10.0.2.2:3000/sign-up", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                name: name,
                email: email,
                phoneno: phoneno,
                password: password,
                shop: shop,
                shopdetails: shopdetails,
                image: image
            }
        )
        

      }
      
      );

      console.log(await res.json());
      await AsyncStorage.setItem('phone', phoneno);
      if(res.status == 201){
        onPageChange('HomePage')
      }
    }
  }

  function presshandler() {
    Keyboard.dismiss();
  }

  const handletouch = () => {
    Submit();
  };

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

              setImage(imageBase64.base64);

              setOpenCamera(false);
              
          }catch(e){
              setOpenCamera(false);

              console.log(e);
          }
      }
  }


  return(
      <Layout style={global.screen}>
        { openCamera ? (<View style={global.screen}>
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
              style={{ flex: 1 }}
              type={CameraType.front}
          >
              <Button
                  style={[global.button, { flexDirection: 'row', margin: 60, alignSelf: 'flex-end' }]}
                  appearance='outline'
                  onPress={takePicture}
                  disabled={!canTakePic}
              ><Text>Take Pic</Text></Button>
          </Camera>
      </View>) : (<Layout>
      <ScrollView>
        <Layout>
          <Text style={global.headerText}>Welcome to XYZ</Text>
        </Layout>


        <Layout style={global.container}>



          <Layout>
            <Input
              style={global.input}
              label="Name"
              placeholder='enter your name'
              value={name}
              onChangeText={(text) => setname(text)}
              keyboardType='default' />
            <Divider />
          </Layout>


          <Layout>
            <Input
              style={global.input}
              label="Moblie No"
              placeholder='enter your shop mobile number'
              keyboardType='numeric'
              value={phoneno}
              onChangeText={(text) => setphoneno(text)} />
            <Divider />
          </Layout>


          <Layout>
            <Input
              style={global.input}
              label={"E-mail"}
              placeholder='enter your shop email'
              keyboardType='email-address'
              value={email}
              onChangeText={(text) => setemail(text)} />
            <Divider />
          </Layout>


          <Layout>
            <Input
              style={global.input}
              label={"Shop Name"}
              placeholder='enter your shop name'
              keyboardType='default'
              value={shop}
              onChangeText={(text) => setshop(text)} />
            <Divider />
          </Layout>


          <Layout>
            <Input
              style={global.input}
              label={"Shop Descripton"}
              placeholder="enter briefly about "
              multiline
              editable
              value={shopdetails}
              onChangeText={(text) => setshopdetails(text)}
              keyboardType='default'
              numberOfLines={3}
              maxLength={40} />
            <Divider />
          </Layout>


          <Layout>
            <Input
              style={global.input}
              label="Password"
              keyboardType='default'
              value={password}
              onChangeText={(text) => setpassword(text)}
              placeholder='enter your password' />
            <Divider />
          </Layout>

          <Layout>
            <Input
              style={global.input}
              placeholder="confirm your password"
              label={"Confirm Pin"}
              keyboardType="default"
              value={confirmpassword}
              onChangeText={(text) => setconfirmsetpassword(text)}
              secureTextEntry={true} />
            <Divider />
          </Layout>

          <Button
            style={global.button}
            appearance='outline'
            onPress={() => setOpenCamera(true)}
          ><Text>Upload Picture</Text></Button>
          {image != null && <Text>Picture Taken!</Text>}

          <Layout>
            <Button
              appearance="ghost"
              onPress={() => Submit()}>
              Sign Up
            </Button>
            <Divider />
          </Layout>

          <Layout>
            <TouchableOpacity onPress={() => {  } }>
              <Text style={global.touchableComp}>Already have an account Sign-In</Text>
            </TouchableOpacity>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>) }
      </Layout>
  );
}
