import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import * as firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user : Observable<firebase.User>;

  constructor( private afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  login( user : User){
    return this.afAuth.auth.signInWithEmailAndPassword( user.email,user.password);
  }
  
  logout(){
    return this.afAuth.auth.signOut();
  }
}
