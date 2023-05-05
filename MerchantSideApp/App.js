<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import Signup from './screens/signup';

export default function App() {
  return (
    <View>
      <Signup />
=======
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< Updated upstream
import SignIn from './screens/signin';
=======
import SetPin from './screens/SetPin';
>>>>>>> Stashed changes

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
      <SignIn mobno={"738753837"}/>
      <StatusBar style="auto" />
=======
      <SetPin/>
>>>>>>> Stashed changes
>>>>>>> 4e56c6e16e5ee7cfc73a529e000e6ae4d4521c57
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
