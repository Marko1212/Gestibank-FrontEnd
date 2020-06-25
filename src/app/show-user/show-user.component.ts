import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  user: User;
  listOperation: any[];
  constructor(private route: ActivatedRoute) { 
   
  }

  ngOnInit() {
    
   
    
  }

}
