import { Router } from "express"
import { UserController } from "../controller/users/UserController"

const router = Router()

router.get("/user", UserController.findAll)
router.post("/register", UserController.create)

export default router
