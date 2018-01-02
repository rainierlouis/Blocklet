import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';


const HeaderTop = () => (
	<View style={styles.container}>
		<Header
			outerContainerStyles={styles.headerOuter}
			innerContainerStyles={styles.headerInner}
			leftComponent={{ icon: 'menu', color: '#fff' }}
			rightComponent={{ icon: 'settings', color: '#fff' }}
		/>
	</View>
)

HeaderTop.propTypes = {
	backgroundColor: PropTypes.string,
}

export default HeaderTop;
