import Groq from 'groq-sdk'

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
   VERCEL SERVERLESS FUNCTION HANDLER
   ═══════════════════════════════════════ */
export default async function handler(req, res) {
  // Handle CORS preflight if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { messages } = req.body || {}

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      console.error('GROQ_API_KEY environment variable is missing')
      return res.status(500).json({ error: 'GROQ_API_KEY is not configured on server' })
    }

    const groq = new Groq({ apiKey })

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

    return res.status(200).json({ reply })
  } catch (error) {
    console.error('Groq API error:', error.message)
    return res.status(500).json({ error: 'Failed to get response from AI' })
  }
}
