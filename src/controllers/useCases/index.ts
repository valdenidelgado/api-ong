import { CreateUserController } from "./createUser/CreateController"
import { DeleteUserController } from "./deleteUser/DeleteUserController"
import { GetUserController } from "./getUsers/GetUsersController"

export const usersControllers = {
  create: new CreateUserController().handle,
  get: new GetUserController().handle,
  delete: new DeleteUserController().handle,
}
