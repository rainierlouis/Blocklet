import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
 $underlayColor: '$white',
 row: {
  width: windowWidth,
  paddingHorizontal: 20,
  paddingVertical: 20,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$primaryPurple'
 },
 rowLt: {
  width: windowWidth,
  paddingHorizontal: 20,
  paddingVertical: 20,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$primaryPurpleLt'
 },
 text: {
  fontSize: 20,
  color: '$white',
  fontFamily: 'lato'
 },
 separator: {
  marginLeft: 20,
  backgroundColor: '$border',
  flex: 1,
  height: 2
 },
 transactionContainer: {
  width: 355,
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 40,
  paddingVertical: 20,
  backgroundColor: '#2b2b2b',
  marginTop: 10
 },
 upper: {
  flexDirection: 'column'
 },
 amount: {
  color: '$white'
 },
 sender: {
  color: '$darkGrey',
  fontSize: 10
 },
 confirmations: {
  color: '$white'
 },
 confidence: {
  color: '$white'
 },
 iconPlus: {
  fontSize: 20,
  paddingHorizontal: 10,
  color: '$plus'
 },
 iconMinus: {
  fontSize: 20,
  paddingHorizontal: 10,
  color: '$minus'
 }
});
