import { getMarkers } from './map.js';
import { showAlert } from './utils.js';
import { successSend, openError } from './form.js';
const getData = () => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((cards) => getMarkers(cards))

    .catch(() => {
      showAlert('При загрузке данных с сервера произошла ошибка . Попробуйте ещё раз');
    });
};

const sendData = () => {
  const formSubmit = document.querySelector('.ad-form');
  formSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      ' https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          successSend();
        } else {
          openError();
        }
      })
      .catch(() => {
        openError();
      });
  });
};

export {getData, sendData};

