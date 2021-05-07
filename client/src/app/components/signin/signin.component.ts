import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

import { User } from "../../models/User";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user: User = {
    id_user: 0,
    username: "",
    password: ""
  };

  error: boolean = false;
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(this.user).subscribe(
      (res: any) => {
        this.error = false;
        this.errorMessage = "";
        localStorage.setItem("token", res.data.signIn);
        localStorage.setItem("username", this.user.username || "");
        this.router.navigate(["/games"]);
      },
      (err: any) => {
        this.error = true;
        this.errorMessage = err.message;
      }
    );
  }

}
