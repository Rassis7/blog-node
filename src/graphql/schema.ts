import { makeExecutableSchema } from 'graphql-tools'
import { Query } from './query'
import { Mutation } from './mutation'

import { UserType } from './../graphql/User/user.schema'
import { PostType } from './../graphql/Post/post.schema'
import { CommentType } from './../graphql/Comment/comment.schema'

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
  ]
})
