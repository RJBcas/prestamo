export type Status = boolean | undefined;

export interface Credit {
  mount: number;
  expiresIn: Date;
  ci: string;
  status: Status;
  paid: boolean;
  createdAt: Date;
}

export interface User {
  name: string;
  email: string;
  ci: string;
  admin: boolean;
  credits?: Credit[];
}
