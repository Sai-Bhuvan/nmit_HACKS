import { View, Text ,StyleSheet,Image} from 'react-native'
import React, { useState,useEffect, useRef } from 'react'
import { Camera,CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from './src/Components/Button';

export default function camera() {

    const [hasCameraPermission,sethasCameraPermission]=useState(null);
    const [image,setimage]=useState(null);
    const [type,settype]=useState(Camera.Constants.Type.back);
    const [flash,setflash]=useState(Camera.Constants.FlashMode.off);
    const cameraref=useRef(null);

    useEffect(()=>{
        (async ()=>{
            MediaLibrary.requestPermissionsAsync();
            const camerastatus=await Camera.requestCameraPermissionsAsync();
            sethasCameraPermission(camerastatus.status==="granted");
        })();
    },[])

    const takepicture=async () =>{
        if(cameraref){
            try{
                const data=await cameraref.current.takepictureAsync();
                console.log(data);
                setImage(data.uri);
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
        style={StyleSheet.Camera}
        type={type}
        flashMode={flash}
        ref={cameraref}
      >
        <Text>Hello</Text>
      </Camera>
      :
      <Image />
        }
      <View>
        <Button title={'take a p'} onpress={takepicture}/>
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
    }
})