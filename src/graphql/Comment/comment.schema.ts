const CommentType = `
  type Comment {
    id: ID!
    comment: String!
    user: User!
    post: Post!
    createdAt: String!
    updatedAt: String!
  }

  input CommentInput {
    comment: String!
    user: User!
    post: Post!
  }
`

const CommentQueries = `
  comments(limit: Int, offset: Int): [Comment!]!
  comment(id: ID!): Comment
  commetsOfPost(postId: ID!): [Comment!]!
  commentsOfUser(userId: ID!): [Comment!]! 
`

const CommentMutation = `
  createComment(input: CommentInput!): Comment
  updateComment(id: ID!, input: CommentInput!): Comment
  deleteComment(id: ID!): Boolean
`

export { CommentQueries, CommentMutation, CommentType }
