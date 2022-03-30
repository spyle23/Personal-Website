import { Component, Input, OnInit } from '@angular/core';
import { FormationInfo } from '../modele/info.models';
import { InformationService } from '../services/information.services';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  @Input() formationInfo!:FormationInfo;
  constructor(private informationService: InformationService) { }

  ngOnInit(): void {
  }

}
