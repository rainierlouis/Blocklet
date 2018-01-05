import { StackNavigator } from 'react-navigation';

import Hub from '../screens/Hub';
import MenuList from '../screens/MenuList';
import Login from '../screens/Login';
import Transactions from '../screens/Transactions';
import ExchangeInfo from '../screens/ExchangeInfo';

// const TransactionStack = StackNavigator({
//  Transactions: {
//   screen: Transactions,
//   navigationOptions: {
//    header: () => null
//   }
//  },
//  MenuList: {
//   screen: MenuStack,
//   navigationOptions: {
//    header: () => null
//   }
//  }
// });
//
// const ExchangeStack = StackNavigator({
//  ExchangeInfo: {
//   screen: ExchangeInfo,
//   navigationOptions: {
//    header: () => null
//   }
//  },
//  MenuList: {
//   screen: MenuStack,
//   navigationOptions: {
//    header: () => null
//   }
//  }
// });
//
const HomeStack = StackNavigator({
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
   screen: Login
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
