import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Hub from '../screens/Hub';
import MenuList from '../screens/MenuList';
import Login from '../screens/Login';
import Transactions from '../screens/Transactions';
import ExchangeInfo from '../screens/ExchangeInfo';
import Personal from '../screens/Personal';

const HomeStack = StackNavigator({
 Home: {
  screen: Home,
  navigationOptions: {
   header: () => null
  }
 },
 Hub: {
  screen: Hub,
  navigationOptions: {
   header: () => null
  }
 },
 MenuList: {
  screen: MenuList,
  navigationOptions: {
   headerTitle: 'Menu',
   headerStyle: { backgroundColor: '#43314f' },
   headerTitleStyle: { color: 'white' },
   headerTintColor: 'white'
  }
 },
 ExchangeInfo: {
  screen: ExchangeInfo,
  navigationOptions: {
   header: () => null
  }
 },
 Transactions: {
  screen: Transactions,
  navigationOptions: {
   header: () => null
  }
 },
 Personal: {
  screen: Personal,
  navigationOptions: {
   header: () => null
  }
 }
});

// const MenuStack = StackNavigator({
//  MenuList: {
//   screen: MenuList,
//   navigationOptions: {
//    headerTitle: 'Menu',
//    headerStyle: { backgroundColor: '#43314f' },
//    headerTitleStyle: { color: 'white' },
//    headerTintColor: 'white'
//   }
//  },
//  Hub: {
//   screen: HomeStack
//  },
//  Transactions: {
//   screen: TransactionStack
//  },
//  ExchangeInfo: {
//   screen: ExchangeStack
//  }
// });

export default StackNavigator(
 {
  Login: {
   screen: Home
  },
  Loading: {
   screen: HomeStack,
   navigationOptions: {
    gesturesEnabled: false
   }
  }
 },
 {
  mode: 'modal',
  headerMode: 'none'
 }
);
