import { ICreateUserRepository } from "@/repositories/user/interfaces/ICreateUserRepository"
import { ICreateUserParams } from "@/repositories/user/interfaces/helpers/ICreateUserParams"
import { IUser } from "../../../models/IUser"

export class CreateUserUseCase {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async execute(param: ICreateUserParams): Promise<IUser> {
    const { name, email, password } = param

    const user = await this.createUserRepository.createUser({
      name,
      email,
      password,
    })
    return user
  }
}
