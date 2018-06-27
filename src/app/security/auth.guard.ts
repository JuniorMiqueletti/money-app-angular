import { UnauthorizedPageComponent } from './../core/unauthorized-page/unauthorized-page.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const roles = next.data.roles;

    if (this.authService.isAcessTokenInvalid()) {

      console.log('Navigation with invalid token. Getting new token...');
      return this.authService.getNewAccessToken()
        .then(() => {
          if (this.authService.isAcessTokenInvalid()) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        });

    } else if (roles && !this.authService.hasAnyPermission(roles)) {
      this.router.navigate(['/unauthorized-page']);
      return false;
    }

    return true;
  }

}
