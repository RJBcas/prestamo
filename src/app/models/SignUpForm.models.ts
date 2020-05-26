import { User } from "./User.models";

export interface SignUpForm extends User {
  password: string;
}
