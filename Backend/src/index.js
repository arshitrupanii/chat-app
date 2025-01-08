import express from 'express';
import authRoutes from '../routes/auth.routes.js';
const app = express()
const port = 3000

app.use("api/auth", authRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})