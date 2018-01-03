import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import { MenuButton, OptionsButton } from '../ButtonItem';

import styles from './styles';


const HeaderTop = ({ onPress }) => (
	<View style={styles.container}>
		<Header
			outerContainerStyles={styles.headerOuter}
			innerContainerStyles={styles.headerInner}
			leftComponent={<MenuButton onPress={onPress}/>}
			rightComponent={<OptionsButton />}
		/>
	</View>
)

HeaderTop.propTypes = {
	backgroundColor: PropTypes.string,
	onPress: PropTypes.func,
}

export default HeaderTop;
