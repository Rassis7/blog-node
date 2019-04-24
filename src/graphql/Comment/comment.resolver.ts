import { CommentInterface } from '../../interfaces/CommentInterface'
import { ModelsInterface } from '../../interfaces/ModelsInterface'

export const CommentResolver = {
  Query: {
    comments: async (parent, { limit = 10, offset = 10 }, { models }: {models: ModelsInterface}): Promise<CommentInterface[]> => {
      return models.Comment.find().skip(offset).limit(limit)
    },
    comment: async (parent, { id }, { models }: {models: ModelsInterface}): Promise<CommentInterface> => {
      return models.Comment.findById(id)
    },
    commetsOfPost: async (parent, { postId }, { models }: {models: ModelsInterface}): Promise<CommentInterface[]> => {
      return models.Comment.find({ post: postId })
    },
    commentsOfUser: async (parent, { userId }, { models }: {models: ModelsInterface}): Promise<CommentInterface[]> => {
      return models.Comment.find({ user: userId })
    }
  },
  Mutation: {
    createComment: async (parent, { input }, { models }: {models: ModelsInterface}): Promise<CommentInterface> => {
      const comment = new models.Comment(input)
      return comment.save()
    },
    updatedComment: async (parent, { id, input }, { models }:{models: ModelsInterface}): Promise<CommentInterface> => {
      return models.Comment.findOneAndUpdate(id, { $set: input }, { new: true })
    },
    deleteComment: async (parent, { id }, { models }: {models: ModelsInterface}): Promise<boolean> => {
      return new Promise((resolve, reject): void => {
        models.Comment.findOneAndDelete(id)
          .then((): void => {
            models.Comment.findById(id)
              .then((comment): void => {
                if (!comment) resolve(true)
                resolve(false)
              })
          })
          .catch((e): void => reject(e))
      })
    }
  }
}
