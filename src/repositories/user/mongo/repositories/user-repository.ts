import { IUser } from "@/models/IUser";
import { ICreateUserRepository } from "../../interfaces/ICreateUserRepository";
import { ICreateUserParams } from "../../interfaces/helpers/ICreateUserParams";
import UserModel from "../models/UserModel";
import { IGetUsersRepository } from "../../interfaces/IGetUsersRepository";

export class UserRepository implements ICreateUserRepository, IGetUsersRepository {
  async findAll(): Promise<IUser[]> {
    const users = await UserModel.find();

    return users;
  }
  async createUser(params: ICreateUserParams): Promise<IUser> {
    const user = await UserModel.create(params);

    return user;
  }
}