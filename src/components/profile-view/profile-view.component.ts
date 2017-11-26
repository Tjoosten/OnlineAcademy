import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { AuthService } from '../../providers/auth.service';
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profile.interface";

@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {
userProfile: Profile
  ngOnInit(): void {
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      //userProfile : this.data.getProfile(user);
    })
  }
  constructor(private data: DataService, private auth: AuthService) {
  }

}
