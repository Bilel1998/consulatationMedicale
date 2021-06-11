import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any={};
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      Email :[''],
      mdp:['']
    })
  }
  loginUser()
  {
    console.log(this.login)
    this.userService.login(this.login).subscribe(
      data => {
        if (data) {
          localStorage.setItem('connectedUserFname',data.user[0].firstName);
          localStorage.setItem('connectedUserLname',data.user[0].lastName);
          localStorage.setItem('connectedUserID',data.user[0]._id);
          location.reload();
        }
        
      }
    )
    this.router.navigate(['']);
  }
  

}
