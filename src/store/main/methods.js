const API = {
  getImageUrl: 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA',
};

export function fetchImage() {
  return fetch(API.getImageUrl).then((response) => (response.status === 200 ? response.json() : {}));
}
