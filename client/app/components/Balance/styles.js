import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
 container: {
  justifyContent: 'center',
  marginTop: 50
 },
 balanceBelowContainer: {
  alignItems: 'center'
 },
 balanceTextTitle: {
  color: '$darkGrey'
 },
 balanceTextAmount: {
  color: '$white'
 },
 conversionText: {
  color: '$white',
  fontSize: 10,
  paddingTop: 10
 },
 divider: {
  backgroundColor: '$border',
  width: 200,
  alignSelf: 'center'
 },
 image: {
  height: 25,
  width: 25
 }
});
