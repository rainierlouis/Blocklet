import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
 exchangeContainer: {
  width: 250
 },
 exchBox: {
  backgroundColor: '$grey',
  marginTop: 5,
  width: 355,
  paddingHorizontal: 10,
  paddingVertical: 10
 },
 title: {
  color: '$white',
  fontSize: 20
 },
 titlePrimary: {
  color: '$white',
  fontSize: 20
 },
 ticker: {
  color: '$minus'
 },
 amount: {
  color: '$plus',
  alignSelf: 'flex-end',
  marginBottom: 5
 },
 graph: {
  height: 60,
  width: 354,
  alignSelf: 'center',
  marginBottom: 5
 }
});
