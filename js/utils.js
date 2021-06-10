
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

export { getRandomNumber,
  getRandomFractionalNumber,
  getRandomArrayElement,
  getRandomArray
};

