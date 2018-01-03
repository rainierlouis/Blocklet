import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		justifyContent: 'space-between',
		marginTop: 50,
	},
	balanceTextTitle: {
		color: '$darkGrey',
	},
	balanceTextAmount: {
		color: '$white',
	},
	conversionText: {
		color: '$white',
		fontSize: 10,
		alignSelf: 'center',
		paddingTop: 10,
	},
	divider: {
		backgroundColor: '$border',
		width: 200,
		alignSelf: 'center',
	},
	image: {
		height: 30,
		width: 30,
		paddingLeft: 20,
	}
})
