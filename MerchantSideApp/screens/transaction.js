import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Layout } from '@ui-kitten/components';

export default function Transactions() {

    const [transactions,settransactions]=useState("");

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
    </Layout>
  )
}