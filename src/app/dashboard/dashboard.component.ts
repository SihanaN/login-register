import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  usersList: any = [];
  p: number = 1;
  total: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    // this.userService.getUsersList().subscribe((response: any) => {
    //   this.usersList = response.data;
    //   this.total = response.total;
    //   console.log(this.usersList);
    // });
  }

  getUsers(){
    this.userService.getUsers(this.p)
      .subscribe((response: any) => {
        this.usersList = response.data;
        this.total = response.total;
      });
}

  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsers();
  }
}


