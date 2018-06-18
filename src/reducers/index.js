import {combineReducers} from 'redux';
import getAllTopics from './getAllTopics.js';
import getAllItems from './getAllItems.js';
import getOneItem from './getOneItem.js';
const allReducers= combineReducers({
  topics: getAllTopics,
  items: getAllItems,
  item: getOneItem
});
export default allReducers;
