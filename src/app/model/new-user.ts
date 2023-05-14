export class NewUser {
  name: string;

  userName: string;

  email: string;

  password: string;

  role: string;

  constructor(
    name: string,
    userName: string,
    email: string,
    password: string,
    role: string) {
      this.name = name;
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.role = role
    }
    
}