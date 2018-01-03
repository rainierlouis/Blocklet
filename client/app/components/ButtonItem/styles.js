import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
	transferButton: {
		marginTop: 40,
		backgroundColor: '$plus',
		width: 150,
	},
	personalButton: {
		marginTop: 15,
		backgroundColor: '$user',
		width: 150,
	},
	MenuButton: {
		backgroundColor: '$primaryPurple',
		marginTop: -50,
		marginLeft: -15,
		padding: 0,
		paddingRight: 20,
	},
	optionsButton: {
		backgroundColor: '$primaryPurple',
		padding: 0,
		paddingLeft: 20,
		marginTop: -50,
		marginRight: -25,
	},
	loginButton: {
		backgroundColor: '$plus',
		marginTop: 30,
		width: Dimensions.get('window').width / 1.9,
	},
	signupButton: {
		backgroundColor: '$user',
		marginTop: 20,
		width: Dimensions.get('window').width / 1.9,
	}
})
