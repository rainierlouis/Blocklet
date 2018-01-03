import { StackNavigator } from 'react-navigation';

import Hub from '../screens/Hub';
import MenuList from '../screens/MenuList';
import Login from '../screens/Login';

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
			headerStyle: {backgroundColor: '#777777'},
			headerTitleStyle: {color: 'white'},
			headerTintColor: 'white',
		}
	},
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



// const HomeStack = StackNavigator({
// 	Home: {
// 		screen: Home,
// 		navigationOptions: {
// 			header: () => null,
// }
// 	},
// 	Options: {
// 		screen: Options,
// 		navigationOptions: {
// 			headerTitle: 'Options',
// 		}
// 	},
// 	Themes: {
// 		screen: Themes,
// 		navigationOptions: {
// 			headerTitle: 'Themes',
// 		}
// 	},
// }, {
// 	headerMode: 'screen',
// })
//
// const CurrencyListStack = StackNavigator({
// 	CurrencyList: {
// 		screen: CurrencyList,
// 		navigationOptions: ({ navigation }) => ({
// 			headerTitle: navigation.state.params.title,
// 		})
// 	}
// })
