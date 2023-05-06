import React, { useState } from 'react'
import { Input, Layout, Text, Button } from '@ui-kitten/components';
import global from '../global';

export default function ChangePassword(props) {

  const [answer,setanswer]=useState("");

  const handleAnswer = () => {}
  return (
    <Layout  style = {global.screen}>
      <Layout style = {global.container}>

      
      <Layout>
        <Text style = {global.headerText}>Change Password</Text>
      </Layout>
    <Layout>
      <Text style = {{fontSize: 25, marginStart: 10}}>
        The Secret Question is:
      </Text>
      <Text>
        {props.question}
      </Text>
    </Layout>
    
    <Layout>
        <Input 
          style={global.input}
          label={"Enter the answer for your secret question to change password"}
          placeholder='enter your answer'
          onChangeText={(text)=>setanswer(text)}
          keyboardType='default'
          secureTextEntry = {true}
          caption={()=>{
            if(props.answerreal!=answer){
              <Text>answer for the security is wrong</Text>
            }
          }}
        />
      </Layout>
      <Button onPress={handleAnswer} 
                    appearance='outline'
                >
                    <Text>Submit</Text>
      </Button>
      </Layout>
    </Layout>
  )
}