import { ok, serverError } from "@/controllers/helpers/helpers"
import { HttpResponse } from "@/controllers/helpers/protocols"
import { IUser } from "@/models/IUser"
import GetUsersUseCase from "./GetUsersUseCase"
import { UserRepository } from "@/repositories/user/mongo/repositories/user-repository"

const userRepository = new UserRepository()

export class GetUserController {
  async handle(): Promise<HttpResponse<IUser[] | string>> {
    try {
      const getUsersUseCase = new GetUsersUseCase(userRepository)

      const users = await getUsersUseCase.execute()

      return ok(users)
    } catch (error) {
      return serverError()
    }
  }
}
