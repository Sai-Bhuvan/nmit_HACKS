import React, { useState } from 'react'
import * as eva from '@eva-design/eva';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import global from '../global';

export default function SetPin() { 

    const [pin, setPin] = useState();
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

            <Text style = {global.headerText}>Set Pin</Text>
            <Layout style = {global.container}>
                
                <Input
                    style = {global.input}
                    label = {<Text style = {global.inputLabel}>PIN</Text>}
                    placeholder='Enter PIN'
                    secureTextEntry = {true}
                    
                    value = {pin}
                    inputMode='numeric'
                    onChangeText={(val) => setPin(val)}
                    />

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
                
                <Button onPress={handlePinPress} 
                    appearance='ghost'
                >
                    <Text>Submit</Text>
                </Button>
            </Layout> 
        </Layout> 
       
    );
    
    
     
}

    


