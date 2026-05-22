import { type User } from '../types/types';

export const validateUser = (data: Partial<User>) => {
  const errors: Record<string, string> = {};

  // Email Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Phone Regex
  const phoneRegex = /^\d{10}$/;

  // Name Validation
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Full name is empty';
  }

  // Email Validation
  if (!data.mail || data.mail.trim() === '') {
    errors.mail = 'Email address is empty';
  } else if (!emailRegex.test(data.mail)) {
    errors.mail = 'Invalid email format';
  }

  // Phone Validation
  if (!data.phone || data.phone.trim() === '') {
    errors.phone = 'Phone number is empty';
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = 'Phone number must be 10 digits';
  }

  // Gender Validation
  if (!data.gender) {
    errors.gender = 'Gender is empty';
  }

  return errors;
};

export const createRecord = (data: Omit<User, 'id'>) => ({
  ...data,
  id: Date.now().toString(),
});
