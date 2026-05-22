import type { AppState } from '../types/types';
import { Form } from '../components/Form/Form';
import { Table } from '../components/Table/Table';

export const App = (state: AppState): string => {
  return `
        <div class="grid">
            ${Form(state)}
            ${Table(state)}
        </div>
    `;
};
