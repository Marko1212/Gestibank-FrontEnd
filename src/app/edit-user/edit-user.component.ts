import { Component, OnInit,  Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  child3Shown:boolean=true;
  id: any;
  
  constructor(private route: ActivatedRoute) { 
   
  }

  ngOnInit() {

  }

  update(){
  }

}
