import { Conseiller } from '../../conseiller/create-conseiller/conseiller';

export class Client {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;
    telephone: string;
    pseudo: string;
    mdp: string;
    identifiant: number;
    revenuMens: number;
    piecesJustif: boolean;
    conseiller: Conseiller;
    valide: boolean;
    constructor() {

    }

}