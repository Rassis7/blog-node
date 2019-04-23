import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import graphqlHttp from 'express-graphql'

import schema from './graphql/schema'
import dotenv from 'dotenv'

import schemaModels from './schemas'

dotenv.config()

class App {
  public express: express.Application

  /**
   * construct
   */
  public constructor () {
    this.express = express()

    this.middleware()
    this.database()
  }

  private middleware (): void {
    this.express.use(express.json())
    this.express.use(cors())

    this.express.use('/api', graphqlHttp({
      schema,
      graphiql: process.env.NODE_ENV === 'development',
      context: {
        models: schemaModels
      }
    })

    )
  }

  private database (): void {
    mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {
      useNewUrlParser: true
    })
  }
}

const app = new App().express

app.listen(process.env.SERVER_PORT)
