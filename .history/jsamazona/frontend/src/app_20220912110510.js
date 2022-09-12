import HomeScreen from './screens/HomeScreen';

const router = () => {
    const main = document.getElementById('main-container');
    main.innerHTML = HomeScreen.render();
}
window.addEventListener('load', router);