import { IUser } from "@/models/IUser"
import { ICreateUserRepository } from "../../interfaces/ICreateUserRepository"
import { ICreateUserParams } from "../../interfaces/helpers/ICreateUserParams"
import UserModel from "../models/UserModel"
import { IGetUsersRepository } from "../../interfaces/IGetUsersRepository"
import { IDeleteUserRepository } from "../../interfaces/IDeleteUserRepository"

export class UserRepository
  implements ICreateUserRepository, IGetUsersRepository, IDeleteUserRepository
{
  async deleteUser(id: string): Promise<void> {
    await UserModel.findByIdAndDelete(id)
  }

  async findAll(): Promise<IUser[]> {
    const users = await UserModel.find().lean()

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }))
  }

  async createUser(params: ICreateUserParams): Promise<IUser> {
    const user = await UserModel.create(params)

    return user
  }
}
