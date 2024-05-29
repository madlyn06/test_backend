import express from 'express'
import usersRouter from './routes/user.route.js'
import { ErrorWithMessage } from './models/Error.js'
import cors from 'cors'
import { databaseService } from './services/databases.service.js'

const app = express()
const port = 8080
databaseService.connect().catch(console.dir)
app.use(
  cors({
    origin: '*'
  })
)
app.use(express.json())
app.use('/users', usersRouter)
app.use((err, req, res, next) => {
  if (err instanceof ErrorWithMessage) {
    return res.status(err.status).json(err)
  }
  res.status(500).json({
    message: err.message,
    errorInfo: err
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
