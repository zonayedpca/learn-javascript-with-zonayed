export default function getAllTopics(state = [], action){
  switch (action.type) {
    case 'TOPICS':
      return action.payload.data;
      break;
    default:
      return state;
  }
  return count;
}
