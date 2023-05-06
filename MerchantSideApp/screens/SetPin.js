import React, { useState } from 'react'
import { Button, Divider, Input, Layout, Text } from '@ui-kitten/components';
import global from '../global';


export default function SetPin() { 

    const [pin, setPin] = useState();
    const [secretq,setsecretq]=useState("");
    const [answer,setanswer]=useState("");
    const [confirmPin, setConfirmPin] = useState(); 

    const handlePinPress = () => {
        if(pin == confirmPin){
            //send to backend
            
        }
        else{
            setConfirmPin();           
        }
    }

    const captionStaus = () => {
        if(handlePinPress){
            return "P"
        }
    }

    return(        
        <Layout style = {global.screen}>           
            
            <Layout>
                <Text style = {global.headerText}>Set Pin</Text>
            </Layout>
            
            <Layout style = {global.container}>
                
            <Layout>

                
                <Input
                    style = {global.input}
                    label = {<Text style = {global.inputLabel}>PIN</Text>}
                    placeholder='Enter PIN'
                    secureTextEntry = {true}
                    
                    value = {pin}
                    inputMode='numeric'
                    onChangeText={(val) => setPin(val)}
                    />
                   

                    
            </Layout>
            <Divider/>

            <Layout>            
                <Input
                    style = {global.input}
                    label = "Confirm PIN"
                    placeholder='Confirm PIN'
                    secureTextEntry = {true}
                    value = {confirmPin}
                    inputMode='numeric'
                    onChangeText={(val) => setConfirmPin(val)}
                    caption={() => {if(pin != confirmPin){
                       <Text>pin do not match</Text>                                         
                    }}}
                />
            </Layout>
            <Divider/>

                
            
            
            <Layout>
                <Input 
                    style={global.input}
                    label="Enter sequrity question"
                    placeholder='enter secret question'
                    value={secretq}
                    onChangeText={(text)=>setsecretq(text)}

                />
            </Layout>

            <Layout>
                <Input 
                    style={global.input}
                    label="Enter answer"
                    placeholder='enter secret answer'
                    value={answer}
                    onChangeText={(text)=>setanswer(text)}
                    
                />
            </Layout>

            <Button onPress={handlePinPress} 
                    appearance='ghost'
                >
                    <Text>Submit</Text>
                </Button>
                </Layout> 
        </Layout> 
       
    );
    
    
     
}

    


