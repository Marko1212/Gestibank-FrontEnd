import { Conseiller } from "../../conseiller/create-conseiller/conseiller";

export class Client {
  idClient: number;
  idRequest: number;
  valid: boolean;
  idAgent: number;
  constructor(idClient, idRequest, valid, idAgent) {
    (this.idClient = idClient),
      (this.idRequest = idRequest),
      (this.valid = valid),
      (this.idAgent = idAgent);
  }
}
