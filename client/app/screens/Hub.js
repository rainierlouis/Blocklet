import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Balance } from '../components/Balance';

export default () => (
	<Container>
		<StatusBar translucent={false} barStyle='light-content' />
		<Balance />
	</Container>
)
