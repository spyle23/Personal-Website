import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ProjetInfo } from '../modele/projet.models';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  @Input() projetInfo!:ProjetInfo;
  constructor() { }

  ngOnInit(): void {
  }
  onOpenModal(): void{
    const modalContainer = document.querySelector(".modal-container");
    const modalTrigger = document.querySelectorAll(".modal-trigger");

    modalTrigger.forEach(trigger => trigger.addEventListener("click", () =>{
      modalContainer?.classList.toggle("active");
    }))
  }

}
