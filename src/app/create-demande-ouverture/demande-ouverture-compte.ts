/* export class DemandeOuvertureCompte {
    constructor(public nom:string, public prenom:string, public email:string, public revenuMens: number, public piecesJustif: File ){}
}
 */

export class DemandeOuvertureCompte {
  constructor(
    public idUserAccount: number,
    public lastname: string,
    public firstname: string,
    public email: string,
    public marriageStatus: string,
    public numberOfChildren: string,
    public homeNumber: string,
    public street: string,
    public city: string,
    public zip: number,
    public country: string,
    public additionalInfoAddress: string,
    public phone: string,
    public pass: string,
    public username: string,
    public admin: null,
    public idDocument: FileList | null,
    public proofHome: FileList | null,
    public proofSalary: FileList | null
  ) {}
}
