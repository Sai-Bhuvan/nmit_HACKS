import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import { pid } from "process";
import { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
export default function SignIn() {
    const mobNo = AsyncStorage.getItem('phone');
    const [Pin, setPin] = useState("");
    async function Login() {
        const result = await fetch("http://10.0.2.2:3000/sign-in", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                pin: Pin,
                phone: phone,
            }
        )
      });
      if (result == "pass-ok") {
        
      }
      else{
        Alert.alert("Wrong password", "you have entered the wrong password. Please try again. ", [
            { text: "OK", onPress: () => console.log("alert done") },
          ]);
      }
    }
    return (
       <View>
        {/* <Text style={styles.text1}>Enter your 4 digit Pin</Text>
        <Text style={styles.text2}>{mobNo}</Text> */}
        <TextInput 
        maxLength={4}
        style={styles.input} 
        keyboardType="numeric"
        secureTextEntry={true}
        value = {Pin}
        onChangeText = {(text)=>setPin(text)}
        />
       
        
        <TouchableOpacity onPress={()=>Login()}><Text>Login</Text></TouchableOpacity>
       </View>

    )
}

const styles = StyleSheet.create({
    text1: {
        marginTop: 100,
        fontSize: 25,
        fontWeight: 400,
    },
    text2: {
        color: "gray",
        marginLeft: 50,
        fontSize: 20,
        marginTop: 5,
    },
    input: {
        marginTop: 200,
        borderBottomWidth: 2,
        borderColor: "#19A7CE",
        fontSize: 30,
        width: 200,
        textAlign: "center",
        marginLeft: 30
        
    },
})