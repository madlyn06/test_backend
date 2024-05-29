import { Collection, Db, MongoClient, ServerApiVersion } from 'mongodb'
import { User } from '~/models/schemas/User.schema'

const uri =
  'mongodb+srv://dbbackend:jR5Ct5madyLl8Z4k@dbbackend.3hwzcsk.mongodb.net/?retryWrites=true&w=majority&appName=dbBackend'

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db('dbBackend')
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
    }
  }

  get user(): Collection<User> {
    return this.db.collection('users')
  }
}
export const databaseService = new DatabaseService()
