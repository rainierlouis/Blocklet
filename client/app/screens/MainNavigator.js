import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import Login from './Login';
import Balances from './Balances';
import Markets from './Markets';
import Transactions from './Transactions';
import News from './News';
import Calculator from './Calculator';
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
  Calculator: { screen: NavigatorWithRootScreen(Calculator) },
},
{
  tabBarOptions: {
    inactiveTintColor: '#ddb500',
    activeTintColor: '#ddb500',
    inactiveBackgroundColor: '#111',
    activeBackgroundColor: '#333',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 111,
    },
  }
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