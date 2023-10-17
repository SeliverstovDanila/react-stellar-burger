import API from './constants.js';


function getCheckResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    } else {
      return res.json();
    }
  }
  
  export default function getIngredients() {
    return fetch(`${API}/ingredients/`)
      .then(getCheckResponse)
  }