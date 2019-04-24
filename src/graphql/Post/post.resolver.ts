import { ModelsInterface } from './../../interfaces/ModelsInterface'
import { PostInterface } from './../../interfaces/PostInterface'

export const PostResolvers = {
  Query: {
    posts: async (parent, { limit = 10, offset = 10 }, { models }: {models: ModelsInterface}): Promise<PostInterface[]> => {
      return models.Post.find().skip(offset).limit(limit)
    },
    post: async (parent, { id }, { models }: {models: ModelsInterface}): Promise<PostInterface> => {
      return models.Post.findById(id)
    },
    postsOfUser: async (parent, { userId }, { models }: {models: ModelsInterface}): Promise<PostInterface[]> => {
      return models.Post.find({ user: userId })
    }
  },
  Mutation: {
    createPost: async (parent, { input }, { models }: {models: ModelsInterface}): Promise<PostInterface> => {
      const newPost = new models.Post(input)
      return newPost.save()
    },
    updatedPost: async (parent, { id, input }, { models }: {models: ModelsInterface}): Promise<PostInterface> => {
      return models.Post.findByIdAndUpdate(id, { $set: input }, { new: true })
    },
    deletePost: async (parent, { id }, { models }: {models: ModelsInterface}): Promise<boolean> => {
      return new Promise((resolve, reject): void => {
        models.Post.findByIdAndDelete(id)
          .then((post): void => {
            if (!post) resolve(true)
            resolve(false)
          })
          .catch((e): void => reject(e))
      })
    }
  }
}
