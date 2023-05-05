import { Layout, Input, Text, Button } from '@ui-kitten/components';
import React, { useState } from 'react'
import global from '../global';
import { Alert, TouchableOpacity } from 'react-native';

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
                    {text:"OK",onPress:()=>console.log("alert done")}
                ]);
            }
            if(password!==confirmpassword){
                Alert.alert("OOPS","sorry your passwords are not matching change it",[
                    {text:"OK",onPress:()=>console.log("password alert done")}
                ])
            }
            
            
        }


        function presshandler(){
            Keyboard.dismiss();
        }

        const handletouch = () => {

        }

    return(
            <Layout style={global.container}>           
                
                        <Layout >
                            <Text>
                                Welcome to XYZ 
                            </Text>
                        </Layout>

                        <Layout>
                            <Text>
                            Sign In
                            </Text>
                        </Layout>

                       
                        <Layout>
                            <Input 
                                label={ "Enter your name"}
                                style={global.input}
                                placeholder='enter your name'
                                value={name}
                                onChangeText={(text)=>setname(text)}
                                keyboardType='default'
                            />
                        </Layout>

                        
                        <Layout>
                            <Input      
                                label={" Enter your mobile number"}      
                                style={global.input}             
                                placeholder='enter your shop mobile number'
                                keyboardType='numeric'
                                value={phoneno}
                                onChangeText={(text)=>setphoneno(text)}
                            />
                        </Layout>

                        
                        <Layout>
                            <Input 
                                label={"Enter your email"}
                                style={global.input}
                                placeholder='enter your shop email'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={(text)=>setemail(text)}
                            />
                        </Layout>

                        
                        <Layout>
                            <Input 
                                label={"enter your shop name"}
                                style={global.input}
                                placeholder='enter your shop name'
                                keyboardType='default'
                                value={shop}
                                onChangeText={(text)=>setshop(text)}
                            />
                        </Layout>

                        
                        <Layout>
                            <Input
                                label={"write briefly about your shop"}
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
                            <Input 
                                label={"enter your password"}
                                style={global.input}
                                keyboardType='default'
                                value={password}
                                onChangeText={(text)=>setpassword(text)}
                                placeholder='enter your password'
                            />

                        </Layout>

                        
                        <Layout>
                            <Input 
                                label={"confirm your password"}
                                placeholder='confirm your password'
                                keyboardType='default'
                                value={confirmpassword}
                                onChangeText={(text)=>setconfirmsetpassword(text)}
                                secureTextEntry={true}
                            />

                        </Layout>

                        <Layout>
                            <Button 
                                appearance='ghost'
                                
                                
                                onPress={Alert.alert("submit","are u sure u want to submit",[
                                    {text:"yes",onPress:()=>Submit()},
                                    {text:"no",onPress:console.log('user not registered')}
                                ]
                                )}
                            >Sign Up</Button>
                        </Layout>

                        <Layout>
                            <TouchableOpacity onPress={()=>{navigator.navigate(signIn)}}>
                                <Text>
                                    Already have an account Sign-In
                                </Text>
                            </TouchableOpacity>
                        </Layout>
                      
            </Layout> 
    );
    
    
}


