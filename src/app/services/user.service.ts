import { User } from '../models/user';
import { USERS } from '../data/usersData';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  /**
   * cette fonction permet de récupérer la liste des utilisateurs
   */

  findAll(): User[] {
    return USERS;
  }
  /**
   * fonction d'ajout d'un utilisateur
   * @param user
   */
  saveUser(user: User): void {
    if (user.id == null) {
      user.id = USERS.length + 1;
      USERS.push(user);
    }
  }

  /**
   * fonction de suppression d'un utilisateur
   * @param user
   */

  deleteUser(user: User): void {
    console.log('service suppression ');
    let idx;
    idx = USERS.indexOf(user);
    console.log('position user = ' + idx);
    if (idx >= 0) {
      USERS.splice(idx, 1);
    }
    this.findAll();
  }

  /**
   * fonction de mise à jour d'un utilisateur
   * @param user
   */
  updateUser(user: User): void {
    var OldUser = this.findUserById(user.id);
    let idx;
    idx = USERS.indexOf(OldUser);
    if (idx >= 0) {
      USERS.splice(idx, 1, user);
    }
  }

  findUserById(id: number): User {
    var currentUser: User;
    for (var i = 0; i < USERS.length; i++) {
      currentUser = USERS[i];
      if (currentUser.id == id) return currentUser;
    }
    return undefined;
  }
}
