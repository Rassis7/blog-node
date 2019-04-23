import { UserInterface } from '../../interfaces/UserInterface'
import { Model } from 'mongoose'
import { ModelsInterface } from './../../interfaces/ModelsInterface'

export const UserResolvers = {
  Query: {
    users: async (parent, { limit = 10, offset = 10 }, { models }: {models: ModelsInterface}): Promise<UserInterface[]> => {
      return models.User.find({}, { limit, offset })
    },
    user: async (parent, { id }, { User }: {User: Model<UserInterface>}): Promise<UserInterface> => {
      return User.findById(id)
    }
  },
  Mutation: {
    createUser: async (parent, { input }, { User }: {User:Model<UserInterface>}): Promise<UserInterface> => {
      return User.create(input)
    }
  }
}
