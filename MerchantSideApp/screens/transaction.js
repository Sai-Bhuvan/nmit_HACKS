import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Layout } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Transactions() {

    const [transactions, setTransactions]=useState([]);
    useEffect(()=>{
            fetchTransactions();
        });
        

    async function fetchTransactions() {
        const mobNo =  await AsyncStorage.getItem('phone');
        var result = await fetch("http://10.0.2.2:3000/previousTransactions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    phone: mobNo,
                }
            )
        });
        result = await result.json();
        console.log(result);
        }

        const renderItem = () => {

        }
  return (
    <Layout>
        < FlatList 
            data={transactions}
            renderItem={({item})=>{
                <TouchableOpacity onPress={()=>navigation.navigate('eachtransaction',item)}>
                    <Text>
                        {item.amount}
                        </Text>
                    <Text>
                        {item.date}
                    </Text>
                    <Text>
                        {item.shopname}
                    </Text>
                </TouchableOpacity>
            }}
        />

        {/* <List
            style={global.container}
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
        /> */}
    </Layout>
  )}
