import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { parseRequestUrl } from './utils.js';

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
}

const router = () => {
  const request = parseRequestUrl();
  const parseUrl = request.resource ? `/${request.resource}`;
  const main = document.getElementById('main-container');
  main.innerHTML = HomeScreen.render();
};
window.addEventListener('load', router);