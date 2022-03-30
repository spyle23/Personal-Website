import { Injectable } from "@angular/core";
import { FormationInfo, InfoPerso } from "../modele/info.models";

@Injectable({
    providedIn: 'root'
})
export class InformationService{
    informationPerso : InfoPerso = {"nom" : "Andriatiana", "prenom" : "Jean-Marie", "pseudo":"spyle23", "location":"ITD 26 bis Ambaniala Itaosy", "dateNaissance": new Date("06 octobre 2001"), "email": "sampingyen.lee@gmail.com"};
    formationInfos: FormationInfo[] = [
        {"etablissement": "Lycee des Seraphins", "debut": new Date("2015"), "fin": new Date("2018"), "certificat": "Baccalauréat série C mention Bien"},
        {"etablissement": "Faculté des Sciences", "departement": "Mathématiques et Informatique", "parcours": "MIPC", "debut": new Date("2018"), "fin": new Date("2019")},
        {"etablissement": "Faculté des Sciences", "departement": "Mathématiques et Informatique", "parcours": "Discipline Mathématiques Communes", "debut": new Date("2019"), "fin": new Date("2020")},
        {"etablissement": "Faculté des Sciences", "departement": "Mathématiques et Informatique", "parcours": "Mathématique Informatique et Statistique Appliquée", "debut": new Date("2021"), "fin": new Date("2022"), "certificat": "licence"}
    ]

    getInfoAll(): InfoPerso {
        return this.informationPerso;
    }
    getformationInfo(){
        return this.formationInfos;
    }
}