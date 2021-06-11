import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profil-medecin',
  templateUrl: './profil-medecin.component.html',
  styleUrls: ['./profil-medecin.component.css']
})
export class ProfilMedecinComponent implements OnInit {
  id: String;
  medecin:any={};
  profileMedecinForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('connectedUserID');

    this.userService.getUserByID( this.id ).subscribe(
      data => { this.medecin = data.user; }
    )
    this.profileMedecinForm=this.formBuilder.group({
      specialite:[''],
      nom:[''],
      prenom:[''] ,
      email:[''],
      tel:['']
    })
  }
  verfiferMedecin()
  {
    console.log(this.medecin);
  }
}
