import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

import { Query } from './query'
import { Mutation } from './mutation'

// Types
import { UserType } from './User/user.schema'
import { PostType } from './Post/post.schema'
import { CommentType } from './Comment/comment.schema'

// Resolvers
import { UserResolvers } from './User/user.resolver'
import { PostResolvers } from './Post/post.resolver'
import { CommentResolver } from './Comment/comment.resolver'

const resolvers = merge(
  UserResolvers,
  PostResolvers,
  CommentResolver
)

const SchemaDefinition = `
  type Schema {
    query: Query,
    mutation: Mutation
  }
`

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    Query,
    Mutation,
    UserType,
    PostType,
    CommentType
  ],
  resolvers
})
