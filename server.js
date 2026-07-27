import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Groq from 'groq-sdk'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

/* ═══════════════════════════════════════
   GROQ CLIENT SETUP
   ═══════════════════════════════════════ */
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

/* ═══════════════════════════════════════
   SYSTEM PROMPT — SQD ARCHITECT CONTEXT
   ═══════════════════════════════════════ */
const SYSTEM_PROMPT = `You are the friendly and professional AI assistant for SQD — a premium interior solutions and custom joinery manufacturing company located in SAIF Zone, Sharjah, UAE with over 60 years of experience.

Your role is to help website visitors by answering questions about SQD's services, capabilities, and expertise. Be warm, concise, and helpful.

SQD's services include:
• Residential Interiors — Complete home interior design and execution
• Commercial Interiors — Office, retail, hospitality fit-outs
• Luxury Kitchens — Custom-designed premium kitchens
• Custom Wardrobes & Walk-in Closets — Bespoke storage solutions
• Custom Joinery Manufacturing — Precision joinery for contractors and designers
• CNC Cutting & Machining — Advanced CNC services for custom components
• Wood & Panel Fabrication — High-quality wood and panel processing
• B2B Manufacturing Partnership — Contract manufacturing for interior firms, architects, developers, and suppliers

Key facts:
- Location: SAIF Zone, Sharjah, UAE
- 60+ years of craftsmanship experience
- State-of-the-art production facility in SAIF Zone, Sharjah
- Serves homeowners, contractors, interior designers, architects, developers, and material suppliers across the UAE
- Commitment to quality, durability, and design excellence

If asked about pricing, politely explain that pricing depends on project scope and encourage them to request a quote through the website. If asked something outside SQD's domain, gently redirect the conversation back to how SQD can help them.

Keep responses concise (2-4 sentences) unless the user asks for detailed information.`

/* ═══════════════════════════════════════
   CHAT API ENDPOINT
   ═══════════════════════════════════════ */
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' })
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 512,
    })

    const reply = chatCompletion.choices[0]?.message?.content || 'Sorry, I could not generate a response.'

    res.json({ reply })
  } catch (error) {
    console.error('Groq API error:', error.message)
    res.status(500).json({ error: 'Failed to get response from AI' })
  }
})

/* ═══════════════════════════════════════
   START SERVER
   ═══════════════════════════════════════ */
app.listen(PORT, () => {
  console.log(`✅ SQD Chat server running on http://localhost:${PORT}`)
})
