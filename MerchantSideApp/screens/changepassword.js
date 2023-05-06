import * as eva from '@eva-design/eva';
import React, { useState } from 'react'
import { Input, Layout, Text } from '@ui-kitten/components';
import global from '../global';

export default function changePassword({props}) {

  const [answer,setanswer]=useState("");

  return (
    <Layout>
      <Layout>
        <Text>changePassword</Text>
      </Layout>
    <Layout>
      <Text>
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
    </Layout>
  )
}