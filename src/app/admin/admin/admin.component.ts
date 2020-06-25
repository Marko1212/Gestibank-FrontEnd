import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../login/login.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  //user: any;
  constructor(private login: LoginService) {}

  ngOnInit() {
    //this.user= JSON.parse(localStorage.user);
  }
}
