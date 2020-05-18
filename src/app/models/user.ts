export class User {
  id: number;
  username: string;
  address: string;
  email: string;

  constructor(id: number, username: string, address: string, email: string) {
    this.id = id;
    this.username = username;
    this.address = address;
    this.email = email;
  }
}
