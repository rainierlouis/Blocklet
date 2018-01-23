import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import Login from './Login';
import Balances from './Balances';
import Markets from './Markets';
import Transactions from './Transactions';
import News from './News';
import { HeaderTop } from '../components/HeaderTop';

// HOC -> High Order Component
const NavigatorWithRootScreen = (name) => {
  return StackNavigator({
    [name]: {
      screen: name,
      navigationOptions: {
        gesturesEnabled: false,
        header: (<HeaderTop/>),
      }
    }
  });
}

const MainTabNavigator = TabNavigator({
  Balances: { screen: NavigatorWithRootScreen(Balances) },
  Markets: { screen: NavigatorWithRootScreen(Markets) },
  Transactions: { screen: NavigatorWithRootScreen(Transactions) },
  News: { screen: NavigatorWithRootScreen(News) },
},
{
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const MainNavigator = StackNavigator({
  Login: {
    screen: Login
  },
  Loading: {
    screen: MainTabNavigator,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
},
{
 mode: 'modal',
 headerMode: 'none'
});


export default (MainNavigator);