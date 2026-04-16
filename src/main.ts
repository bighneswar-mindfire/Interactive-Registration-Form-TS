import { state } from './app.state';
import { App } from './components/App';
import { validateUser, createRecord } from './app.logic';

const root = document.getElementById('app')!;

const renderApp = () => {
    root.innerHTML = App(state);
};

root.addEventListener('submit', (e) => {
    const target = e.target as HTMLFormElement;
    if (target.id === 'regForm') {
        e.preventDefault();

        const formData = new FormData(target);
        const data = {
            name: formData.get('name') as string,
            mail: formData.get('mail') as string,
            phone: formData.get('phone') as string,
            gender: formData.get('gender') as string,
        };

        // Check for validations
        const errors = validateUser(data);

        if (Object.keys(errors).length === 0) {
            const newUser = createRecord(data);
            state.users.push(newUser);
            state.errors = {}; 
        } else {
            state.errors = errors;
        }

        renderApp();
    }
});


renderApp();

