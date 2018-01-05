const API_KEY_TESTNET = 'f737-19e7-0636-ebbc';
const API_KEY = '98d2-7443-af3f-17e4';
const PIN = '12112015K';

// FETCH API CALLS //
// GET new address with label (label)
// GET balance of specified address (address)
// POST transfer of coin (amount, fromAddress, toAddress, pin)
// GET current btc rate in popular currencies
// GET 24h + 7d percent change (https://api.coinmarketcap.com/v1/ticker/)
// GET 25 recent sent transactions (sent type, address)
// GET 25 recent received transactions (received type, address)

export const fetchBalance = address =>
 fetch(
  `https://block.io/api/v2/get_address_balance/?api_key=${API_KEY_TESTNET}&addresses=${address}`
 )
  .then(response => response.json())
  .then(data => data.data.available_balance);

export const fetchBtcRate = () =>
 fetch(`https://block.io/api/v2/get_current_price/?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => data.data);

export const fetchTickerRate = () =>
 fetch(`https://api.coinmarketcap.com/v1/ticker/`)
  .then(response => response.json())
  .then(data => data[0]);

export const fetchSent = address =>
 fetch(
  `https://block.io/api/v2/get_transactions/?api_key=${API_KEY_TESTNET}&type=sent&addresses=${address}`
 )
  .then(response => response.json())
  .then(data => data.data.txs);

export const fetchReceived = address =>
 fetch(
  `https://block.io/api/v2/get_transactions/?api_key=${API_KEY_TESTNET}&type=received&addresses=${address}`
 )
  .then(response => response.json())
  .then(data => data.data.txs);
