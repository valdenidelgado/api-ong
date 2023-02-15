import { IUser } from "@/models/IUser"
import { ICreateUserRepository } from "../../interfaces/ICreateUserRepository"
import { ICreateUserParams } from "../../interfaces/helpers/ICreateUserParams"
import UserModel from "../models/UserModel"
import { IGetUsersRepository } from "../../interfaces/IGetUsersRepository"

type MongoUser = Omit<IUser, "id"> & { _id: string }

export class UserRepository
  implements ICreateUserRepository, IGetUsersRepository
{
  async findAll(): Promise<IUser[]> {
    const users = await UserModel.find<MongoUser>()

    return users.map(({ _id, ...rest }) => ({ id: _id.toString(), ...rest }))
  }
  async createUser(params: ICreateUserParams): Promise<IUser> {
    const user = await UserModel.create(params)

    return user
  }
}
