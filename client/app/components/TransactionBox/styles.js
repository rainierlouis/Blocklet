import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
 container: {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 45
 },
 titleText: {
  color: '$white',
  fontSize: 14
 },
 list: {
  borderTopWidth: 0
 },
 listItem: {
  backgroundColor: '$primaryPurple',
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
