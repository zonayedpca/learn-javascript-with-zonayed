import axios from 'axios';

export function grabAllTopics() {
  const request = axios.get('https://raw.githubusercontent.com/zonayedpca/zonayedpca.github.io/master/blog/js/topics.json');

  return {
    type: 'TOPICS',
    payload: request
  }
}


export function grabAllItems(id) {
  const request = axios.get(`https://raw.githubusercontent.com/zonayedpca/zonayedpca.github.io/master/blog/js/${id}/index.json`);

  return {
    type: 'ITEMS',
    payload: request
  }
}

export function grabOneItem(pid, id) {
  const request = axios.get(`https://raw.githubusercontent.com/zonayedpca/zonayedpca.github.io/master/blog/js/${pid}/${id}.json`);

  return {
    type: 'ITEM',
    payload: request
  }
}
