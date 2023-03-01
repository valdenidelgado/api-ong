import { IUser } from "@/models/IUser";
import { IUpdateUserParams } from "./helpers/IUpdateUserParams";

export interface IUpdateUserRepository {
  update(id: string, params: IUpdateUserParams): Promise<IUser>;
}