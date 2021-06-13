import { hideUserInfo } from './hideUserInfo';
import { table, backgroundScreen } from '../variables/variables';
import { url } from '../api/api';

export function showUser(event) {
  const userId = event.currentTarget
    .getAttribute('id')
    .split('-')[1];

  fetch(`${url}/${userId}`)
    .then(response => response.json())
    .then(user => {
      const {
        street,
        suite,
        city,
        zipcode,
      } = user.address;
      const userInfo = document.createElement('div');
      const cancelButton = document.createElement('button');

      userInfo.classList.add('user-info');

      userInfo.innerHTML = `
          <h2 class="user-info__name">${user.name}</h2>
          <ul class="user-info__list">
            <li class="user-info__item">${street}</li>
            <li class="user-info__item">${suite}</li>
            <li class="user-info__item">${city}</li>
            <li class="user-info__item">${zipcode}</li>
          </ul>
        `;

      cancelButton.append(document.createTextNode('Cancel'));
      cancelButton.classList.add('user-info__cancel-btn');
      backgroundScreen.classList.add('show-background');
      cancelButton.addEventListener('click', hideUserInfo);
      userInfo.insertAdjacentElement('beforeEnd', cancelButton);
      table.insertAdjacentElement('beforeBegin', userInfo);
      setTimeout(() => userInfo.classList.add('show'), 0);
    });
};
