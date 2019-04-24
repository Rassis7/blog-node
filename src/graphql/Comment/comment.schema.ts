const CommentType = `
  type Comment {
    id: ID!
    comment: String!
    user: ID!
    post: ID!
    createdAt: String!
    updatedAt: String!
  }

  input CommentInput {
    comment: String!
    user: ID!
    post: ID!
  }

  input CommentUpdateInput {
    comment: String!
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
  updatedComment(id: ID!, input: CommentUpdateInput!): Comment
  deleteComment(id: ID!): Boolean
`

export { CommentQueries, CommentMutation, CommentType }
