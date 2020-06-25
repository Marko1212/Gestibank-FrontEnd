import {  CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
@Injectable()
export class AuthAdmin implements CanActivate {

    constructor(public router: Router, private auth: AuthServiceService) {

    }
    canActivate() {
        if (this.auth.isAuthenticated() === 'admin') {
            return true;
        } else {
            console.log('false');
            this.router.navigate(['/notAuthorizedPage']);
            return false;
        }
    }

}
