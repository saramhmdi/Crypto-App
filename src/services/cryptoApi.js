const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-ZAAj6N7jdeg2a5KLjXsWfLho";
const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=15&page=${page}&xx_cg_demo_api_key=${API_KEY}`;

const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&xx_cg_demo_api_key=${API_KEY}`;

const marketChart = (coinId) =>
  `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=7`;
export { getCoinList, searchCoin, marketChart };
