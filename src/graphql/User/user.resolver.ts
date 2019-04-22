import { UserInterface } from '../../interfaces/UserInterface'
import { GraphQLResolveInfo } from 'graphql'
import { Model } from 'mongoose'

export const UserResolvers = {
  Query: {
    users: async (parent, { limit = 10, offset = 10 }, { User }: { User: Model<UserInterface> }, info: GraphQLResolveInfo) => {
      return User
    }
  }
}
