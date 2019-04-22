import { Schema, model, Model } from 'mongoose'
import { UserInterface } from './../interfaces/UserInterface'

const UserSchema = new Schema({
  email: String,
  name: String,
  posts: Array,
  comments: Array
}, {
  timestamps: true
})

UserSchema.methods.fullName = (): string => {
  return `${this.name} <${this.email}>`
}

export const User: Model<UserInterface> = model<UserInterface>('Users', UserSchema)
