import { Router } from 'express'
import { wrapRequestHandler } from '../utills/handlers.js'
import { loginValidator, registerValidator } from '../middlewares/user.middleware.js'
import {
  deleteUserController,
  getAllUserController,
  getUserByIdController,
  loginController,
  registerController,
  updateUserController
} from '../controllers/user.controller.js'

const usersRouter = Router()

usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))

usersRouter.get('/', wrapRequestHandler(getAllUserController))

usersRouter.get('/:id', wrapRequestHandler(getUserByIdController))

usersRouter.put('/:id', wrapRequestHandler(updateUserController))

usersRouter.delete('/:id', wrapRequestHandler(deleteUserController))

export default usersRouter
