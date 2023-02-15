import { IUser } from "@/models/IUser";
import { ICreateUserRepository } from "../../interfaces/ICreateUserRepository";
import { ICreateUserParams } from "../../interfaces/helpers/ICreateUserParams";
import UserModel from "../models/UserModel";

export class UserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUser> {
    const user = await UserModel.create(params);

    return user;
  }
}