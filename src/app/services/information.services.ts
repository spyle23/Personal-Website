import { Injectable } from "@angular/core";
import { InfoPerso } from "../modele/info.models";

@Injectable({
    providedIn: 'root'
})
export class InformationService{
    informationPerso : InfoPerso = {"nom" : "Andriatiana", "prenom" : "Jean-Marie", "pseudo":"spyle23", "location":"ITD 26 bis Ambaniala Itaosy", "dateNaissance": new Date("06 octobre 2001"), "email": "sampingyen.lee@gmail.com"}
    getInfoAll(): InfoPerso {
        return this.informationPerso;
    }
}