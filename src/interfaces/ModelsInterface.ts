import { Model } from 'mongoose'
import { UserInterface } from './UserInterface'
import { PostInterface } from './PostInterface'
import { CommentInterface } from './CommentInterface'

export interface ModelsInterface {
  User: Model<UserInterface>
  Post: Model<PostInterface>
  Comment: Model<CommentInterface>
}
