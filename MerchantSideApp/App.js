import { Text, View } from 'react-native';
import Signup from './screens/signup';
import SetPin from './screens/SetPin';
import { ApplicationProvider, Layout, Input } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import global from './global';

export default function App() {

  const pro={
    question:"hello how are you",
    answer:"nice"
  }
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View >
        <Text>Merchant app</Text>
        {/* <Signup/> */}

        <SetPin/>
      </View>
    </ApplicationProvider>
    
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// });
