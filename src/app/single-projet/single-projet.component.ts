import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetInfo } from '../modele/projet.models';
import { ProjetInfoService } from '../services/projet.services';

@Component({
  selector: 'app-single-projet',
  templateUrl: './single-projet.component.html',
  styleUrls: ['./single-projet.component.scss']
})
export class SingleProjetComponent implements OnInit {
  projetId!:number;
  projetIdPrev!:number;
  projetInfo!:ProjetInfo;
  constructor(private projetInfoService: ProjetInfoService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.projetId = +this.route.snapshot.params['id'];
    this.projetInfo = this.projetInfoService.getProjetById(this.projetId);
  }
  onReturn(): void{
      this.router.navigateByUrl("portfoliolist");
  }
}
