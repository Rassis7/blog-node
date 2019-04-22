import { Schema, model, Model } from 'mongoose'
import { CommentInterface } from './../interfaces/CommentInterface'

const CommentSchema = new Schema({
  comment: String,
  user: Object,
  post: Object
}, {
  timestamps: true
})

export const Comment: Model<CommentInterface> = model<CommentInterface>('Comments', CommentSchema)
