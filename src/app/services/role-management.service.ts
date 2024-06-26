import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {
  private localStorageKey = 'users';

  constructor() {
    // Initialize local storage with mock data if it's empty
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([
        { id: 1, name: 'shanita', email:'shanita@gmail.com', role: 'User' },
    
        // Add more users as needed
      ]));
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  getRoles() {
    return ['Admin', 'User'];
  }

  assignRole(userId: number, role: string) {
    const users = this.getUsers();
    const user = users.find((user: { id: number; }) => user.id === userId);
    if (user) {
      user.role = role;
      localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    }
  }
}