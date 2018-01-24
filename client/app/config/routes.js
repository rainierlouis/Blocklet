import { StackNavigator } from 'react-navigation';

import Main from '../screens/Main';
import Home from '../screens/Home';
import Hub from '../screens/Hub';
import MenuList from '../screens/MenuList';
import Login from '../screens/Login';
import Transactions from '../screens/Transactions';
import ExchangeInfo from '../screens/ExchangeInfo';
import Personal from '../screens/Personal';
import Transfer from '../screens/Transfer';
import CompleteTransfer from '../screens/CompleteTransfer';
import Complete from '../screens/Complete';
import News from '../screens/News';
import Market from '../screens/Market';
import Calculator from '../screens/Calculator';
import Balances from '../screens/Balances';

//PLAYING AROUND
import Testing from '../screens/Testing';
import Portfolio from '../screens/Portfolio';

import { UserImage } from '../components/Logo';

const HomeStack = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
     header: () => null
    }
   },
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
   headerTitleStyle: { color: '#cccccc', fontFamily: 'lato', fontSize: 20 },
   headerTintColor: '#cccccc'
  }
 },
 Exchange: {
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
 Complete: {
  screen: Complete,
  navigationOptions: {
   header: () => null
  }
 },
 News: {
  screen: News,
  navigationOptions: {
   header: () => null
  }
 },
 Market: {
  screen: Market,
  navigationOptions: {
   header: () => null
  }
 },
 Calculator: {
  screen: Calculator,
  navigationOptions: {
   header: () => null
  }
 },
 Balances: {
  screen: Balances,
  navigationOptions: {
   header: () => null
  }
 },
Testing: {
 screen: Testing,
 navigationOptions: {
  header: () => null
 }
},
Portfolio: {
 screen: Portfolio,
 navigationOptions: {
  header: () => null
 }
},
});

export default StackNavigator(
 {
  Login: {
   screen: ExchangeInfo
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
