import Signup from './screens/signup';
// import SetPin from './screens/SetPin';

import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import SignIn from './screens/signin';
import HomePage from './screens/HomePage';
import { useState } from 'react';
import { View } from 'react-native';



export default function App() {

  const [currentPage, setCurrentPage] = useState("SignUp")

  const handlechangePage = (newPage) => {
    setCurrentPage(newPage);
  }
  const pro={
    question:"hello how are you",
    answer:"nice"
  }

  const renderPage = () => {
    switch(currentPage){
      case "SignUp": return <Signup onPageChange={handlechangePage}/>
      case "SignIn": return <SignIn onPageChange={handlechangePage}/>
      case "HomePage": return <HomePage onPageChange={handlechangePage}/>
    }
  }
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
     
      <View style = {{flex: 1, }}>
        {renderPage()}

      </View>
    </ApplicationProvider>
    
  )
}


