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

  fontFamily: 'judson'
  // textShadowOffset: { width: 2, height: 5 },
  // textShadowColor: '$black',
  // textShadowRadius: 3
 }
});
