import { StackNavigator } from 'react-navigation';

import Hub from '../screens/Hub';
import MenuList from '../screens/MenuList';
import Login from '../screens/Login';
import Loading from '../screens/Loading';
import Transactions from '../screens/Transactions';

// const LoadingStack = StackNavigator({
// 	Loading: {
// 		screen: Loading,
// 	},
// 	Hub: {
// 		screen: HomeStack,
// 	}
// })

const HomeStack = StackNavigator({
	Hub: {
		screen: Hub,
		navigationOptions: {
			header: () => null,
		}
	},
	MenuList: {
		screen: MenuList,
		navigationOptions: {
			headerTitle: 'Menu',
			headerStyle: {backgroundColor: '#43314f'},
			headerTitleStyle: {color: 'white'},
			headerTintColor: 'white',
		}
	},
	Transactions: {
		screen: Transactions,
		navigationOptions: {
			headerTitle: 'Transactions',
			headerStyle: {backgroundColor: '#43314f'},
			headerTitleStyle: {color: 'white'},
			headerTintColor: 'white',
		}
	}
})

export default StackNavigator({
	Login: {
		screen: Login,
	},
	Hub: {
		screen: HomeStack,
		navigationOptions: {
			gesturesEnabled: false,
		}
	},
}, {
	mode: 'modal',
	headerMode: 'none',
})
