export const fetch24h = currency =>
 fetch(`https://api.lionshare.capital/api/prices/?=day`)
  .then(response => response.json())
  .then(data => data.data);
