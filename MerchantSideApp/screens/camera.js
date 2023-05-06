import { View, Text } from 'react-native'
import React, { useState,useEffect, useRef } from 'react'
import { Camera,CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function camera() {

    const [hasCameraPermission,sethasCameraPermission]=useState(null);
    const [image,setimage]=useState(null);
    const [type,settype]=useState(Camera.Constants.Type.back);
    const [flash,setflash]=useState(Camera.Constants.FlashMode.off);
    const cameraref=useRef(null);
    

  return (
    <View>
      <Text>camera</Text>
    </View>
  )
}