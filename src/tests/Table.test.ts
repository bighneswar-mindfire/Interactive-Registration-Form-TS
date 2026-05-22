import { describe, it, expect } from 'vitest';
import { Table } from '../components/Table/Table';
import { type AppState } from '../types/types';

describe('Component: Table', () => {
  it('should render user rows correctly', () => {
    const state: AppState = {
      users: [
        {
          id: '123',
          name: 'vigbi',
          mail: 'vigbi@mail.com',
          phone: '1234567890',
          gender: 'Male',
        },
      ],
      errors: {},
      editingId: null,
      formData: { name: '', mail: '', phone: '', gender: '' },
    };
    const html = Table(state);
    expect(html).toContain('vigbi');
    expect(html).toContain('data-id="123"');
  });

  it('should apply editing-row class to the correct row', () => {
    const state: AppState = {
      users: [
        {
          id: '123',
          name: 'vigbi',
          mail: 'vigbi@mail.com',
          phone: '1234567890',
          gender: 'Male',
        },
      ],
      errors: {},
      editingId: '123',
      formData: { name: '', mail: '', phone: '', gender: '' },
    };
    const html = Table(state);
    expect(html).toContain('class="editing-row"');
  });
});
