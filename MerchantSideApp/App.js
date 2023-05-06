import Signup from './screens/Signup';
// import SetPin from './screens/SetPin';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider,BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import UserCamera from './screens/camera';
import * as eva from '@eva-design/eva';
import Home from './screens/Home';
import Transactions from './screens/transaction'
import Profile from './screens/Profile'
import SignIn from './screens/signin';
import InitiateTransaction from './screens/InitiateTransaction';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home'/>
    <BottomNavigationTab title='Transactions'/>
    <BottomNavigationTab title='Profile'/>
    <BottomNavigationTab title='Payment'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={Home}/>
    <Screen name='Transaction' component={Transaction}/>
    <Screen name='Profile' component={Profile}/>
    <Screen name='Payment' component={InitiateTransaction}/>
  </Navigator>
);


export default function App() {

  const pro={
    question:"hello how are you",
    answer:"nice"
  }
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      {/* <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>              */}
      {/* <Signup/> */}
      {/* <SignIn/> */} 
      <UserCamera/>
    </ApplicationProvider>
  )
}


