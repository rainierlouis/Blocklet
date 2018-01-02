import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		marginTop: 20,
		justifyContent: 'center',
	},
	image: {
		height: 70,
		width: 70,
	},
	upperRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},
	lowerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingVertical: 10,
	},
	divider: {
		backgroundColor: '$white',
		width: 150,
		alignSelf: 'flex-end',
	},
	symbol: {
		color: '$white',
		fontWeight: '800',
		paddingLeft: 20,
	},
	currency: {
		color: '$white',
	},
	amountRate: {
		color: '$white',
	},
	twentyFour: {
		color: '$white',
	},
	twentyFourPerc: {
		color: '$minusPerc',
	},
	seven: {
		color: '$white',
	},
	sevenPerc: {
		color: '$plusPerc',
	},
})
