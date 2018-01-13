const API_KEY = '5b671e5fdb9942d6a99003df5da62f89';

export const topNews = () =>
 fetch(
  `https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=${API_KEY}`
 )
  .then(response => response.json())
  .then(data => data.articles);
