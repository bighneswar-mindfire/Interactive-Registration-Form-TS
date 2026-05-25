import type { User } from '../types/types';

const STORAGE_KEY = 'user_registry_data';

export const storage = {
  // saving the curr user list in local storage
  saveUsers: (users: User[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  },
  // loading data from local storage
  loadUsers: (): User[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    try {
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  },
};
