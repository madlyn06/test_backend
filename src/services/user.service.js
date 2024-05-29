import { User } from '../models/schemas/User.schema.js'
import { signToken } from '../utills/jwt.js'
import { databaseService } from './databases.service.js'
import { ObjectId } from 'mongodb'

class UsersService {
  async checkEmailExist(email) {
    const result = await databaseService.user.findOne({ email })
    return Boolean(result)
  }
  signAccessToken({ user_id }) {
    return signToken({
      payload: { user_id },
      options: { expiresIn: '7d' },
      privateKey: '12344321!@#123!@#'
    })
  }
  async register(payload) {
    const user_id = new ObjectId().toString()
    await databaseService.user.insertOne(
      new User({
        ...payload,
        _id: new ObjectId(user_id)
      })
    )
    const user = await databaseService.user.findOne({ _id: new ObjectId(user_id) })
    const access_token = await this.signAccessToken({ user_id })
    return { access_token, user }
  }
  async login({ user_id }) {
    const access_token = await this.signAccessToken({ user_id })
    return { access_token }
  }

  async getAllUser() {
    return await databaseService.user.find().toArray()
  }

  async updateUser(id, payload) {
    const { address, description, password, phone, role } = payload
    return await databaseService.user.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          address,
          description,
          phone,
          password,
          role
        }
      }
    )
  }

  async getUserById(id) {
    return await databaseService.user.findOne({ _id: new ObjectId(id) })
  }

  async deleteUser(id) {
    return await databaseService.user.deleteOne({ _id: new ObjectId(id) })
  }
}

export const usersService = new UsersService()
