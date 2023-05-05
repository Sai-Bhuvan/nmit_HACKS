import React, { useState } from 'react'

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Input, Layout, Text } from '@ui-kitten/components';
import { View } from 'react-native';




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
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout>
                <Input
                    label={"PIN"}
                    placeholder='Enter PIN'
                    secureTextEntry = {true}
                    value = {pin}
                    inputMode='numeric'
                    onChangeText={(val) => setPin(val)}
                    />

                <Input
                label={"Confirm PIN"}
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
        </ApplicationProvider>
    );
    
    
     
}

    


