import { Schema, model } from 'mongoose'
import { PostInterface } from './../interfaces/PostInterface'

const PostSchema = new Schema({
  title: String,
  content: String,
  user: Object,
  comments: Array
}, {
  timestamps: true
})

export const Post = model<PostInterface>('Posts', PostSchema)
