import { IUser } from "@/models/IUser";

export interface IGetUsersRepository {
  findAll(): Promise<IUser[]>
}
