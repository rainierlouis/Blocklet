import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Balance } from '../components/Balance';
import { HeaderTop } from '../components/HeaderTop';
import { CardItem } from '../components/CardItem';
import { LastConverted } from '../components/TextItem';
import { TransactionBox } from '../components/TransactionBox';

const TEMP_BASE = 'BTC';
const TEMP_QUOTE = 'EUR';
const TEMP_CONV = 12212.06;
const TEMP_DATE = new Date();
const TEMP_BALANCE = 0.001361;

const TEMP_24 = -2.27;
const TEMP_7 = +1.44;

const TEMP_LIST = [
	{
		title: '+0.002',
		subtitle: 'Ross S.',
		icon: 'keyboard-arrow-right',
		style: {color: '#5ec16a'},
	},
	{
		title: '-0.00041',
		subtitle: 'Chandler B.',
		icon: 'keyboard-arrow-left',
		style: {color: '#bf3b3b'},
	},
	{
		title: '-0.0031',
		subtitle: 'Rachel L.',
		icon: 'keyboard-arrow-left',
		style: {color: '#bf3b3b'},
	},
	{
		title: '+0.00019',
		subtitle: 'Monica R.',
		icon: 'keyboard-arrow-right',
		style: {color: '#5ec16a'},
	},
	{
		title: '+0.002',
		subtitle: 'Joey D.',
		icon: 'keyboard-arrow-right',
		style: {color: '#5ec16a'},
	}
]

export default () => (
	<Container>
		<StatusBar translucent={false} barStyle='light-content' />
		<HeaderTop />
		<Balance
			balanceAmount={TEMP_BALANCE}
		/>
		<LastConverted
			baseCurrency={TEMP_BASE}
			quoteCurrency={TEMP_QUOTE}
			conversionRate={TEMP_CONV}
			currentDate={TEMP_DATE}
		/>
		<CardItem
			twentyFourPerc={TEMP_24}
			sevenPerc={TEMP_7}
		/>
		<TransactionBox
			list={TEMP_LIST}
		/>
	</Container>
)
