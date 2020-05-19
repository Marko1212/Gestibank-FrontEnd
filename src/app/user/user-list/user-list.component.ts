import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService],
})
export class UserListComponent implements OnInit {
  utilisateurs: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.utilisateurs = this.userService.findAll();
  }

  redirectNewUserPage() {
    this.router.navigate(['/user/create']);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user);
  }
  editUser(user: User) {
    if (user) {
      this.router.navigate(['/user/edit', user.id]);
    }
  }
}
