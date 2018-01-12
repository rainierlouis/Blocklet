import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
 exchangeContainer: {
  width: 250
 },
 title: {
  color: '$white',
  fontSize: 20
 },
 titlePrimary: {
  marginTop: 60,
  color: '$white',
  fontSize: 20
 },
 ticker: {
  color: '$plus'
 },
 amount: {
  color: '$plus',
  alignSelf: 'flex-end',
  marginBottom: 10
 },
 graph: {
  height: 60,
  width: Dimensions.get('window').width,
  alignSelf: 'center',
  marginBottom: 30
 }
});
