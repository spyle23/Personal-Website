
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetInfo } from '../modele/projet.models';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  @Input() projetInfo!:ProjetInfo;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  onViewInfo(): void{
        this.router.navigateByUrl(`projetInfo/${this.projetInfo.id}`);
  }
}
