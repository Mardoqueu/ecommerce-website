import HomeScreen from './srceens/HomeScreen.js';

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
}

const router = () => {
  const main = document.getElementById('main-container');
  main.innerHTML = HomeScreen.render();
};
window.addEventListener('load', router);