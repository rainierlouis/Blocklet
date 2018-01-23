import React from 'react';
import { View } from 'react-native';
import { Header, Avatar, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MenuButton, OptionsButton } from '../ButtonItem';
import { Logo } from '../Logo';

import styles from './styles';

onPressaAvatar = () => {
  console.log("Avatar!")
}

const HeaderTop = () => (
  <View style={styles.container}>
    <Header
      statusBarProps={{ barStyle: 'light-content' }}
      backgroundColor='#FF0000'
      outerContainerStyles={styles.headerOuter}
      innerContainerStyles={styles.headerInner}
      leftComponent={{ text: 'Blocklet', style: { color: '#ddb500' } }}
      rightComponent={
        <Avatar
          rounded
          width={30}
          height={30}
          containerStyle={styles.avatar}
          source={{uri: 'https://lh3.googleusercontent.com/-TO_sU3CDwiw/AAAAAAAAAAI/AAAAAAAAAAA/ACSILjWf6TYpDbSbc5_l_ZODn-MKryZe7w/s96-c-mo/photo.jpg'}}
          onPress={() => this.onPressaAvatar}
          activeOpacity={0.7}
        />
      }
    />
  </View>
);

HeaderTop.propTypes = {
 backgroundColor: PropTypes.string,
 onPress: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch({ type: 'SET_USER', user })
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);
