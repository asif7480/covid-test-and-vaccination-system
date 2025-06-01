import express from "express"
import dotenv from "dotenv/config"
import cors from "cors"
import morgan from "morgan"
import { connectDb } from "./config/db.mjs"
import { errorHandler } from "./middlewares/error.middleware.mjs"
import routes from "./routes/index.route.mjs"

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))

app.use(routes)


app.use(errorHandler)
connectDb()
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`)
})