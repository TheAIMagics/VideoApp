import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase  from 'firebase/app';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()

export class AuthenticationGuard implements CanActivate{

    user : Observable<firebase.User>

    constructor( private afAuth : AngularFireAuth , private router: Router){
        this.user = afAuth.authState;
    }

    canActivate( route : ActivatedRouteSnapshot,state : RouterStateSnapshot){
        return this.user.map((auth)=>{
            if(!auth){
                this.router.navigateByUrl('/login');
                return false;
            }
            return true;
        }).take(1);
    }
    
}
