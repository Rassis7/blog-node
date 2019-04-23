import { Schema, model } from 'mongoose'
import { CommentInterface } from './../interfaces/CommentInterface'

const CommentSchema = new Schema({
  comment: String,
  user: Object,
  post: Object
}, {
  timestamps: true
})

export const Comment = model<CommentInterface>('Comments', CommentSchema)
