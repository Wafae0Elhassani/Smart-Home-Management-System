import { Component } from '@angular/core';
import { User } from '../../user';
import { LoginUserService } from '../../login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: User = new User();

  constructor(private loginUserService: LoginUserService, private router: Router) { }

  hide = true;
  credentials = {
    email: '',
    password: ''
  }

  onSubmit() {
    if ((this.user.username != '' && this.user.password != '') && (this.credentials.email != null && this.credentials.password != null)) {
      console.log("Welcome!");
      console.log(this.user);
      this.loginUserService.loginUser(this.user).subscribe(data => {
        alert("Login succefully");
        this.router.navigate(['/home']);
      }, error => alert("Sorry Please enter a valid username and password!"));
    } else {
      console.log("Fields are empty !!");
    }
  }
}
