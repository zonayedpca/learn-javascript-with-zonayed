export default function getAllItems(state = [], action){
  switch (action.type) {
    case 'ITEMS':
      return action.payload.data;
      break;
    default:
      return state;
  }
  return count;
}
