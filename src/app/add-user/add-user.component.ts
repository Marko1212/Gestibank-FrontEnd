import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterEvent, Routes } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  nextId;
  message: String;
  constructor( private route: Router) { 
   
  }

  ngOnInit() {
  }

  addUser() {
   
   
     
 
  }


}
