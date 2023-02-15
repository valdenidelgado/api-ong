import express from "express"
import conn from "./db/conn"
import router from "./routes/user.routes"

const app = express()

const port = 8080

conn()

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
