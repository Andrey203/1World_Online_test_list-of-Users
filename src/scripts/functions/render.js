import { tableBody, uName, username, email, website }
  from '../variables/variables';
import { showUser } from './showUser';
import { getSort } from './getSort';

export function render(list) {
  const allRows = document.querySelectorAll('.users-table__row');

  allRows.forEach(el => (el.outerHTML = ''));

  list.forEach(user => {
    const row = document.createElement('tr');

    row.classList.add('users-table__row');
    row.setAttribute('id', `user-${user.id}`);

    const userRow = `
      <td class="users-table__cell">${user.name}</td>
      <td class="users-table__cell">${user.username}</td>
      <td class="users-table__cell">${user.email}</td>
      <td class="users-table__cell">${user.website}</td>
    `;

    row.innerHTML = userRow;
    row.addEventListener('click', showUser);
    tableBody.insertAdjacentElement('beforeEnd', row);
  });

  uName.addEventListener('click', () => getSort(list, 'name'));
  username.addEventListener('click', () => getSort(list, 'username'));
  email.addEventListener('click', () => getSort(list, 'email'));
  website.addEventListener('click', () => getSort(list, 'website'));
};
