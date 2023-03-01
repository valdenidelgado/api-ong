import { Router } from "express"
import { usersControllers } from "../controllers/useCases/index"

const router = Router()

router.get("/", async (req, res) => {
  const { body, statusCode } = await usersControllers.get()

  return res.status(statusCode).json(body)
})

//TODO: Create a middleware to return body and statusCode
router.post("/register", async (req, res) => {
  const { body, statusCode } = await usersControllers.create(req)

  return res.status(statusCode).json(body)
})

router.delete("/:id", async (req, res) => {
  const { body, statusCode } = await usersControllers.delete(req)

  return res.status(statusCode).json(body)
})

export default router
