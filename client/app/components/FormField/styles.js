import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
 container: {
  width: 350,
  paddingTop: 100,
  marginTop: 200
 },
 formLabel: {
  backgroundColor: 'transparent',
  flexDirection: 'row'
 },
 textInput: {
  marginVertical: 0.5,
  alignSelf: 'center',
  backgroundColor: 'white',
  height: 50,
  width: 250,
  borderBottomColor: '$darkGrey',
  borderBottomWidth: 1,
  paddingLeft: 15,
  fontFamily: 'quicksand'
 }
});
