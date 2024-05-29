import { Router } from 'express'
import {
  deleteUserController,
  getAllUserController,
  getUserByIdController,
  loginController,
  registerController,
  updateUserController
} from '~/controllers/user.controller'
import { loginValidator, registerValidator } from '~/middlewares/user.middleware'
import { wrapRequestHandler } from '~/utills/handlers'

const usersRouter = Router()

usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))

usersRouter.get('/', wrapRequestHandler(getAllUserController))

usersRouter.get('/:id', wrapRequestHandler(getUserByIdController))

usersRouter.put('/:id', wrapRequestHandler(updateUserController))

usersRouter.delete('/:id', wrapRequestHandler(deleteUserController))

export default usersRouter
