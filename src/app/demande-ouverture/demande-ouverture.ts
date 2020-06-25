//import { User } from '../user';

export class DemandeOuverture {
  constructor(
    public idUserAccount: number,
    public checked: boolean,
    public email: string,
    public firstname: string,
    public lastname: string,
    public phone: string,
    public agent: string
  ) {}
}
