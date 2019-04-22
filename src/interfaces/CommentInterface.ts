import { Document } from 'mongoose'

export interface CommentInterface extends Document {
  comment: string,
  user: number,
  post: number
}
