import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/ListItem';
import { Container } from '../components/Container';
import menuData from '../data/menuData';

// REDUX
// import { connect } from 'react-redux';
// import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

class MenuList extends Component {

	static propTypes = {
		onPress: PropTypes.func,
	}

	handlePress = (item) => {
		console.log(`transfer to screen: ${item}`);
	}

// RENDER ========================

	render() {

		return (
			<Container>
				<StatusBar translucent={false} barStyle='light-content' />
				<FlatList
					style={{marginTop: 10}}
					data={menuData}
					renderItem={({ item }) => (
						<ListItem
							text={item}
							onPress={() => this.handlePress(item)}
						/>
					)}
					keyExtractor={item => item}
					ItemSeparatorComponent={Separator}
				/>
			</Container>
		)
	}
}

export default MenuList;

// const mapStateToProps = state => {
// 	return {
// 		baseCurrency: state.currencies.baseCurrency,
// 		quoteCurrency: state.currencies.quoteCurrency,
// 		primaryColor: state.theme.primaryColor,
// 	}
// }
//
// export default connect(mapStateToProps)(CurrencyList);
