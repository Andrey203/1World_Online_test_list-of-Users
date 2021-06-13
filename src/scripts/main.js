import { url } from './api/api';
import { render } from './functions/render';

(() => {
  fetch(url)
    .then(users => users.json())
    .then(usersList => render(usersList))
    .catch();
})();
