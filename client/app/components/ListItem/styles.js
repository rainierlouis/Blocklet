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
		height: EStyleSheet.hairlineWidth,
	},
});
