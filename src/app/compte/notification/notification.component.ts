import { Component, OnInit } from "@angular/core";
import { ClientService } from "./../../client/client.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent implements OnInit {
  notifications: any;
  username: any;
  clientId: any;

  constructor(private clientService: ClientService) {
    this.username = localStorage.getItem("username");
  }
  ngOnInit() {
    this.clientId = localStorage.getItem("idUserAccount");
    this.clientService.getNotifications(this.clientId).subscribe((notif) => {
      this.notifications = notif;
      console.log(this.notifications);
    });
  }
}
