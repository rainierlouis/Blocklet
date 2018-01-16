import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
 transferButton: {
  marginTop: 5,
  backgroundColor: '$yellow',
  width: 355,
  height: 50
 },
 personalButton: {
  marginTop: 5,
  backgroundColor: '$yellow',
  width: 355,
  height: 50
 },
 menuButton: {
  backgroundColor: '$primaryPurple',
  marginTop: -50,
  marginLeft: -15,
  padding: 0,
  paddingRight: 20
 },
 optionsButton: {
  backgroundColor: '$primaryPurple',
  padding: 0,
  paddingLeft: 20,
  marginTop: -50,
  marginRight: -25
 },
 loginButton: {
  width: 250,
  height: 40,
  backgroundColor: '#ddb500',
  borderRadius: 30
 },
 signupButton: {
  backgroundColor: '#ddb500',
  marginTop: 20,
  width: '100%',
  borderRadius: 2
 },
 exchangeButton: {
  width: 90,
  height: 50
 },
 fbgContainer: {
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center'
 },
 fbButton: {
  width: 120,
  height: 40,
  borderTopLeftRadius: 30,
  borderBottomLeftRadius: 30,
  backgroundColor: '#5062aa',
  marginRight: -20,
  justifyContent: 'center'
 },
 gButton: {
  width: 120,
  height: 40,
  borderTopRightRadius: 30,
  borderBottomRightRadius: 30,
  backgroundColor: '#cc4545'
 }
});
