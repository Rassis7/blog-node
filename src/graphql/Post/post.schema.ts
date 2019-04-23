const PostType = `
  type Post {
    id: ID!
    title: String!
    content: String!
    user: User!
    comments: [Comment!]!
    createdAt: String!
    updatedAt: String
  }

  input PostInput {
    title: String!
    user: Int!
    content: String!
  }
`

const PostQueries = `
  posts(limit: Int, offset: Int): [Post!]!
  post(id: ID): Post!
  postsOfUser(userId: ID!): [Post!]!
`

const PostMutation = `
  createPost(input: PostInput!): Post
  updatePost(id: ID!, input: PostInput!): Post
  deletePost(id: ID): Boolean
`

export { PostMutation, PostQueries, PostType }
