import { Component, Input, OnInit } from '@angular/core';
import { FormationInfo, InfoPerso } from '../modele/info.models';
import { InformationService } from '../services/information.services';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
  @Input() infoPerso!:InfoPerso;
  @Input() formationInfos!:FormationInfo[];
  constructor(private informationService:InformationService) { }

  ngOnInit(): void {
    this.infoPerso = this.informationService.getInfoAll();
    this.formationInfos = this.informationService.getformationInfo();
  }

}
