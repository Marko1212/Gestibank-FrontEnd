import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService],
})
export class UserDetailComponent implements OnInit {
  utilisateur: User = null;
  userForm: FormGroup;
  id: number;
  private sub: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //écouteur sur l'URL
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.sub = this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
      ]),
    });

    //si le mode édition est activé

    if (this.id) {
      this.utilisateur = this.userService.findUserById(this.id);
      this.userForm.patchValue({
        username: this.utilisateur.username,
        address: this.utilisateur.address,
        email: this.utilisateur.email,
      });
    }
  }

  /**
   * Cette méthode effectue un save or update action selon l'id
   */
  onSubmit() {
    if (this.userForm.valid) {
      if (this.utilisateur == null) {
        //ajout
        this.utilisateur = new User(
          null,
          this.userForm.controls['username'].value,
          this.userForm.controls['address'].value,
          this.userForm.controls['email'].value
        );
        this.userService.saveUser(this.utilisateur);
      } else this.onUpdate();
    }
    this.userForm.reset();
    this.router.navigate(['/user']);
  }

  onUpdate() {
    this.utilisateur = new User(
      this.utilisateur.id,
      this.userForm.controls['username'].value,
      this.userForm.controls['address'].value,
      this.userForm.controls['email'].value
    );
    this.userService.updateUser(this.utilisateur);
  }

  redirectUserPage() {
    this.router.navigate(['/user']);
  }
}
