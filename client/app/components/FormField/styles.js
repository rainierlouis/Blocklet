import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
 container: {
  width: 350,
  marginTop: 270,
  alignItems: 'center'
 },
 amountContainer: {
  marginTop: 30,
  width: 350,
  alignItems: 'center'
 },
 amountContainerB: {
  marginTop: 5,
  width: 350,
  alignItems: 'center'
 },
 formLabel: {
  backgroundColor: 'transparent',
  flexDirection: 'row'
 },
 textInput: {
  marginBottom: 5,
  alignItems: 'flex-end',
  alignSelf: 'center',
  backgroundColor: 'rgba(5,0.5,0.5,0.5)',
  height: 50,
  width: 250,
  borderColor: '$white',
  borderWidth: 1,
  paddingLeft: 15,
  borderRadius: 30
 },
 textInputTwo: {
  borderBottomWidth: 0,
  width: 250,
  height: 50,
  marginBottom: 10,
  backgroundColor: 'rgba(5,0.5,0.5,0.5)',
  borderRadius: 30,
  paddingLeft: 15
 },
 icon: {
  color: '#afafaf',
  alignSelf: 'center'
 },
 input: {
  fontFamily: 'lato',
  color: '#afafaf'
 },
 inputBottom: {
  fontFamily: 'lato',
  color: '#afafaf',
  marginBottom: 600
 }
});
