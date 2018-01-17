import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
 container: {
  alignItems: 'center'
 },
 balanceBelowContainer: {
  alignItems: 'center'
 },
 balanceTextTitle: {
  color: '$darkGrey'
 },
 balanceTextAmount: {
  color: '#cccccc',
  height: null,
  width: null
 },
 conversionText: {
  color: '$white',
  fontSize: 16,
  paddingTop: 10
 },
 divider: {
  backgroundColor: '$border',
  width: 200,
  alignSelf: 'center'
 },
 image: {
  height: 25,
  width: 25,
  marginLeft: 4
 },
 imageLtc: {
  height: 20,
  width: 20,
  marginLeft: 4
 }
});
