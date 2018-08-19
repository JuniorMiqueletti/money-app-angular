import { Injectable } from '@angular/core';

import { MoneyHttp } from './money-http';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class LogoutService {

  tokensRevokeURL: string;

  constructor(
    private http: MoneyHttp,
    private authService: AuthService
  ) {
    this.tokensRevokeURL = `${environment.apiUrl}/tokens/revoke`;
  }

  logout() {
    return this.http.delete(this.tokensRevokeURL, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.authService.clearAcessToken();
      });
  }

}
