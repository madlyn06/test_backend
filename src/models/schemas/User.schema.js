import { ObjectId } from 'mongodb'

export class User {
  _id
  username
  email
  password
  role
  address
  phone
  description
  created_at
  updated_at
  constructor(user) {
    this._id = user._id || new ObjectId()
    this.username = user.username
    this.email = user.email
    this.password = user.password
    this.address = user.address
    this.phone = user.phone
    this.description = user.description
    this.role = user.role || 0
    this.created_at = user.created_at || new Date()
    this.updated_at = user.updated_at || new Date()
  }
}
