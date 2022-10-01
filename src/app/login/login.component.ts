import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../_services/auth-user.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private authUserService: AuthUserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {

    this.userService.login(loginForm.value).subscribe({
      next: (response: any) => {
      if (response.token) {
        this.authUserService.setToken(response.token);
        this.router.navigate(['/dashboard'])};
      },
        error: (error) =>
        console.log(error)
    });
    
  }
  
}
