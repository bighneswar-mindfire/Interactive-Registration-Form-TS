import type { AppState } from '../types/types';
import { Form } from '../components/Form/Form';
import { Table } from '../components/Table/Table';

export const App = (state: AppState): HTMLElement => {
  const grid = document.createElement('div');
  grid.className = 'grid';

  const formSection = document.createElement('div');
  formSection.appendChild(Form(state));

  const tableSection = document.createElement('div');
  tableSection.appendChild(Table(state));

  grid.appendChild(formSection);
  grid.appendChild(tableSection);

  return grid;
};
