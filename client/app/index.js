import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Hub from './screens/Hub';
import Login from './screens/Login';
import MenuList from './screens/MenuList';

import Navigator from './config/routes';

EStyleSheet.build({
	$primaryPurple: '#181337',
	$darkGrey: '#777777',
	$border: '#3d354f',
	$user: '#5394bc',

	$plus: '#5ec16a',
	$minus: '#bf3b3b',

	$white: '#FFF',
	$black: '#000',

})

export default () => <Navigator onNavigationStateChange={null}/>;
