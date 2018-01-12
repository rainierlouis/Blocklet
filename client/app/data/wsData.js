const ws = new WebSocket('wss://api.poloniex.com/', ['BTC_USD']);

ws.onopen = () => {};

ws.onmessage = e => {
 console.log('NEW EVENT=====', e);
};
