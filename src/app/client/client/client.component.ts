import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../login/login.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.css"],
})
export class ClientComponent implements OnInit {
  //constructor() { }

  constructor(private login: LoginService) {}

  ngOnInit() {}
}
