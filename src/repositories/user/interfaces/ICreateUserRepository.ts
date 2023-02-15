import { IUser } from "@/models/IUser"
import { ICreateUserParams } from "./helpers/ICreateUserParams"

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<IUser>
}
