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
}
