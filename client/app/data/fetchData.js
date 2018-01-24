const PIN = '12112015K';
const api = 'https://block.io/api/v2/';
// FETCH API CALLS //
// GET new address with label (label)
// GET balance of specified address (address)
// POST transfer of coin (amount, fromAddress, toAddress, pin)
// GET current btc rate in popular currencies
// GET 24h + 7d percent change (https://api.coinmarketcap.com/v1/ticker/)
// GET 25 recent sent transactions (sent type, address)
// GET 25 recent received transactions (received type, address)

export const fetchBalance = (address, apiKey) =>
 fetch(`${api}get_address_balance/?api_key=${apiKey}&addresses=${address}`)
  .then(response => response.json())
  .then(data => data.data.available_balance);

export const fetchRate = apiKey =>
 fetch(`${api}get_current_price/?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => data.data);

export const fetchTickerRate = currency =>
 fetch(`https://api.coinmarketcap.com/v1/ticker/${currency}`)
  .then(response => response.json())
  .then(data => data[0]);

export const fetchSent = (address, apiKey) =>
 fetch(
  `${api}get_transactions/?api_key=${apiKey}&type=sent&addresses=${address}`
 )
  .then(response => response.json())
  .then(data => data.data.txs);

export const fetchReceived = (address, apiKey) =>
 fetch(
  `${api}get_transactions/?api_key=${apiKey}&type=received&addresses=${address}`
 )
  .then(response => response.json())
  .then(data => data.data.txs);

export const fetchExchange = apiKey =>
 fetch(`${api}get_current_price/?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => data.data.prices);

export const fetchDogeToBtc = () =>
 fetch(`${api}get_current_price/?api_key=b108-0d58-ccff-c468&price_base=BTC`)
  .then(response => response.json())
  .then(data => data.data.prices[0].price);

export const fetchBtcToUsd = () =>
 fetch(`${api}get_current_price/?api_key=98d2-7443-af3f-17e4&price_base=USD`)
  .then(response => response.json())
  .then(data => data.data.prices[0].price);

export const fetchMarket = (count=10) =>
 fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${count}`).then(response =>
  response.json()
 );

export const fetchFee = (apiKey, amount, address) =>
 fetch(
  `${api}get_network_fee_estimate/?api_key=${apiKey}&amounts=${amount}&to_addresses=${address}`
 ).then(response => response.json());

export const sendAmount = (apiKey, amount, toAddress, fromAddress) => {
 fetch(
  `https://block.io/api/v2/withdraw_from_addresses/?api_key=${apiKey}&amounts=${amount}&from_addresses=${fromAddress}&to_addresses=${toAddress}&pin=${PIN}`
 );
};
