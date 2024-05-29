import { usersService } from '../services/user.service.js'

export const registerController = async (req, res, next) => {
  console.log(req.body, 'body')
  const result = await usersService.register(req.body)
  return res.json({ message: 'Register success', result })
}

export const loginController = async (req, res, next) => {
  const user = req.user
  const user_id = user._id
  const result = await usersService.login({ user_id: user_id.toString() })
  return res.json({ message: 'Login success', result })
}

export const getAllUserController = async (req, res, next) => {
  const result = await usersService.getAllUser()
  return res.json({ message: 'Get all user success', result })
}

export const getUserByIdController = async (req, res, next) => {
  const result = await usersService.getUserById(req.params.id)
  return res.json({ message: 'Get user success', result })
}

export const updateUserController = async (req, res, next) => {
  const result = await usersService.updateUser(req.params.id, req.body)
  return res.json({ message: 'Edit user success', result })
}

export const deleteUserController = async (req, res, next) => {
  const result = await usersService.deleteUser(req.params.id)
  return res.json({ message: 'Delete user success', result })
}
