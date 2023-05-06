import { Layout } from '@ui-kitten/components'
import React from 'react'
import { ApplicationProvider,BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import Home from './Home';
import Transactions from './transaction'
import Profile from './Profile'
import InitiateTransaction from './InitiateTransaction'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function HomePage({ onPageChange }) {

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
          <Screen name='Transaction' component={Transactions}/>
          <Screen name='Profile' component={Profile}/>
          <Screen name='Payment' component={InitiateTransaction}/>
        </Navigator>
      );
  return (
      <NavigationContainer>
          <TabNavigator/>
        
      </NavigationContainer>
        
  )
}
