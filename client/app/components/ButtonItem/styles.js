import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
 transferButton: {
  marginTop: 40,
  backgroundColor: '$yellow',
  width: 150
 },
 personalButton: {
  marginTop: 15,
  backgroundColor: '$yellow',
  width: 150
 },
 MenuButton: {
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
  backgroundColor: '#ddb500',
  borderRadius: 30
 },
 signupButton: {
  backgroundColor: '#ddb500',
  marginTop: 20,
  width: '100%',
  borderRadius: 2
 }
});
