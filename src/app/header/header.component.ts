import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstName: String;
  lastName: String;
  id: String;
  constructor() { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem('connectedUserFname');
    this.lastName = localStorage.getItem('connectedUserLname');
    this.id = localStorage.getItem('connectedUserID');

  }

}
