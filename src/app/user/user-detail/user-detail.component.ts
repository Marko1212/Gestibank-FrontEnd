import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService],
})
export class UserDetailComponent implements OnInit {
  utilisateur: User;
  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
      ]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.utilisateur = new User(
        null,
        this.userForm.controls['username'].value,
        this.userForm.controls['address'].value,
        this.userForm.controls['email'].value
      );
      this.userService.saveUser(this.utilisateur);
    }
    this.userForm.reset();
    this.router.navigate(['/user']);
  }
}
