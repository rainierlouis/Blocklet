const PIN = '12112015K';

// FETCH API CALLS //
// GET new address with label (label)
// GET balance of specified address (address)
// POST transfer of coin (amount, fromAddress, toAddress, pin)
// GET current btc rate in popular currencies
// GET 24h + 7d percent change (https://api.coinmarketcap.com/v1/ticker/)
// GET 25 recent sent transactions (sent type, address)
// GET 25 recent received transactions (received type, address)

export const fetchBalance = (address, apiKey) =>
 fetch(
  `https://block.io/api/v2/get_address_balance/?api_key=${apiKey}&addresses=${address}`
 )
  .then(response => response.json())
  .then(data => data.data.available_balance);

export const fetchRate = apiKey =>
 fetch(`https://block.io/api/v2/get_current_price/?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => data.data);

export const fetchTickerRate = currency =>
 fetch(`https://api.coinmarketcap.com/v1/ticker/${currency}`)
  .then(response => response.json())
  .then(data => data[0]);

export const fetchSent = (address, apiKey) =>
 fetch(
  `https://block.io/api/v2/get_transactions/?api_key=${apiKey}&type=sent&addresses=${address}`
 )
  .then(response => response.json())
  .then(data => data.data.txs);

export const fetchReceived = (address, apiKey) =>
 fetch(
  `https://block.io/api/v2/get_transactions/?api_key=${apiKey}&type=received&addresses=${address}`
 )
  .then(response => response.json())
  .then(data => data.data.txs);

export const fetchExchange = apiKey =>
 fetch(`https://block.io/api/v2/get_current_price/?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => data.data.prices);

export const fetchDogeToBtc = () =>
 fetch(
  `https://block.io/api/v2/get_current_price/?api_key=b108-0d58-ccff-c468&price_base=BTC`
 )
  .then(response => response.json())
  .then(data => data.data.prices[0].price);

export const fetchBtcToUsd = () =>
 fetch(
  `https://block.io/api/v2/get_current_price/?api_key=98d2-7443-af3f-17e4&price_base=USD`
 )
  .then(response => response.json())
  .then(data => data.data.prices[0].price);

export const fetchMarket = () =>
 fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`).then(response =>
  response.json()
 );
