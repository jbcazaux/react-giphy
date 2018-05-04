import axios from "axios/index";
import apiKey from "./api-key";

let cancel = () => {};

export const fetchGifs = (query, limit) => {
  cancel('Canceling any on going request to giphy');
  if (!query) {
    return Promise.resolve([]);
  }
  return axios
    .get('http://api.giphy.com/v1/gifs/search', {
      cancelToken: new axios.CancelToken(c => cancel = c),
      params: {
        api_key: apiKey,
        limit: limit,
        q: query
      }
    })
    .then(response => response.data)
    .then(giphy => giphy.data)
    .catch(err => {
      if (axios.isCancel(err)) {
        console.log('request has been canceled', err);
        return Promise.resolve();
      } else {
        Promise.reject(err);
      }
    });
};
