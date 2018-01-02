import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Hub from './screens/Hub';
import Login from './screens/Login';

EStyleSheet.build({
	$primaryPurple: '#181337',
	$darkGrey: '#777777',
	$border: '#3d354f',

	$plus: '#5ec16a',
	$minus: '#bf3b3b',

	$white: '#FFF',

})

export default () => <Hub />;
