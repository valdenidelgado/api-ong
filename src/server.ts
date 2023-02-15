import express from "express"
import conn from "./db/conn"
import router from "./routes/user.routes"
import { config } from "./config/config"

const app = express()

conn()

app.use(express.json())
app.use("/users", router)

app.listen(config.server.port, () => {
  console.log(`Server running on port ${config.server.port}`)
})
