import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from '../_services/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authUserService: AuthUserService,
    private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn() {
    return this.authUserService.isLoggedIn();
  }

  logout() {
    this.authUserService.clear();
    this.router.navigate(['/']);
  }
}
