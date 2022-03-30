import { Injectable, Input } from "@angular/core";
import { ProjetInfo } from "../modele/projet.models";

@Injectable({
    providedIn: 'root'
})
export class ProjetInfoService{
    projetInfos: ProjetInfo[] = [
        {"id":1,"title": "presentation", "description": "it's a static website that I built with a basic language: HTML and CSS","urlImage": "../../assets/sitePresentation.png "},
        {"id":2,"title": "PersonnalWebsite", "description": "A website SPA created for training with Angular", "urlImage": "../../assets/capture.png"},
        {"id":3,"title": "CalculatriceQt", "description": "A simple calculatrice with a basic operation like +, -, *, /", "urlImage": "../../assets/calculatrice.png"},
        {"id":4,"title": "calculatriceJS", "description": "calculatrice for training with DOM Javascript", "urlImage": "../../assets/CalculatriceJS.png"}
    ]
    getProjetInfoAll(): ProjetInfo[] {
        return this.projetInfos;
    }
    getProjetById(projetId : number): ProjetInfo{
        const idProjet = this.projetInfos.find(projetInfo => projetInfo.id === projetId);
        if (!idProjet) {
            throw new Error("le projet n'existe pas");   
        }
        else{
            return idProjet;
        }
    }
}