import { UserQueries } from './../graphql/User/user.schema'
import { PostQueries } from './../graphql/Post/post.schema'
import { CommentQueries } from './../graphql/Comment/comment.schema'

const Query = `
  type Query {
    ${UserQueries}
    ${PostQueries}
    ${CommentQueries}
  }
`

export { Query }
