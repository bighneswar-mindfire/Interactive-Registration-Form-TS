
import type { AppState } from '../types';
import { Form } from './Form';
import { Table } from './Table';

export const App = (state: AppState): string => {
    return `
        <div class="grid">
            ${Form(state)}
            ${Table(state)}
        </div>
    `;
};