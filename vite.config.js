import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import handler from './api/chat.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  if (env.GROQ_API_KEY) {
    process.env.GROQ_API_KEY = env.GROQ_API_KEY
  }

  return {
    plugins: [
      react(),
      {
        name: 'api-chat-middleware',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method === 'OPTIONS') {
              res.setHeader('Access-Control-Allow-Origin', '*')
              res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
              res.statusCode = 200
              res.end()
              return
            }

            if (req.method === 'POST') {
              let body = ''
              req.on('data', chunk => { body += chunk })
              req.on('end', async () => {
                try {
                  req.body = JSON.parse(body)
                } catch {
                  req.body = {}
                }

                // Add Express/Vercel helper methods to response object
                res.status = (code) => {
                  res.statusCode = code
                  return res
                }
                res.json = (data) => {
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(data))
                  return res
                }

                try {
                  await handler(req, res)
                } catch (err) {
                  console.error('Chat middleware error:', err)
                  res.status(500).json({ error: 'Internal server error in dev middleware' })
                }
              })
            } else {
              res.statusCode = 405
              res.end('Method Not Allowed')
            }
          })
        }
      }
    ]
  }
})

