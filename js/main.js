const getRandomNumber = (min, max) => {
  if (max > min && max >=0 && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1)) + min;
  // взято с источника http://surl.li/vdrf
  }
  return 'Задайте верные параметры функции.Число "от" должно быть меньше числа "до" и оба больше нуля';
};
getRandomNumber (5,12);

const getRandomFractionalNumber = (min, max ,numberAfterDecimalPoint = 2) => {
  if (max > min && max >=0 && min >=0) {
    const intermediateValue = Math.random() * (max - min+1) + min;
    return Number(intermediateValue.toFixed(numberAfterDecimalPoint));
  }
  return 'Задайте верные параметры функции.Число "от" должно быть меньше числа "до" и оба больше нуля';
};
getRandomFractionalNumber (2, 6, 4);
