import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Hub from '../screens/Hub';
import MenuList from '../screens/MenuList';
import Login from '../screens/Login';
import Transactions from '../screens/Transactions';
import ExchangeInfo from '../screens/ExchangeInfo';
import Personal from '../screens/Personal';
import Transfer from '../screens/Transfer';
import CompleteTransfer from '../screens/CompleteTransfer';
import News from '../screens/News';

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
   headerStyle: { backgroundColor: '#3a3535' },
   headerTitleStyle: { color: 'white', fontFamily: 'lato', fontSize: 25 },
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
 },
 Transfer: {
  screen: Transfer,
  navigationOptions: {
   header: () => null
  }
 },
 CompleteTransfer: {
  screen: CompleteTransfer,
  navigationOptions: {
   header: () => null
  }
 },
 News: {
  screen: News,
  navigationOptions: {
   header: () => null
  }
 }
});

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
