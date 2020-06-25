//import { Address } from "../../models/address";

export class Conseiller {
  constructor(
    public idUserAccount: number,
    public lastname: string,
    public firstname: string,
    public email: string,
    public homeNumber: string,
    public street: string,
    public city: string,
    public zip: number,
    public country: string,
    public additionalInfoAddress: string,
    public phone: string,
    /*public matricule: number,*/
    public pass: string,
    public username: string,
    public listClients: null,
    public admin: null
  ) {}
}
