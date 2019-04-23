import { Schema, model } from 'mongoose'
import { UserInterface } from './../interfaces/UserInterface'

const UserSchema = new Schema({
  email: String,
  name: String,
  posts: Array,
  comments: Array
}, {
  timestamps: true
})

UserSchema.methods.nameAndEmail = (): string => {
  return `${this.name} <${this.email}>`
}

export const User = model<UserInterface>('Users', UserSchema)
