import app from "./app"
import { config } from "./config/config"
import conn from "./db/conn"

const server = new app()

try {
  server.app.listen(config.server.port, () => {
    console.log(`Server running on port ${config.server.port}`)
  })
  conn()
} catch (error) {
  console.log(error)
}
