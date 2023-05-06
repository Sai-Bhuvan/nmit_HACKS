import { Layout, Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import global from '../global'

export default function Home() {
  const [balance, setBalance] = useState('loading...');
  useEffect(()=> {
    async function getBalance() {
      var result = await fetch("http://10.0.2.2/getBalance", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
      })

      result = await result.json();

      setBalance(result.balance.toString())
    }
  }, []);
  return (
   <Layout style = {global.screen}>
      <Text style = {global.headerText}>Balance</Text>
      <Text style = {global.subHeaderText}>{balance}</Text>
   </Layout>
  )
}
