import React, { Component } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import { Header, Avatar, Icon, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MenuButton, OptionsButton } from '../ButtonItem';
import { Logo } from '../Logo';

import styles from './styles';


class HeaderTop extends Component {
  state = {
    modalVisible: false,
  }
  constructor(props) {
    super(props);
  }

  logout () {
    Expo.SecureStore.deleteItemAsync('userData');
    this.props.setUser({});
    this.props.navigation.navigate('Login');
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render () {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          backgroundColor='#111'
          outerContainerStyles={styles.headerOuter}
          innerContainerStyles={styles.headerInner}
          leftComponent={
            <View style={styles.leftComponent}>
              <Avatar
                rounded
                width={30}
                height={30}
                containerStyle={styles.logo}
                source={require('../Logo/img/coin.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.text}>Blocklet</Text>
            </View>
          }
          rightComponent={
            <Avatar
              rounded
              width={30}
              height={30}
              containerStyle={styles.avatar}
              source={{uri: this.props.user.profile_picture}}
              onPress={() => this.openModal()}
              activeOpacity={0.7}
            />
          }
        />
        <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalInnerContainer}>
                <View style={styles.modalHeaderContainer}>
                  <Icon
                    name='close'
                    color='#ddb500'
                    onPress={() => this.closeModal()}
                    style={styles.modalCross}
                  />
                  <Text style={styles.modalCloseText} >Account</Text>
                </View>
                <View style={styles.modalMeContainer}>
                  <Avatar
                    rounded
                    width={50}
                    height={50}
                    containerStyle={styles.avatar}
                    source={{uri: this.props.user.profile_picture}}
                  />
                  <Text style={styles.modalMeText} >{this.props.user.name}</Text>
                </View>
                <Divider style={{ backgroundColor: '#FFF' }} />
                <View
                    style={styles.modalLogout}
                    onPress={() => this.logout()}
                >
                  <Icon
                    name='log-out'
                    type='entypo'
                    color='#ddb500'
                    style={styles.modalLogoutIcon}
                  />
                  <Text style={styles.modalLogoutText} >Logout</Text>
                </View>
              </View>
            </View>
          </Modal>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch({ type: 'SET_USER', user })
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
