import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

export default class SignUP extends Component {
  render() {
    return (
      <View>
        <TextInput
            placeholder='Name'
            
        />
        <TextInput
            placeholder='E-mail'

        />
        <TextInput
            placeholder='Ph No'

        />
        <TextInput
            placeholder='Set Pin'
           
        />
      </View>
    )
  }
}
