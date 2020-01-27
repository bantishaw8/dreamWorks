import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';

@Injectable({ providedIn: 'root' })
export class RoutingInterceptior implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthServiceService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        console.log("came here..");
        if (currentUser) {
            console.log("inside..");
            return true;
        }

        this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}