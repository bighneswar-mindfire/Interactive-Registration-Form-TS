import './styles/main.css';
import { state } from './app/app.state';
import { App } from './app/App';
import { validateUser, createRecord } from './app/app.logic';

const root = document.getElementById('app')!;

const renderApp = () => {
    root.innerHTML = App(state);
};


root.addEventListener('submit', (e) => {
    const target = e.target as HTMLFormElement;
    if (target.id === 'regForm') {
        e.preventDefault();

        const formDataRaw = new FormData(target);
        const data = {
            name: formDataRaw.get('name') as string,
            mail: formDataRaw.get('mail') as string,
            phone: formDataRaw.get('phone') as string,
            gender: formDataRaw.get('gender') as string,
        };

        //savimg user data 
        state.formData = data;

        const errors = validateUser(data);

        if (Object.keys(errors).length === 0) {
            if (state.editingId) {
                state.users = state.users.map(u => u.id === state.editingId ? { ...u, ...data } : u);
                state.editingId = null;
            } else {
                state.users.push(createRecord(data));
            }
            
            state.formData = { name: '', mail: '', phone: '', gender: '' };
            state.errors = {}; 
        } else {
    
            state.errors = errors;
        }

        renderApp();
    }
});

root.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    
    // ID of the row clicked
    const rowId = target.closest('tr')?.getAttribute('data-id');
    if (!rowId) return;

    if (target.classList.contains('edit-btn')) {
        const userToEdit = state.users.find(u => u.id === rowId);
        if (userToEdit) {
            state.editingId = rowId;
            state.formData = { ...userToEdit }; 
            state.errors = {};
            renderApp(); 
        }
    }
    
    if (target.classList.contains('delete-btn')) {
        if (confirm("Delete this record?")) {
            state.users = state.users.filter(u => u.id !== rowId);
            renderApp();
        }
    }
    
});



renderApp();


