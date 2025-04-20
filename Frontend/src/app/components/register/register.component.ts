import { Component } from '@angular/core';
import { User } from '../../user';
import { RegisterServiceService } from '../../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private registerService: RegisterServiceService) { }

  hide: boolean = true;
  user: User = new User();
  credentials = {
    email: '',
    username: '',
    password: ''
  }
  Register() {
    if ((this.user.email != '' && this.user.username != '' && this.user.password != '') && (this.user.email != null && this.user.username != '' && this.user.password != null)) {
      console.log("Welcome!");
      this.registerService.RegisterUser(this.user).subscribe(data => {
        alert("The account created succefully");
        window.location.reload();
      },error=>{alert("Sorry Please try with an other username!");
      window.location.reload();
    }
      );
    } else {
      console.log("Fields are empty !!");
    }
  }
}
