export default function getOneItem(state = [], action){
  switch (action.type) {
    case 'ITEM':
      return action.payload.data;
      break;
    default:
      return state;
  }
  return count;
}
