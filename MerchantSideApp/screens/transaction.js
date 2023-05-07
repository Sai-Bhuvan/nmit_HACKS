import { Text, Layout, List, ListItem, Divider, Card } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from '../global';

const data = new Array(8).fill({
    title: 'Item',
  });

export default function Transactions() {

    const [transactions, setTransactions] = useState([]);
    const [phoneNo, setPhoneNo] = useState(null);
    useEffect(() => {
        fetchTransactions();
    }, []);


    async function fetchTransactions() {
        const mobNo = await AsyncStorage.getItem('phone');
        var result = await fetch("http://192.168.137.1:3000/previousTransactions", {
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

        setPhoneNo(await AsyncStorage.getItem('phone'));
        setTransactions(result.transactions);
    }

    const AmountRight = ({ amount, type, status }) => {
        return (status == 'FAILURE' ? <Text status={'primary'}>Fail</Text> : type == 'credit' ? <Text status={'success'}>{amount}</Text> : <Text status={'danger'}>{amount}</Text> )
    }

    const renderItem = ({ item, index }) => {
        // console.log(item.fro);
        // const date = new Date(item.time);
        // console.log(date);
        // return <ListItem
        //     style={{height:60}}
        //     title={`${item.from} -> ${item.to}`}
        //     description={new Date(item.time).toDateString()}
        // ><AmountRight amount={item.amount} type={phoneNo == item.from ? 'debit' : 'credit'} status={item.status}/></ListItem>
        return <Card
            // style={styles.item}
            status='basic'
            header={<Text>{item.from} to {item.to}</Text>}
            // footer={}
            >
            <Layout>
                <Text>{new Date(item.time).toDateString()} </Text>
                <AmountRight amount={item.amount} type={item.to == 'self' ? 'credit' : (phoneNo == item.from ? 'debit' : 'credit')} status={item.status}/>
            </Layout>
        </Card>
    }

    return (
        <Layout style={global.screen}>
            {transactions.length > 0 ? <List
                // style = {{maxHeight:650}}
                data={transactions}
                ItemSeparatorComponent={<Divider/>}
                renderItem={renderItem}
            /> : 
            <Layout style={{alignItems:'center', justifyContent: 'center'}}><Text>No Previous Transactions</Text></Layout>}
        </Layout>
    )
}
