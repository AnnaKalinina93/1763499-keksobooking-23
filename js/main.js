const ReturnsRandomNumber = function (min, max) {
  if (max > min && max >=0 && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1)) + min;
  // взято с источника http://surl.li/vdrf
  }
  return 'Задайте верные параметры функции.Число "от" должно быть меньше числа "до" и оба больше нуля';
};
ReturnsRandomNumber (5,12);

const ReturnsRandomFractionalNumber = function (min, max ,numberAfterDecimalPoint) {
  if (max > min && max >=0 && min >=0) {
    const Number = Math.random() * (max - min+1) + min;
    return Number.toFixed(numberAfterDecimalPoint);
  }
  return 'Задайте верные параметры функции.Число "от" должно быть меньше числа "до" и оба больше нуля';
};
ReturnsRandomFractionalNumber (2, 6, 4);
