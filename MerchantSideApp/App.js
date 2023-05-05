import { Text, View } from 'react-native';
import Signup from './screens/Signup';
import { ApplicationProvider, Layout, Input } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View >
        <Text>Merchant app</Text>
        <Signup/>

        {/* <SetPin/> */}
      </View>
    </ApplicationProvider>
    
  )
}
