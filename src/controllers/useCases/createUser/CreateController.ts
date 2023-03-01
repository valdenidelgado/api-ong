import { IUser } from "../../../models/IUser"
import { HttpRequest, HttpResponse } from "@/controllers/helpers/protocols"
import { created } from "@/controllers/helpers/helpers"
import { UserRepository } from "../../../repositories/user/mongo/repositories/user-repository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { serverError } from "../../helpers/helpers"
import { ICreateUserParams } from "@/repositories/user/interfaces/helpers/ICreateUserParams"

const userRepository = new UserRepository()

export class CreateUserController {
  async handle(
    request: HttpRequest<ICreateUserParams>
  ): Promise<HttpResponse<IUser | string>> {
    try {
      const createUserUseCase = new CreateUserUseCase(userRepository)

      const user = await createUserUseCase.execute(request.body!)

      return created(user)
    } catch (error) {
      return serverError()
    }
  }
}
