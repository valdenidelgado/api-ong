import { IUser } from "@/models/IUser"
import { IUpdateUserRepository } from "@/repositories/user/interfaces/IUpdateUserRepository"
import { IGetUsersRepository } from "@/repositories/user/interfaces/IGetUsersRepository"
import { IUpdateUserParams } from "@/repositories/user/interfaces/helpers/IUpdateUserParams"

export class UpdateUserUseCase {
  constructor(
    private readonly updateUserRepository: IUpdateUserRepository,
    private readonly getUserRepository: IGetUsersRepository
  ) {}

  async execute(id: string, params: IUpdateUserParams): Promise<IUser> {
    const user = await this.getUserRepository.get(id)

    if (!user) {
      throw new Error("User not found")
    }

    const updatedUser = await this.updateUserRepository.update(id, params)

    return updatedUser
  }
}
