import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: any = FormGroup;
  isRegistered: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.register = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [''],
    });
  }

  onSuccessfulRegistration() {
    Swal.fire({
      title: 'Congratulations',
      text: 'You have been registered successfully!',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.value) {
        // TODO Redirect to login form
        this.router.navigate(['/login']);
      }
    });
  }

  registerSubmit(data: any) {    
    let dataToPass = {
      email: data.email,
      password: data.password,
    };

    this.userService.registerUser(dataToPass).subscribe({
      next: (response: any) => {
        this.onSuccessfulRegistration();
      },
      error: (error) => console.log(error),
    });
  }
}
