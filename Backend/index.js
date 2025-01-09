import express from 'express';
import {createdb} from './lib/db.js'
import dotenv from 'dotenv'
dotenv.config()
import authRoutes from './routes/auth.routes.js';
const app = express()
const port = process.env.PORT || 3000;


createdb()
app.use("api/auth", authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})