// import Signup from './screens/signup';
// import SetPin from './screens/SetPin';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider,BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import * as eva from '@eva-design/eva';
import Home from './screens/Home';
import Transactions from './screens/transaction'
import Profile from './screens/Profile'
import SignIn from './screens/signin';
import camera from './screens/camera';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home'/>
    <BottomNavigationTab title='Transactions'/>
    <BottomNavigationTab title='Profile'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={Home}/>
    <Screen name='Transaction' component={Transaction}/>
    <Screen name='Profile' component={Profile}/>
  </Navigator>
);


export default function App() {

  const pro={
    question:"hello how are you",
    answer:"nice"
  }
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>              */}
      {/* <Signup/> */}
      {/* <SignIn/> */}
      {/* <Transactions/> */}
      <camera/>
    </ApplicationProvider>
    
  )
}


