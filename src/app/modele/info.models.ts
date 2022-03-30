export class InfoPerso{
    nom!:string;
    prenom!:string;
    email!:string;
    dateNaissance!:Date;
    location!:string;
    pseudo!:string;
}
export class FormationInfo{
    etablissement!:string;
    departement?:string;
    debut!:Date;
    fin!:Date;
    certificat?:string;
    parcours?:string;
}