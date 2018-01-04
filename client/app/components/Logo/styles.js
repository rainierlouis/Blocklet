import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2.5;

export default EStyleSheet.create({
 container: {
  alignItems: 'center',
  marginTop: -50
 },
 containerImage: {
  alignItems: 'center',
  justifyContent: 'center',
  width: imageWidth,
  height: imageWidth
 },
 logo: {
  width: imageWidth
 }
});
