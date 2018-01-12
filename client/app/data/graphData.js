export const fetch1h = () =>
 fetch(`https://api.lionshare.capital/api/prices/?=hour`)
  .then(response => response.json())
  .then(data => data.data);

export const fetch24h = () =>
 fetch(`https://api.lionshare.capital/api/prices/?=day`)
  .then(response => response.json())
  .then(data => data.data);

export const fetch7d = () =>
 fetch(`https://api.lionshare.capital/api/prices/?=week`)
  .then(response => response.json())
  .then(data => data.data);

export const fetch1m = () =>
 fetch(`https://api.lionshare.capital/api/prices/?=month`)
  .then(response => response.json())
  .then(data => data.data);
