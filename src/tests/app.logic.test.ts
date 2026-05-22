import { describe, it, expect } from 'vitest';
import { validateUser, createRecord } from '../app/app.logic';

describe('Logic: validateUser', () => {
  it('should return errors for empty fields', () => {
    const errors = validateUser({ name: '', mail: '', phone: '', gender: '' });
    expect(errors.name).toBe('Full name is empty');
    expect(errors.gender).toBe('Gender is empty');
  });

  it('should catch invalid email formats', () => {
    const errors = validateUser({ mail: 'invalid-email' });
    expect(errors.mail).toBe('Invalid email format');
  });

  it('should catch phone numbers not equal to 10 digits', () => {
    const errors = validateUser({ phone: '12345' });
    expect(errors.phone).toBe('Phone number must be 10 digits');
  });

  it('should return an empty object for valid data', () => {
    const validData = {
      name: 'Bighneswar Bishoyi',
      mail: 'vigbi@abc.com',
      phone: '1234567890',
      gender: 'Male',
    };
    const errors = validateUser(validData);
    expect(Object.keys(errors).length).toBe(0);
  });
});

describe('Logic: createRecord', () => {
  it('should append a timestamp-based ID', () => {
    const data = {
      name: 'vigbi',
      mail: 'vigbi@mail.com',
      phone: '1234567890',
      gender: 'Other',
    };
    const record = createRecord(data);
    expect(record.id).toBeDefined();
    expect(record.name).toBe('vigbi');
    expect(typeof record.id).toBe('string');
  });
});
