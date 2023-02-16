import { badRequest } from "@/controllers/helpers/helpers"
import { IDeleteUserRepository } from "@/repositories/user/interfaces/IDeleteUserRepository"

export class DeleteUserUseCase {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async execute(id: string): Promise<void> {
    await this.deleteUserRepository.deleteUser(id)
  }
}
