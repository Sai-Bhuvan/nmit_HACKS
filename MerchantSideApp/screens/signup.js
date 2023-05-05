<<<<<<< Updated upstream
import { Layout, Input, Text, Button } from '@ui-kitten/components';
import React, { useState } from 'react'

import { Alert, TouchableOpacity } from 'react-native';
=======
import { Layout, Input, Text, Button } from "@ui-kitten/components";
import React, { useState } from "react";
import axios from "axios";
import global from "../global";

import { Alert, ScrollView, TouchableOpacity } from "react-native";
>>>>>>> Stashed changes

export default function Signup() {
  const [name, setname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [email, setemail] = useState("");
  const [shop, setshop] = useState("");
  const [shopdetails, setshopdetails] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmsetpassword] = useState("");

  async function Submit() {
    // if (
    //   !name ||
    //   !phoneno ||
    //   !email ||
    //   !shop ||
    //   !shopdetails ||
    //   !password ||
    //   !confirmpassword
    // ) {
    //   Alert.alert("OOPS", "sorry you have not entered ", [
    //     { text: "OK", onPress: () => console.log("alert done") },
    //   ]);
    // }
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
    }
  }

  function presshandler() {
    Keyboard.dismiss();
  }

  const handletouch = () => {
    Submit();
  };

<<<<<<< Updated upstream
    return(
            <Layout>           
                
                        <Layout>
                            <Text>
                                Welcome to XYZ 
                            </Text>
                        </Layout>
=======
  return (
    <Layout style={global.screen}>
        <ScrollView>
        <Layout>
            <Text style = {global.headerText}>Welcome to XYZ</Text>
        </Layout>
        
>>>>>>> Stashed changes

        
        <Layout style = {global.container}>
            
            

<<<<<<< Updated upstream
                        <Layout>
                            <Text>
                                Enter your name
                            </Text>
                        </Layout>
                        <Layout>
                            <Input 
                            
                                placeholder='enter your name'
                                value={name}
                                onChangeText={(text)=>setname(text)}
                                keyboardType='default'
                            />
                        </Layout>

                        <Layout>
                            <Text>
                                Enter your mobile number
                            </Text>
                        </Layout>
                        <Layout>
                            <Input                         
                                placeholder='enter your shop mobile number'
                                keyboardType='numeric'
                                value={phoneno}
                                onChangeText={(text)=>setphoneno(text)}
                            />
                        </Layout>

                        <Layout>
                            <Text>
                                Enter your email
                            </Text>
                        </Layout>
                        <Layout>
                            <Input 
                            
                                placeholder='enter your shop email'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={(text)=>setemail(text)}
                            />
                        </Layout>

                        <Layout>
                            <Text>
                                Enter your shop name
                            </Text>
                        </Layout>
                        <Layout>
                            <Input 
                            
                                placeholder='enter your shop name'
                                keyboardType='default'
                                value={shop}
                                onChangeText={(text)=>setshop(text)}
                            />
                        </Layout>

                        <Layout>
                            <Text>
                                Enter a brief discription of your shop
                            </Text>
                        </Layout>
                        <Layout>
                            <Input
                                placeholder="enter briefly about "
                                multiline
                                editable
                                value={shopdetails}
                                onChangeText={(text)=>setshopdetails(text)}
                                keyboardType='default'
                                numberOfLines={3}
                                maxLength={40}
                            /> 
                        </Layout>

                        <Layout>
                            <Text>enter your password to signin</Text>
                        </Layout>
                        <Layout>
                            <Input 
                                keyboardType='default'
                                value={password}
                                onChangeText={(text)=>setpassword(text)}
                                placeholder='enter your password'
                            />

                        </Layout>

                        <Layout>
                            <Text>
                                Confirm your password
                            </Text>
                        </Layout>
                        <Layout>
                            <Input 
                                placeholder='confirm your password'
                                keyboardType='default'
                                value={confirmpassword}
                                onChangeText={(text)=>setconfirmsetpassword(text)}
                                secureTextEntry={true}
                            />

                        </Layout>
=======
        <Layout >
            <Text style = {global.subHeaderText}>Sign In</Text>
        </Layout>

        <Layout>
            <Text>Enter your name</Text>
        </Layout>
        <Layout>
            <Input
            style = {global.input}
            placeholder="enter your name"
            value={name}
            onChangeText={(text) => setname(text)}
            keyboardType="default"
            />
        </Layout>

        <Layout>
            <Text>Enter your mobile number</Text>
        </Layout>
        <Layout>
            <Input
            style = {global.input}
            placeholder="enter your shop mobile number"
            keyboardType="numeric"
            value={phoneno}
            onChangeText={(text) => setphoneno(text)}
            />
        </Layout>

        <Layout>
            <Text>Enter your email</Text>
        </Layout>
        <Layout>
            <Input
            style = {global.input}
            placeholder="enter your shop email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setemail(text)}
            />
        </Layout>

        <Layout>
            <Text>Enter your shop name</Text>
        </Layout>
        <Layout>
            <Input
            style = {global.input}
            placeholder="enter your shop name"
            keyboardType="default"
            value={shop}
            onChangeText={(text) => setshop(text)}
            />
        </Layout>

        <Layout>
            <Text>Enter a brief discription of your shop</Text>
        </Layout>
        <Layout>
            <Input
            style = {global.input}
            placeholder="enter briefly about "
            multiline
            editable
            value={shopdetails}
            onChangeText={(text) => setshopdetails(text)}
            keyboardType="default"
            numberOfLines={3}
            maxLength={40}
            />
        </Layout>

        <Layout>
            <Text>enter your password to signin</Text>
        </Layout>
        <Layout>
            <Input
            style = {global.input}
            keyboardType="default"
            value={password}
            onChangeText={(text) => setpassword(text)}
            placeholder="enter your password"
            />
        </Layout>
>>>>>>> Stashed changes

        <Layout>
            <Text>Confirm your password</Text>
        </Layout>
        <Layout>
            <Input
            style = {global.input}
            placeholder="confirm your password"
            keyboardType="default"
            value={confirmpassword}
            onChangeText={(text) => setconfirmsetpassword(text)}
            secureTextEntry={true}
            />
        </Layout>

<<<<<<< Updated upstream
                        <Layout>
                            <TouchableOpacity onPress={()=>{}}>
                                <Text>
                                    Already have an account Sign-In
                                </Text>
                            </TouchableOpacity>
                        </Layout>
                      
            </Layout> 
    );
    
    
=======
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
        </Layout>

        <Layout>
            <TouchableOpacity onPress={() => {}}>
            <Text>Already have an account Sign-In</Text>
            </TouchableOpacity>
        </Layout>
        
        
        </Layout>
        </ScrollView>
       
    </Layout>
    
  );
>>>>>>> Stashed changes
}
