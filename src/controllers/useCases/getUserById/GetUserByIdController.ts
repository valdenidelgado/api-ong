import { HttpRequest, HttpResponse } from "@/controllers/helpers/protocols"
import { IUser } from "@/models/IUser"
import { ok, serverError } from "@/controllers/helpers/helpers"
import { UserRepository } from "@/repositories/user/mongo/repositories/user-repository"
import { GetUserByIdUseCase } from "@/controllers/useCases/getUserById/GetUserByIdUseCase"

const userRepository = new UserRepository()

export class GetUserByIdController {
  async handle(
    request: HttpRequest<any>
  ): Promise<HttpResponse<IUser[] | string>> {
    try {
      const { id } = request.params
      const getUsersUseCase = new GetUserByIdUseCase(userRepository)

      const users = await getUsersUseCase.execute(id)

      return ok(users)
    } catch (error) {
      return serverError()
    }
  }
}
