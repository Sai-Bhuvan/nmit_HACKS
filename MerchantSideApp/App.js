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
