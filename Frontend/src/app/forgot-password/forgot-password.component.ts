import { Component } from '@angular/core';
import { User } from '../user';
import { ForgotPasswordService } from '../forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  user: User = new User();

  constructor(private forgotPasswordService: ForgotPasswordService, private router:Router) { }

  forgotPassword() {
    if (this.user.email.trim() !== '') {
      console.log("Welcome!");
      console.log(this.user);
      this.forgotPasswordService.forgotPassword(this.user.email).subscribe(
        data => {
          alert("Please Check your email Box");
          this.router.navigate(['/']);
        },
        error => {
          console.error("An error occurred:", error);
          alert("An error occurred. Please try again later.");
        }
      );
    } else {
      console.log("Fields are empty !!");
    }
  }

}
