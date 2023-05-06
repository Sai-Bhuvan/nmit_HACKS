import { Layout, Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import global from '../global'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {





  const [balance, setBalance] = useState('loading...');
  useEffect(() => {
    async function getBalance() {
      console.log('getting balance...');
      const phone = await AsyncStorage.getItem('phone');
      console.log(phone);
      var result = await fetch("http://192.168.137.1:3000/getBalance", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: phone
        })
      })

      // console.log(result);
      result = await result.json();
      console.log(result);

      setBalance(result.balance)
    }

    getBalance();
  }, []);
  return (



    <Layout style={global.screen}>
      <Text style={global.headerText}>Balance</Text>
      <Text style={global.subHeaderText}>{balance}</Text>
    </Layout>
  )
}


