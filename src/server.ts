import express from "express"
import conn from "./db/conn"

const app = express()

const port = 8080

conn()

app.get("/", (req, res) => {
  res.send("Hello World!, bla")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
