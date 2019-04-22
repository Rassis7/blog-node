import { Document } from 'mongoose'

export interface PostInterface extends Document{
  title: string,
  content: string,
  user: number,
  comments?: []
}
