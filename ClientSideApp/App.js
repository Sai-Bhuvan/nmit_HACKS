import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUP from './screens/SignUP';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
      <Text>Hi</Text>
      <StatusBar style="auto" />
=======
      <SignUP/>      
>>>>>>> Stashed changes
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
