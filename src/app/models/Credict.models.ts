import { User } from "./User.models";

export type Status = boolean | undefined;

export interface RequestCredit {
  mount: number;
  expiresIn: Date;
  ci: string;
}

export interface Credit {
  id: number;
  userId: string;
  user?: User;
  mount: number;
  date: Date;
  expiresIn: Date;
  status: Status;
  paid: boolean;
}
