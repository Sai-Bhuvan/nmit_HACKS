<<<<<<<<< Temporary merge branch 1
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Merchant app</Text>
      <StatusBar style="auto" />
=======
      <SetPin/>
>>>>>>> Stashed changes
=========
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import Signup from './screens/signup';

export default function App() {
  return (
    <View>
      <Signup />
>>>>>>>>> Temporary merge branch 2
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
