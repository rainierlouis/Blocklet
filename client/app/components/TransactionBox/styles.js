import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
 container: {
  width: 355,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 5,
  backgroundColor: '#2b2b2b'
 },
 titleText: {
  color: '$white',
  fontSize: 14
 },
 list: {
  marginTop: 0,
  borderTopWidth: 0,
  backgroundColor: '#2b2b2b'
 },
 listItem: {
  borderBottomWidth: 0,
  width: Dimensions.get('window').width / 2
 },
 listTitle: {
  fontSize: 12,
  color: '$white'
 },
 listSubtitle: {
  fontSize: 14
 },
 leftIconPlus: {
  color: 'green'
 },
 leftIconMinus: {
  color: 'red'
 }
});
