import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
 text: {
  color: '$darkGrey',
  marginTop: 10,
  fontSize: 10,
  textAlign: 'center'
 },
 container: {
  marginTop: -100,
  marginBottom: 200,
  alignItems: 'center'
 },
 loginTitle: {
  padding: 5,
  fontSize: 70,
  backgroundColor: 'transparent',
  color: 'black',
  fontFamily: 'lato'
 },
 createContainer: {
  flexDirection: 'row',
  marginTop: 50
 },
 accountText: {
  backgroundColor: 'transparent',
  color: 'white'
 },
 createText: {
  backgroundColor: 'transparent',
  color: '#ddb500',
  fontWeight: 'bold',
  marginLeft: 5
 },
 totalText: {
  color: '$plus',
  marginTop: 15
 },
 totalAmount: {
  color: '$white'
 }
});
