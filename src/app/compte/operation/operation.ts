export class Operation {
  /*  constructor(
    public transactionType: string,
    public numero_transaction: number,
    public date_creation: Date,
    public montant: number,
    public typeMvt: string,
    public dateMvt: Date,
    public libelle: string,
    public ibanTo: number
  ) {} */

  constructor(
    public loggedInUserId: number,
    public bankAccountFromId: number,
    public bankAccountToId: number,
    public transactionTypeId: number,
    public description: string,
    public amount: number,
    public bankAccountNumberTo: string
  ) {}
}
