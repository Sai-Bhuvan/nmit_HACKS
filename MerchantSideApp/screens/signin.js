import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import global from "../global";
// import { pid } from "process";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Input, Layout, Text } from "@ui-kitten/components";
export default function SignIn({ onPageChange }) {
    const [Pin, setPin] = useState("");
    const [phoneNo, setPhoneNo] = useState();

    async function Login() {
        // const mobNo = await AsyncStorage.getItem('phone');
        // console.log(mobNo)
        var result = await fetch("http://192.168.137.1:3000/sign-in", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    pin: Pin,
                    phone: phoneNo,
                }
            )
        });

        if (result.status == 200) {
            // Alert.alert(" password Ok", "you have entered the correct password. ", [
            //     { text: "OK", onPress: () => console.log("alert done") },
            // ]);
            result = await result.json();
            console.log(result);
            await AsyncStorage.setItem('phone', phoneNo);
            await AsyncStorage.setItem('isMerchant', String(result.isMerchant));
            onPageChange('HomePage');
        }
        else {
            Alert.alert("Wrong password", "you have entered the wrong password. Please try again. ", [
                { text: "OK", onPress: () => console.log("alert done") },
            ]);
        }
    }
    return (
        <Layout style={global.screen}>
            <Text style={global.headerText}>Sign In</Text>
            <Layout style={global.container}>
                {/* <Text style={styles.text1}>Enter your 4 digit Pin</Text>
                <Text style={styles.text2}>{mobNo}</Text> */}

                <Input
                    placeholder="Enter Phone number"
                    label={<Text style={global.inputLabel}>Phone no</Text>}

                    style={global.input}
                    keyboardType="numeric"

                    value={phoneNo}
                    onChangeText={(text) => setPhoneNo(text)}
                />

                <Input
                    placeholder="Enter PIN"
                    label={"PIN"}
                    maxLength={4}
                    style={global.input}
                    keyboardType="numeric"
                    secureTextEntry={true}
                    value={Pin}
                    onChangeText={(text) => setPin(text)}
                />




                <TouchableOpacity onPress={() => Login()} ><Text style={global.touchableComp}>Login</Text></TouchableOpacity>
                <Layout>
                    <TouchableOpacity onPress={() => { onPageChange('SignUp') }}>
                        <Text style={global.touchableComp}>New user? Sign-up</Text>
                    </TouchableOpacity>
                </Layout>
            </Layout>

        </Layout>

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