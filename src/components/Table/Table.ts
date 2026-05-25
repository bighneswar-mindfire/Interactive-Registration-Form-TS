import type { AppState } from '../../types/types';

export const Table = (state: AppState): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'table-container';

  const h2 = document.createElement('h2');
  h2.textContent = 'Registered User Details';
  container.appendChild(h2);

  const wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';

  const table = document.createElement('table');
  table.id = 'details';

  // header
  const thead = document.createElement('tr');
  thead.id = 'table-heading';
  ['Name', 'Email', 'Phone no.', 'Gender', 'Action'].forEach((text) => {
    const th = document.createElement('th');
    th.textContent = text;
    thead.appendChild(th);
  });
  table.appendChild(thead);

  // rows
  state.users.forEach((user) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-id', user.id);
    if (user.id === state.editingId) tr.className = 'editing-row';

    [user.name, user.mail, user.phone, user.gender].forEach((text) => {
      const td = document.createElement('td');
      td.textContent = text;
      tr.appendChild(td);
    });

    const actionTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);
    tr.appendChild(actionTd);

    table.appendChild(tr);
  });

  wrapper.appendChild(table);
  container.appendChild(wrapper);
  return container;
};
