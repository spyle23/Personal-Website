import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.scss']
})
export class EndpageComponent implements OnInit {

  location!:string;
  pseudo!:string;
  constructor() { }

  ngOnInit(): void {
    this.location = "ITD 26 bis Ambaniala Itaosy";
    this.pseudo = "Spyle23"
  }

}
