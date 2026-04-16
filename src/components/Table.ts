import type { AppState } from '../types';

export const Table = (state: AppState): string => {

    const rows = state.users.map(user => `
        <tr data-id="${user.id}">
            <td>${user.name}</td>
            <td>${user.mail}</td>
            <td>${user.phone}</td>
            <td>${user.gender}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        </tr>
    `).join('');

    return `
        <h2>Registered User Details</h2>
        <table id="details">
            <tr id="table-heading">
                <th>Name</th>
                <th>Email</th>
                <th>Phone no.</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
            ${rows}
        </table>
    `;
};