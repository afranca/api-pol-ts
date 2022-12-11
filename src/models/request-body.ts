import { UserType } from "./users";

export type RequestBody = {
  type: UserType;
  name: string;
  age: number;
  role?: string;
  occupation?: string;
};