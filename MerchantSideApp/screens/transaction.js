import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Layout } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from '../global';
import { List, ListItem } from '@ui-kitten/components';

export default function Transactions(item) {

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
        console.log(result.data);
        }

        const renderItem = (item) => {
            <ListItem
                title = {`${item.from} to ${item.to}`}
                description={item.date}
                accessoryRight= {300}
                
            />
        }
    
  return (
    <Layout style = {global.screen}>
        {/* < FlatList 
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
        /> */}
        <List
            data={item}
            renderItem={renderItem}
        />
        
        {/* <List
            style={global.container}
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
        /> */}
    </Layout>
  )}
