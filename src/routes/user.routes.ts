import { CreateUserController } from "@/controllers/useCases/createUser/CreateController"
import { Router } from "express"
import { GetUserController } from "../controllers/useCases/getUsers/GetUsersController"

const router = Router()

router.get("/", async (req, res) => {
  const getUserControllers = new GetUserController()

  const { body, statusCode } = await getUserControllers.handle()

  return res.status(statusCode).json(body)
})

router.post("/register", async (req, res) => {
  const createUserController = new CreateUserController()

  const { body, statusCode } = await createUserController.handle(req)

  return res.status(statusCode).json(body)
})

export default router
