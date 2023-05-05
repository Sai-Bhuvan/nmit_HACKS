import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableWithoutFeedback, Button, Alert, TouchableOpacity, Keyboard, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Signup() {


    const [name,setname]=useState("");
    const [phoneno,setphoneno]=useState("");
    const [email,setemail]=useState("");
    const [shop,setshop]=useState("");
    const [shopdetails,setshopdetails]=useState("");
    const [password,setpassword]=useState("");
    const [confirmpassword,setconfirmsetpassword]=useState("");


    async function Submit(){
        if(!name||!phoneno||!email||!shop||!shopdetails||!password||!confirmpassword){
            Alert.alert("OOPS","sorry you have not entered ",[
                {text:"OK",onPress:console.log("alert done")}
            ]);
        }
        if(password!==confirmpassword){
            Alert.alert("OOPS","sorry your passwords are not matching change it",[
                {text:"OK",onPress:console.log("password alert done")}
            ])
        }
        
        else{
            try{
                console.log("hello");
            }catch(err){
                console.log(err);
            }
        }
    }


    function presshandler(){
        Keyboard.dismiss();
    }

    const handletouch = () => {

    }

  return (
    <TouchableWithoutFeedback onPress={presshandler}>
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>
                        Welcome to XYZ 
                    </Text>
                </View>

                <View>
                    <Text>
                       Sign In
                    </Text>
                </View>

                <View>
                    <Text>
                        Enter your name
                    </Text>
                </View>
                <View>
                    <TextInput 
                    
                        placeholder='enter your name'
                        value={name}
                        onChangeText={(text)=>setname(text)}
                        keyboardType='default'
                    />
                </View>

                <View>
                    <Text>
                        Enter your mobile number
                    </Text>
                </View>
                <View>
                    <TextInput 
                    
                        placeholder='enter your shop mobile number'
                        keyboardType='numeric'
                        value={phoneno}
                        onChangeText={(text)=>setphoneno(text)}
                    />
                </View>

                <View>
                    <Text>
                        Enter your email
                    </Text>
                </View>
                <View>
                    <TextInput 
                    
                        placeholder='enter your shop email'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(text)=>setemail(text)}
                    />
                </View>

                <View>
                    <Text>
                        Enter your shop name
                    </Text>
                </View>
                <View>
                    <TextInput 
                    
                        placeholder='enter your shop name'
                        keyboardType='default'
                        value={shop}
                        onChangeText={(text)=>setshop(text)}
                    />
                </View>

                <View>
                    <Text>
                        Enter a brief discription of your shop
                    </Text>
                </View>
                <View>
                    <TextInput
                        placeholder="enter briefly about "
                        multiline
                        editable
                        value={shopdetails}
                        onChangeText={(text)=>setshopdetails(text)}
                        keyboardType='default'
                        numberOfLines={3}
                        maxLength={40}
                    /> 
                </View>

                <View>
                    <Text>enter your password to signin</Text>
                </View>
                <View>
                    <TextInput 
                        keyboardType='default'
                        value={password}
                        onChangeText={(text)=>setpassword(text)}
                        placeholder='enter your password'
                    />

                </View>

                <View>
                    <Text>
                        Confirm your password
                    </Text>
                </View>
                <View>
                    <TextInput 
                        placeholder='confirm your password'
                        keyboardType='default'
                        value={confirmpassword}
                        onChangeText={(text)=>setconfirmsetpassword(text)}
                        secureTextEntry={true}
                    />

                </View>

                <View>
                    <Button 
                        title='signin'
                        borderRadius={3}
                        onPress={Alert.alert("submit","are u sure u want to submit",[
                            {text:"yes",onPress:()=>Submit()},
                            {text:"no",onPress:console.log('user not registered')}
                        ]
                        )}
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={handletouch()}>
                        <Text>
                            Already have an account Sign-In
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
    hello:{
        padding:3
    }
})

