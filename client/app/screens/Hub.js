import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Balance } from '../components/Balance';
import { HeaderTop } from '../components/HeaderTop';

export default () => (
	<Container>
		<StatusBar translucent={false} barStyle='light-content' />
		<HeaderTop />
		<Balance />
	</Container>
)
