import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {
  userList: User[];
  message;
  child1Shown: boolean = true;
  child2Shown: boolean = false;
  child3Shown: boolean = true;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }
  msg(e) {

    this.message = e;
    window.setTimeout(() => {
      this.message = null;

    }, 3000);

  }
  mostra(e) {

    this.child3Shown = !this.child3Shown;
  }

}
