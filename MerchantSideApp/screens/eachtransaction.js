import { View, Text } from 'react-native'
import React from 'react'
import { Layout } from '@ui-kitten/components'

// to view each transaction details
export default function eachtransaction({item}) {
  return (
    <Layout>
      <Text style={global.text}>{item.getparams('amount')}</Text>
      <Text style={global.text}>{item.getparams('shopname')}</Text>
      <Text style={global.text}>{item.getparams('date')}</Text>
    </Layout>
  )
}
