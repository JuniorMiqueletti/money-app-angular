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

    if (roles && !this.authService.hasAnyPermission(roles)) {
      this.router.navigate(['/unauthorized-page']);
      return false;
    }

    return true;
  }

}
