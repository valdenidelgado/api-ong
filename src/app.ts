import express from "express"
import router from "./routes/user.routes"

export default class app {
    public app: express.Application

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.routes()
    }

    routes() {
        this.app.use("/users", router)
    }
}
