import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "./../user.service";

@Component({
  selector: "app-resetPassword",
  templateUrl: "./resetPassword.component.html",
  styleUrls: ["./resetPassword.component.css"],
})
export class ResetPasswordComponent implements OnInit {
  newPass: any;
  confirmPassword: any;
  message: any;
  messageWarning: any;
  token: string = "";

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.token = params["token"];
      console.log(this.token);
    });
  }
  ngOnInit() {
    this.message = null;
    this.messageWarning = null;
    this.confirmPassword = null;
    this.newPass = null;
  }

  resetPass(form) {
    let resetPassword = {
      newPassword: this.newPass,
      token: this.token,
    };
    this.userService.resetPass(resetPassword).subscribe((response) => {
      console.log(response);
      if (!response.includes("successfully reset your password")) {
        this.messageWarning = response;
      } else {
        this.message = response;
      }
      window.setTimeout(() => {
        this.message = null;
        this.messageWarning = null;
        form.reset();
        let link = ["/login"];
        this.router.navigate(link);
      }, 3000);
    });
  }
}
