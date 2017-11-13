import { Injectable } from '@angular/core';
import { FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase } from "angularfire2/database";
import { User } from 'firebase/app';
import { Profile } from "../models/profile/profile.interface";

@Injectable()
export class DataService {
  profileObject: FirebaseObjectObservable<Profile>
  constructor(private database: AngularFireDatabase ) {
  }
  async saveProfile(user: User, profile: Profile) {
    // this.profileObject= this.database.object(`/pofiles/${user.uid}`);
    // try {
    //   this.profileObject.set(profile);
    //   return true
    // } catch (e) {
    //   console.error(e);
    //   return false;
    // }
  }

}
