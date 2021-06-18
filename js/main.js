import {createObjects} from './data.js';
import{renderCard} from './popup.js';

const COUNT = 8 ;
const Objects = createObjects(COUNT);

renderCard(Objects[0]);
