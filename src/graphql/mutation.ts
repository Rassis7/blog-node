import { UserMutation } from './../graphql/User/user.schema'
import { PostMutation } from './../graphql/Post/post.schema'
import { CommentMutation } from './../graphql/Comment/comment.schema'

const Mutation = `
  type Mutation {
    ${UserMutation}
    ${PostMutation}
    ${CommentMutation}
  }
`

export { Mutation }
