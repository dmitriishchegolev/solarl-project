import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public isLoggedIn(): boolean {
    return false;
  }

  public isAdmin(): boolean {
    return false;
  }

}
