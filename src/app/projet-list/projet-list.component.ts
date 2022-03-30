import { Component, Input, OnInit } from '@angular/core';
import { ProjetInfo } from '../modele/projet.models';
import { ProjetInfoService } from '../services/projet.services';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit {
  @Input() projetInfos!:ProjetInfo[];
  constructor(private projetInfoService: ProjetInfoService) { }

  ngOnInit(): void {
    this.projetInfos = this.projetInfoService.getProjetInfoAll();
  }

}
