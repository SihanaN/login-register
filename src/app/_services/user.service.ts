import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api_path = "https://reqres.in/api"

  requestHeader = new HttpHeaders(
    {"No-Auth": "true"}
  )

  constructor(private httpClient: HttpClient) { }

  login(loginData:any) {
    return this.httpClient.post(this.api_path + "/login", loginData, {headers: this.requestHeader})

  }

  // register(){
  //   return this.httpclient.post<any>(this.api_path + "/register", this.registerForm.value)
  // }

  registerUser(data:any) {
    return this.httpClient.post(this.api_path + "/register", data);

  }

  registerUserList(data:any) {
    return this.httpClient.post(this.api_path + "/users?page=2", data);
  }

  getUsersList() {
    return this.httpClient.get(this.api_path + "/users?page=2");  
  }

  getUsers(page: number){
    return this.httpClient.get(this.api_path + '/users?page=' + page);
  }
}
