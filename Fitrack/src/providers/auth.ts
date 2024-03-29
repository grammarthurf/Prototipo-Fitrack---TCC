import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthProvider {

  constructor(
    private afAuth: AngularFireAuth
  ) {
  }

  //Create user
  register = (data) => this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password);

  //Login
  login = (data) => this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);

  logout() {
    return this.afAuth.auth.signOut();
  }
}