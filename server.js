import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import handler from './api/chat.js'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

/* Forward POST /api/chat requests to Vercel handler */
app.post('/api/chat', (req, res) => handler(req, res))

app.listen(PORT, () => {
  console.log(`✅ SQD Chat server running on http://localhost:${PORT}`)
})
