import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../security/auth.service';
import { ErrorHandlerService } from './../error-handler.service';
import { LogoutService } from './../../security/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.logoutService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => this.errorHandler.handle(error));
  }

}
