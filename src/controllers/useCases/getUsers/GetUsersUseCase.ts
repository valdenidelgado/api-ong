import { IUser } from "@/models/IUser"
import { IGetUsersRepository } from "@/repositories/user/interfaces/IGetUsersRepository"

export default class GetUserUseCase {
  constructor(private getUsersRepository: IGetUsersRepository) {}
  async execute(): Promise<IUser[]> {
    const users = await this.getUsersRepository.findAll()
    return users
  }
}
