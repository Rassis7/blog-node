import * as express from 'express'
import mongoose from 'mongoose'

class App {
  public express = express.application

  /**
   * construct
   */
  public constructor () {
    this.express = express()
    this.middleware()
    this.database()
    this.routes()
  }

  private middleware (): void {
    this.express.use(express.json())
  }

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true
    })
  }

  private routes (): void {
    this.express.get('/', (req, res) => {
      return res.send('hello word')
    })
  }
}

export default new App().express
