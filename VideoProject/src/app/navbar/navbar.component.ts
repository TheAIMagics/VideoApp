import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router'
import { Observable } from '../../../node_modules/rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title :'VideoApp';

  user : Observable<firebase.User>;

  constructor( private authService: AuthenticationService , private router: Router ) { }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  logOut(){
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

}
