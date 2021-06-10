/* eslint-disable id-length */

import {createObject} from './utils/data.js';

const COUNT = 8;

// функция по созданию массива данных


const createData = (n) => {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(createObject(i));
  }
  return newArray;
};

createData(COUNT);
