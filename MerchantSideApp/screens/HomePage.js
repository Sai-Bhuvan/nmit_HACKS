import { Layout } from '@ui-kitten/components'
import React, { useEffect, useRef, useState } from 'react'
import { ApplicationProvider, BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import Home from './Home';
import Transactions from './transaction'
import InitiateTransaction from './InitiateTransaction'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomePage({ onPageChange }) {

  const { Navigator, Screen } = createBottomTabNavigator();
  const [isMerchant, setIsMerchant] = useState(false);
  useEffect(() => {
    async function getUser() {
      console.log(await AsyncStorage.getItem('isMerchant'));
      setIsMerchant(JSON.parse(await AsyncStorage.getItem('isMerchant') == 'true'));
    }
    getUser();
  }, [])

  const BottomTabBar1 = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home' />
      <BottomNavigationTab title='Transactions' />
      <BottomNavigationTab title='Payment' />

    </BottomNavigation>
  );

  const TabNavigator1 = () => (
    <Navigator tabBar={props => <BottomTabBar1 {...props} />}>
      <Screen name='Home' component={Home} />
      <Screen name='Transaction' component={Transactions} />
      <Screen name='Payment' component={InitiateTransaction} />
    </Navigator>
  );

  const BottomTabBar2 = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home' />
      <BottomNavigationTab title='Transactions' />

    </BottomNavigation>
  );

  const TabNavigator2 = () => (
    <Navigator tabBar={props => <BottomTabBar2 {...props} />}>
      <Screen name='Home' component={Home} />
      <Screen name='Transaction' component={Transactions} />
    </Navigator>
  );

  return (
    <NavigationContainer>
      {isMerchant ? <TabNavigator1 /> : <TabNavigator2 />}

    </NavigationContainer>

  )
}
