import { UserRepository } from "@/repositories/user/mongo/repositories/user-repository"
import { DeleteUserUseCase } from "./DeleteUserUseCase"
import { HttpRequest, HttpResponse } from "@/controllers/helpers/protocols"
import { noContent, serverError } from "@/controllers/helpers/helpers"

export class DeleteUserController {
  async handle(request: HttpRequest<any>): Promise<HttpResponse<string>> {
    const id = request?.params?.id
    const deleteUserUseCase = new DeleteUserUseCase(new UserRepository())
    try {
      await deleteUserUseCase.execute(id)

      return noContent()
    } catch (error) {
      return serverError()
    }
  }
}
