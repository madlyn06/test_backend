import { ObjectId } from 'mongodb'
import { UserRoles } from '~/constant/enum'

interface UserType {
  _id?: ObjectId
  username: string
  email: string
  address: string
  phone: string
  description: string
  password: string
  role?: UserRoles
  created_at?: Date
  updated_at?: Date
}
export class User {
  _id: ObjectId
  username: string
  email: string
  password: string
  role: UserRoles
  address: string
  phone: string
  description: string
  created_at: Date
  updated_at: Date
  constructor(user: UserType) {
    this._id = user._id || new ObjectId()
    this.username = user.username
    this.email = user.email
    this.password = user.password
    this.address = user.address
    this.phone = user.phone
    this.description = user.description
    this.role = user.role || UserRoles.User
    this.created_at = user.created_at || new Date()
    this.updated_at = user.updated_at || new Date()
  }
}
