export class Operation {
  constructor(
    public transactionType: string,
    public numero_transaction: number,
    public date_creation: Date,
    public montant: number,
    public typeMvt: string,
    public dateMvt: Date,
    public libelle: string,
    public iban: number
  ) {}
}
