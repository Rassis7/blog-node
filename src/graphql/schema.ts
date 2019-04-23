import { makeExecutableSchema } from 'graphql-tools'
import { Query } from './query'
import { Mutation } from './mutation'
import { merge } from 'lodash'

import { UserType } from './User/user.schema'
import { PostType } from './Post/post.schema'
import { CommentType } from './Comment/comment.schema'
import { UserResolvers } from './User/user.resolver'

const resolvers = merge(
  UserResolvers
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
