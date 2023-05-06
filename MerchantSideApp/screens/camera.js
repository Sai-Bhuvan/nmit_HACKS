import { View, Text ,StyleSheet,Image, Alert} from 'react-native'
import React, { useState,useEffect, useRef } from 'react'
import { Camera,CameraType} from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import * as MediaLibrary from 'expo-media-library';
import Button from './src/Components/Button'
import global
 from '../global';
export default function UserCamera() {

    const [hasCameraPermission,sethasCameraPermission]=useState(null);
    const [image,setimage]=useState(null);
    const [type,settype]=useState(Camera.Constants.Type.back);
    const [flash,setflash]=useState(Camera.Constants.FlashMode.off);
    const [detect,setdetect]=useState(false);
    const cameraref=useRef(null);

    useEffect(()=>{
        (async ()=>{
            MediaLibrary.requestPermissionsAsync();
            const camerastatus=await Camera.requestCameraPermissionsAsync();
            sethasCameraPermission(camerastatus.status==="granted");
        })();
    },[])

    

    const handleFacesDetected = ({ faces }) => { 
        if(faces.length==1){
            setdetect(true);
        }else{
            setdetect(false);
        }
     };

     const saveimage=async () => {
        if(image){
            try{
                await MediaLibrary.createAssetAsync(image);
                Alert.alert('picture saved')
                setimage(null);
            }catch(e){
                console.log(e);
            }
        }
     }

    const takepicture= async () =>{
        if(cameraref){
            try{
                const data=await cameraref.current.takepictureAsync();
                console.log(data);
                setimage(data.uri);
            }catch(e){
                console.log(e);
            }
        }
    }

    if(hasCameraPermission===false){
        return <Text>no access to camera</Text>
    }

  return (
    <View style={styles.Container}>
        {!image?
      <Camera
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 100,
            tracking: true,
        }}
        style={StyleSheet.Camera}
        type={type}
        flashMode={flash}
        ref={cameraref}
      >
        <View style={styles.cameraview}>
            <Button icon={'retweet'} onpress={()=>{
                settype(type===CameraType.back?CameraType.front:CameraType.back)
            }}/>
            <Button 
            icon={'flash'} 
            color={flash===Camera.Constants.FlashMode.off?'gray':'#f1f1f1'}
            onpress={
                ()=>{
                    setflash(flash===Camera.Constants.FlashMode.off?
                        Camera.Constants.FlashMode.on:
                        Camera.Constants.FlashMode.off)
                }
            }
            />
        </View>
      </Camera>
      :
      <Image source={{uri:image}} style={styles.Camera}/>
        }
      <View>
        {image?
        <View style={styles.camerabut}>
            <Button title={"retake" } icon={"retweet"} onpress={()=>setimage(null)}/>
            <Button title={"save" } icon={"check"} onpress={saveimage}/>
        </View>
        :
        <Button  title = {<Text style = {{color: '#fff'}}>"photu"</Text>} onpress={takepicture} />
        // disabled={takepicture}
        }
      </View>

    </View>
  )
}

const styles=StyleSheet.create({
    Camera:{
        flex:1,
        borderRadius:20
    },
    Container:{
        flex:1,
        backgroundColor:'#000',
        justifyContent:'center',
        padding:15
    },
    camerabut:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    cameraview:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:30
    }
})