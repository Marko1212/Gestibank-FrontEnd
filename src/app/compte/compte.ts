export class Compte {
    constructor(public id: number, public decouvert: number, public gele: boolean,
                public rib: number, public seuil_remuneration: number, public solde: number,
                public type_compte: string, public client_id: number) { }

    }
