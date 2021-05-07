import { Component, OnInit } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from "../../services/auth.service";

import { User } from "../../models/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = {
    id_user: 0,
    username: "",
    password: "",
    fullname: ""
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.authService.profile().subscribe(
      (res: any) => {
        this.user = res;
      },
      (err: any) => console.log(err)
    );
  }

}
