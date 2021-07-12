const BASE_URL = 'https://23.javascript.pages.academy/keksobooking';
const formSubmit = document.querySelector('.ad-form');
const getData = (onSuccess, onError) => {
  fetch(
    `${BASE_URL}/data`)
    .then((response) => response.json())
    .then((cards) => onSuccess(cards))
    .catch(() => {
      onError();
    });
};

const sendData = (onSuccess, onError) => {
  formSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      BASE_URL,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onError();
        }
      })
      .catch(() => {
        onError();
      });
  });
};

export { getData, sendData };
