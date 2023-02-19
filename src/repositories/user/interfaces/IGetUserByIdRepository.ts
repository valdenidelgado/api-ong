import { IUser } from "@/models/IUser";

export interface IGetUserByIdRepository {
  getUserById(id: string): Promise<IUser>
}