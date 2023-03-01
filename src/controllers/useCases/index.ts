import { CreateUserController } from "./createUser/CreateController"
import { DeleteUserController } from "./deleteUser/DeleteUserController"
import { GetUserController } from "./getUsers/GetUsersController"
import { GetUserByIdController } from "@/controllers/useCases/getUserById/GetUserByIdController"

export const usersControllers = {
  create: new CreateUserController().handle,
  get: new GetUserController().handle,
  getById: new GetUserByIdController().handle,
  delete: new DeleteUserController().handle,
}
