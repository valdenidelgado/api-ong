import { User } from "@/models/user"
import { Request, Response } from "express"

type typeUser = {
  name: string
  email: string
  password: string
}

export class UserController {
  static async findAll(req: Request, res: Response) {
    const users = await User.find()
    res.status(200).json({ users })
  }

  static async create(req: Request, res: Response) {
    const user: typeUser = req.body

    const newUser = await User.create(user)
    res.status(201).json({ newUser })
  }
}
