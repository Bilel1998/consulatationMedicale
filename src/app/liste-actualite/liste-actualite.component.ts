import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-actualite',
  templateUrl: './liste-actualite.component.html',
  styleUrls: ['./liste-actualite.component.css']
})
export class ListeActualiteComponent implements OnInit {
@Input() liste:any;
  constructor() { }

  ngOnInit(): void {

  }
  getUrl(la:String)
  {
     let v = this.liste.indexOf(la)+1;
     let url= "tab-"+v;
      return (url)
  }

}
