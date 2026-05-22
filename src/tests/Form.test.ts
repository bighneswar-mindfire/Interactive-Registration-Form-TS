import { describe, it, expect } from 'vitest';
import { Form } from '../components/Form/Form';
import { type AppState } from '../types/types';

describe('Component: Form', () => {
  const initialState: AppState = {
    users: [],
    errors: {},
    editingId: null,
    formData: { name: '', mail: '', phone: '', gender: '' },
  };

  it('should render submit button and registration title by default', () => {
    const html = Form(initialState);
    expect(html).toContain('<h2>Registration Form</h2>');
    expect(html).toContain('value="Submit"');
  });

  it('should show error messages when validation fails', () => {
    const errorState = { ...initialState, errors: { name: 'Name missing' } };
    const html = Form(errorState);
    expect(html).toContain('validation ">Name missing');
  });

  it('should show Update button and populate values when editingId is present', () => {
    const editState: AppState = {
      ...initialState,
      editingId: '123',
      formData: {
        name: 'Bighneswar',
        mail: 'vigbi@mail.com',
        phone: '1234567890',
        gender: 'Male',
      },
    };
    const html = Form(editState);
    expect(html).toContain('<h2>Registration Form</h2>');
    expect(html).toContain('value="Update"');
    expect(html).toContain('value="Bighneswar"');
  });
});
