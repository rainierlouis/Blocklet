import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
	$underlayColor: '$black',
	row: {
		width: windowWidth,
		paddingHorizontal: 20,
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '$primaryPurple',
	},
	text: {
		fontSize: 20,
		color: '$white',
	},
	separator: {
		marginLeft: 20,
		backgroundColor: '$border',
		flex: 1,
		height: 2,
	},
	transactionContainer: {
		width: windowWidth,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 40,
		paddingVertical: 20,
	},
	upper: {
		flexDirection: 'column',
	},
	middle: {

	},
	lower: {

	},
	amount: {
		color: '$white',
	},
	sender: {
		color: '$darkGrey',
		fontSize: 10,
	},
	confirmations: {
		color: '$white',
	},
	confidence: {
		color: '$white',
	},
	iconPlus: {
		fontSize: 20,
		paddingHorizontal: 10,
		color: '$plus',
	},
	iconMinus: {
		fontSize: 20,
		paddingHorizontal: 10,
		color: '$minus',
		},
});
