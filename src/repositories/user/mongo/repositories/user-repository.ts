import { IUser } from "@/models/IUser"
import { ICreateUserRepository } from "@/repositories/user/interfaces/ICreateUserRepository"
import { ICreateUserParams } from "@/repositories/user/interfaces/helpers/ICreateUserParams"
import UserModel from "@/repositories/user/mongo/models/UserModel"
import { IGetUsersRepository } from "@/repositories/user/interfaces/IGetUsersRepository"
import { IDeleteUserRepository } from "@/repositories/user/interfaces/IDeleteUserRepository"
import { IUpdateUserRepository } from "../../interfaces/IUpdateUserRepository"
import { IUpdateUserParams } from "../../interfaces/helpers/IUpdateUserParams"
import { IGetUserByIdRepository } from "../../interfaces/IGetUserByIdRepository"

export class UserRepository
  implements
    ICreateUserRepository,
    IGetUsersRepository,
    IGetUserByIdRepository,
    IDeleteUserRepository,
    IUpdateUserRepository
{
  async update(id: string, params: IUpdateUserParams): Promise<IUser> {
    await UserModel.updateOne({ _id: id }, params)

    const user = await UserModel.findOne({ _id: id })

    if (!user) {
      throw new Error("User not updated")
    }

    const { _id, ...rest } = user
    return { ...rest, id: _id.toHexString() }
  }

  async getUserById(id: string): Promise<IUser> {
    const user = await UserModel.findById(id)

    if (!user) {
      throw new Error("User not found")
    }

    const { _id, ...rest } = user

    return { ...rest, id: _id.toHexString() }
  }

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
