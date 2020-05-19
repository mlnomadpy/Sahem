import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../Models/storage';
import { Loc8rDataService } from '../loc8r-data.service';
import { AuthResponse } from '../Models/authresponse';
import { User } from '../Models/User/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private loc8rDataService: Loc8rDataService) { }

  public getToken(): string {
    console.log(this.storage.getItem('loc8r-token'));
    return this.storage.getItem('loc8r-token');
  }

  public saveToken(token: string): void {
    this.storage.setItem('loc8r-token', token);
  }

  public login(user: User): Promise<any> {
    return this.loc8rDataService.login(user)
      .then((authResp: AuthResponse) => {
        this.saveToken(authResp.token);
        window.location.href = '';
      });
  }

  public register(user: User): Promise<any> {
    return this.loc8rDataService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout(): void {
    this.storage.removeItem('loc8r-token');
    // window.location.reload();
    // window.location.href = '/';


  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { _id, email } = JSON.parse(atob(token.split('.')[1]));
      return { _id, email } as User;
    }
  }

}