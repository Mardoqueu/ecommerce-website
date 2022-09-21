import { getCartItems } from './localStorage';
/* eslint-disable import/prefer-default-export */
export const parseRequestUrl = () => {
  const url = document.location.hash.toLocaleLowerCase();
  const request = url.split('/');

  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};

export const rerender = async (component) => {
  document.getElementById(
    'main-container'
  ).innerHTML = await component.render();
  await component.after_render();
};

export const showLoading = () => {
  document.getElementById('loading-overlay').classList.add('active');
};

export const hideLoading = () => {
  document.getElementById('loading-overlay').classList.remove('active');
};
export const showMessage = (message, callback) => {
  document.getElementById('message-overlay').innerHTML = `
    <div>
      <div id="message-overlay-content">${message}</div>
      <button id="message-overlay-close">OK</button>
    </div>
  `;
  document.getElementById('message-overlay').classList.add('active');
  document.getElementById('message-overlay').addEventListener('click', () =>{
  document.getElementById('message-overlay').classList.remove('active');
  if(callback){
    callback();
  };
  });
};
export const redirectUser = () => {
  console.log(getCartItems().length);
  if (getCartItems().length !== 0) {
    document.location.hash = '/shipping';
  } else {
    document.location.hash = '/';
  }
};