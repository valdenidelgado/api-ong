import { Request } from "express"
import { IUser } from "../../../models/IUser"
import { HttpResponse } from "@/controllers/helpers/protocols"
import { created } from "@/controllers/helpers/helpers"
import { UserRepository } from "../../../repositories/user/mongo/repositories/user-repository"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { serverError } from "../../helpers/helpers"

const userRepository = new UserRepository()

export class CreateUserController {
  async handle(request: Request): Promise<HttpResponse<IUser | string>> {
    try {
      const createUserUseCase = new CreateUserUseCase(userRepository)

      const user = await createUserUseCase.execute(request.body)

      return created(user)
    } catch (error) {
      return serverError()
    }
  }
}
