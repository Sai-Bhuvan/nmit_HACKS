import { Layout, Input } from "@ui-kitten/components";
import { useState } from "react";

export default function InitiateTransaction(){
    const [mobNo, setMobNo] = useState("");
    const [pin, SetPin] = useState("");
    const [amt, setAmt] = useState("");
    return (
        <Layout>
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
        </Layout>
    )
}