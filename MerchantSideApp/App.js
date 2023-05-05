import Signup from './screens/Signup';
import SetPin from './screens/SetPin';
import { ApplicationProvider, Layout, Input } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function App() {

  const pro={
    question:"hello how are you",
    answer:"nice"
  }
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      
        
        <Signup/>

        {/* <SetPin/> */}
      
    </ApplicationProvider>
    
  )
}


