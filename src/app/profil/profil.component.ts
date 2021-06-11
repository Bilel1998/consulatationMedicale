import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  firstName: string;
  lastName: string;
  id:String;
  user:any;
  imageURL:String;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
   
    this.firstName = localStorage.getItem('connectedUserFname');
    this.lastName = localStorage.getItem('connectedUserLname');
    this.id = localStorage.getItem('connectedUserID');
    this.user= this.userService.getUserByID(this.id);
    console.log("user  :",this.user);
  }

}
