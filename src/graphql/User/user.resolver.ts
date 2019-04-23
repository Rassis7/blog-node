import { UserInterface } from '../../interfaces/UserInterface'
import { ModelsInterface } from './../../interfaces/ModelsInterface'

export const UserResolvers = {
  Query: {
    users: async (parent, { limit = 10, offset = 10 }, { models }: { models: ModelsInterface }): Promise<UserInterface[]> => {
      return models.User.find().limit(limit).skip(offset)
    },
    user: async (parent, { id }, { models }: { models: ModelsInterface}): Promise<UserInterface> => {
      return models.User.findById(id)
    }
  },
  Mutation: {
    createUser: async (parent, { input }, { models }: { models: ModelsInterface}): Promise<UserInterface> => {
      let newUser = new models.User(input)

      return newUser.save()
    },
    updatedUser: async (parent, { id, input }, { models }: {models: ModelsInterface}): Promise<UserInterface> => {
      return models.User.findByIdAndUpdate(id, { $set: input })
    },
    deleteUser: async (parent, { id }, { models }: { models: ModelsInterface }): Promise<boolean> => {
      let retornoDeleted = false
      const userRemoved = models.User.findByIdAndDelete(id)

      userRemoved.then((err): void => {
        if (!err) retornoDeleted = true
      })

      return retornoDeleted
    }
  }
}
