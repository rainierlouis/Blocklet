import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 45,

	},
	titleText: {
		color: '$white',

	},
	list: {
		borderTopWidth: 0,
	},
	listItem: {
		backgroundColor: '$primaryPurple',
		borderBottomWidth: 0,
		width: Dimensions.get('window').width / 2,
	},
	listTitle: {
		fontSize: 10,
		color: '$white',
	},
	listSubtitle: {
		fontSize: 12,
	},
	leftIconPlus: {
		color: 'green',
	},
	leftIconMinus: {
		color: 'red',
	},
})
