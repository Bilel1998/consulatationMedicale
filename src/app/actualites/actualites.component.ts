import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {
listeActualites=['LA DÉPRESSION','DIABÈTE DE TYPE 2 ET CHIRURGIE BARIATRIQUE','ASTHME ALLERGIQUE','LA RHINITE ALLERGIQUE '];
  constructor() { }

  ngOnInit(): void {
  }

}
