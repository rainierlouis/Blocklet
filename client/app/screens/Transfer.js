import React, { Component } from 'react';
import {
 Alert,
 Linking,
 Dimensions,
 LayoutAnimation,
 Text,
 View,
 StatusBar,
 StyleSheet,
 TouchableOpacity
} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import PropTypes from 'prop-types';

export default class App extends Component {
 state = {
  hasCameraPermission: null,
  lastScannedUrl: null
 };
 static propTypes = {
  navigation: PropTypes.object
  // dispatch: PropTypes.func
 };
 componentDidMount() {
  this._requestCameraPermission();
 }

 _requestCameraPermission = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({
   hasCameraPermission: status === 'granted'
  });
 };

 _handleBarCodeRead = result => {
  if (result.data !== this.state.lastScannedUrl) {
   LayoutAnimation.spring();
   this.setState({ lastScannedUrl: result.data });
   this.props.navigation.navigate('CompleteTransfer', {
    data: result.data
   });
  }
 };

 render() {
  return (
   <View style={styles.container}>
    {this.state.hasCameraPermission === null ? (
     <Text>Requesting for camera permission</Text>
    ) : this.state.hasCameraPermission === false ? (
     <Text style={{ color: '#fff' }}>Camera permission is not granted</Text>
    ) : (
     <BarCodeScanner
      onBarCodeRead={this._handleBarCodeRead}
      style={{
       height: Dimensions.get('window').height,
       width: Dimensions.get('window').width
      }}
     >
      <View style={styles.cameraContainer}>
       {/* <Text style={styles.cameraText}>QR Code Scanner</Text> */}
       <View style={styles.box} />
      </View>
     </BarCodeScanner>
    )}

    <StatusBar hidden />
   </View>
  );
 }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent'
 },
 box: {
  alignSelf: 'center',
  marginTop: 280,
  width: 300,
  height: 300,
  backgroundColor: 'transparent',
  borderWidth: 3,
  borderColor: 'white',
  borderStyle: 'dashed',
  overflow: 'hidden'
 },
 bottomBar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'transparent',
  padding: 15,
  flexDirection: 'row'
 },
 cameraContainer: {},
 cameraText: {
  color: 'white'
 }
});
