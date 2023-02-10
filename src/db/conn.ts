import mongoose from "mongoose"
import { config } from "../config/config"

mongoose.set("strictQuery", true)

const conn = async () => {
  try {
    await mongoose.connect(config.mongo.url)
    console.log("MongoDB Connected...")
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default conn
