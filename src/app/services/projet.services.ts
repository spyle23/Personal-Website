import { Injectable, Input } from "@angular/core";
import { ProjetInfo } from "../modele/projet.models";

@Injectable({
    providedIn: 'root'
})
export class ProjetInfoService{
    projetInfos: ProjetInfo[] = [
        {"title": "presentation", "description": "it's a static website that I built with a basic language: HTML and CSS"},
        {"title": "PersonnalWebsite", "description": "A website SPA created for training with Angular"},
        {"title": "CalculatriceQt", "description": "A simple calculatrice with a basic operation like +, -, *, /"},
        {"title": "calculatriceJS", "description": "calculatrice for training with DOM Javascript"}
    ]
    getProjetInfoAll(): ProjetInfo[] {
        return this.projetInfos;
    }
}