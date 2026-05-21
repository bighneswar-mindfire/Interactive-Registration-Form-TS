import type { AppState } from '../../types/types';

export const Table = (state: AppState): string => {

    const rows = state.users.map(user => {
        const isEditing = user.id === state.editingId ? "editing-row" : "";

        return `
            <tr data-id="${user.id}" class="${isEditing}">
                <td>${user.name}</td>
                <td>${user.mail}</td>
                <td>${user.phone}</td>
                <td>${user.gender}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            </tr>
        `;
    }).join('');


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