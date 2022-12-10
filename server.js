// native imports
import path from 'path'
import { fileURLToPath } from 'url'

// external imports
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import 'express-async-errors'
import morgan from 'morgan'

// local imports
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDB from './config/db.js'
// import routers
import noteRouter from './routes/noteRoutes.js'

dotenv.config() //configure .env
connectDB() // connect with Atlas

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middlewares
app.use(express.json())
app.use(express.static(path.resolve(__dirname, './client/build')))

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// Mount Routers
app.use('/api/v1/notes', noteRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/', 'index.html'))
})

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`.yellow.bold))
