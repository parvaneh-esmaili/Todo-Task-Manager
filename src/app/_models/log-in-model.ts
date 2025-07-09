export class UserForLogIn {
  constructor(public identifier: string = '', public password: string = '') {}
}

export interface LoginResponse {
  jwt: string;
  user: {
    id: number;
  };
}
