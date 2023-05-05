import { Text, View } from 'react-native';
import Signup from './screens/Signup';
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
        {/* <Text>Merchant app</Text>
        {/* <Signup/> */}

        {/* {<SetPin/> } */}
        <changePassword />
      </View>
    </ApplicationProvider>
    
  )
}
