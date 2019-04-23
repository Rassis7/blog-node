const UserType = `
  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    posts: [Post!]
    comments: [Comment!]
  }

  input UserInput {
    name: String!
    email: String!
  }
`

const UserQueries = `
  user(id: ID!): User
  users(limit: Int, offset: Int): [User!]!
`

const UserMutation = `
  createUser(input: UserInput!): User
  updatedUser(id: ID!, input: UserInput!): User
  deleteUser(id: ID!): Boolean
`

export { UserType, UserQueries, UserMutation }
