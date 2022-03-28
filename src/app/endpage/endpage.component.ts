import { Component, Input, OnInit } from '@angular/core';
import { InfoPerso } from '../modele/info.models';
import { InformationService } from '../services/information.services';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.scss']
})
export class EndpageComponent implements OnInit {
  @Input() infoPerso!:InfoPerso;
  constructor(private informationService: InformationService) { }

  ngOnInit(): void {
    this.infoPerso = this.informationService.getInfoAll();
  }
  

}
