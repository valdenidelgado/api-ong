import { ICreateUserRepository } from "@/repositories/user/interfaces/ICreateUserRepository"
import { ICreateUserParams } from "@/repositories/user/interfaces/helpers/ICreateUserParams"
import { IUser } from "../../../models/IUser"
import { HttpRequest } from "@/controllers/helpers/protocols"
import { serverError } from "@/controllers/helpers/helpers"

export class CreateUserUseCase {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async execute(httpRequest: HttpRequest<ICreateUserParams>): Promise<IUser> {
    const user = await this.createUserRepository.createUser(httpRequest.body!)
    return user
  }
}
