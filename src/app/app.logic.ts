import { type User } from '../types/types';

export const validateUser = (data: Partial<User>) => {
  const errors: Record<string, string> = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^\d{10}$/;

  // name validation
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Full name is empty';
  }

  // mail validation
  if (!data.mail || data.mail.trim() === '') {
    errors.mail = 'Email address is empty';
  } else if (!emailRegex.test(data.mail)) {
    errors.mail = 'Invalid email format';
  }

  // phone validation
  if (!data.phone || data.phone.trim() === '') {
    errors.phone = 'Phone number is empty';
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = 'Phone number must be 10 digits';
  }

  // gender validation
  if (!data.gender) {
    errors.gender = 'Gender is empty';
  }

  return errors;
};

export const createRecord = (data: Omit<User, 'id'>) => ({
  ...data,
  id: Date.now().toString(),
});
