import { Layout, Input, Text, Button, Divider } from "@ui-kitten/components";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from "../global";
import { Alert, ScrollView, TouchableOpacity } from "react-native";

export default function Signup() {
  const [name, setname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [email, setemail] = useState("");
  const [shop, setshop] = useState("");
  const [shopdetails, setshopdetails] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmsetpassword] = useState("");

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
      await fetch("http://10.0.2.2:3000/sign-up", {
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
            }
        )
      });
      await AsyncStorage.setItem('phone', phoneno);
    }
  }

  function presshandler() {
    Keyboard.dismiss();
  }

  const handletouch = () => {
    Submit();
  };

    return(
            <Layout>           
                <ScrollView>
                <Layout>
                    <Text style = {global.headerText}>Welcome to XYZ</Text>
                </Layout>

        
                <Layout style = {global.container}>          
            

                        
                        <Layout>
                            <Input 
                                style = {global.input}
                                label= "Name"
                                placeholder='enter your name'
                                value={name}
                                onChangeText={(text)=>setname(text)}
                                keyboardType='default'
                            />
                            <Divider/>
                        </Layout>

                        
                        <Layout>
                            <Input    
                                style = {global.input}   
                                label="Moblie No"     
                                placeholder='enter your shop mobile number'
                                keyboardType='numeric'
                                value={phoneno}
                                onChangeText={(text)=>setphoneno(text)}
                            />
                            <Divider/>
                        </Layout>

                        
                        <Layout>
                            <Input 
                                style = {global.input}
                                label={"E-mail"}
                                placeholder='enter your shop email'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={(text)=>setemail(text)}
                            />
                            <Divider/>
                        </Layout>

                        
                        <Layout>
                            <Input 
                                style = {global.input}
                                label={"Shop Name"}
                                placeholder='enter your shop name'
                                keyboardType='default'
                                value={shop}
                                onChangeText={(text)=>setshop(text)}
                            />
                            <Divider/>
                        </Layout>

                        
                        <Layout>
                            <Input
                                style = {global.input}
                                label={"Shop Descripton"}
                                placeholder="enter briefly about "
                                multiline
                                editable
                                value={shopdetails}
                                onChangeText={(text)=>setshopdetails(text)}
                                keyboardType='default'
                                numberOfLines={3}
                                maxLength={40}
                            /> 
                            <Divider/>
                        </Layout>

                        
                        <Layout>
                            <Input 
                                style = {global.input}
                                label= "Password"
                                keyboardType='default'
                                value={password}
                                onChangeText={(text)=>setpassword(text)}
                                placeholder='enter your password'
                            />
                            <Divider/>
                        </Layout>

        <Layout>
            <Input
              style = {global.input}
              placeholder="confirm your password"
              label={"Confirm Pin"}
              keyboardType="default"
              value={confirmpassword}
              onChangeText={(text) => setconfirmsetpassword(text)}
              secureTextEntry={true}
            />
            <Divider/>
          </Layout>

          <Layout>
            <Button
              appearance="ghost"
              onPress={() =>
                Alert.alert("submit", "are u sure u want to submit", [
                  { text: "yes", onPress: () => Submit() },
                  { text: "no", onPress: () => console.log("user not registered") },
                ])
              }>
              Sign Up
            </Button>
            <Divider/>
          </Layout>

          <Layout>
            <TouchableOpacity onPress={() => {}}  >
              <Text style = {global.touchableComp}>Already have an account Sign-In</Text>
            </TouchableOpacity>
          </Layout>
    </Layout>
    </ScrollView>
    </Layout>
  );
}
