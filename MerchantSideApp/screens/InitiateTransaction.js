import { Layout, Input, Text, Button } from "@ui-kitten/components";
import { useState } from "react";
import global from "../global";

export default function InitiateTransaction(){
    const [mobNo, setMobNo] = useState("");
    const [pin, SetPin] = useState("");
    const [amt, setAmt] = useState("");

    const [transactionProcessing, setTransactionProcessing] = useState(false);

    async function startTransaction() {
        setTransactionProcessing(true);

        // Open camera take a picture
        // Verify picture with mobile number entered
        // If face match take to transaction processing page
        // wait for status
    }

    return (
        <Layout style={global.screen}>
            <Input 
                                style = {global.input}
                                label= "Mobile Number"
                                placeholder='Enter your Mobile Number'
                                value={mobNo}
                                onChangeText={(text)=>setMobNo(text)}
                                keyboardType='numeric'
                            />
                        <Input 
                                style = {global.input}
                                label= "Amount"
                                placeholder='Enter amount'
                                value={amt}
                                onChangeText={(text)=>setAmt(text)}
                                keyboardType='default'
                            />
                        <Input 
                                style = {global.input}
                                label= "PIN"
                                placeholder='Enter your 4 digit PIN'
                                value={pin}
                                onChangeText={(text)=>SetPin(text)}
                                keyboardType='default'
                            />
                        <Button
                            style={global.button}
                            appearance='outline'
                        ><Text>Submit</Text></Button>
        </Layout>
    )
}