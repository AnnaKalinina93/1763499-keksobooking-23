
const getRandomNumber = (min, max) => {
  if (max > min && max >= 0 && min >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // взято с источника http://surl.li/vdrf
  }
  return 'Задайте верные параметры функции.Число "от" должно быть меньше числа "до" и оба больше нуля';
};

const getRandomFractionalNumber = (min, max, numberAfterDecimalPoint = 5) => {
  if (max > min && max >= 0 && min >= 0) {
    const intermediateValue = Math.random() * (max - min + 1) + min;
    return Number(intermediateValue.toFixed(numberAfterDecimalPoint));
  }
  return 'Задайте верные параметры функции.Число "от" должно быть меньше числа "до" и оба больше нуля';
};

// функция генерирующая случайный эллемент массива

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

// функция генерирующая случайный массив

const getRandomArray = (array) => array.filter(() => getRandomNumber(0, 1));

const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomNumber,
  getRandomFractionalNumber,
  getRandomArrayElement,
  getRandomArray,
  showAlert
};

