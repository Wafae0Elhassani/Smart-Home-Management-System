import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ResetPasswordService } from '../reset-password.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit{

  hide: boolean = true;
  user: User = new User();

  token!:string;

  constructor(private resetPasswordService: ResetPasswordService, private router:ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.token = params['token'];
    });
  }

  ResetPassword(){
    
  }

}
