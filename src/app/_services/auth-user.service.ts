import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }


 getToken(){
  return localStorage.getItem('token');

  }

  clear() {
    localStorage.clear();
  }

 isLoggedIn() {
    return this.getToken();
  
  }
}



