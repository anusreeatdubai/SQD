import { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

/* ═══════════════════════════════════════
   CHATBOT WIDGET COMPONENT
   Groq-powered AI assistant for SQD
   ═══════════════════════════════════════ */

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: 'Hello! 👋 Welcome to SQD. I\'m here to help you with any questions about our interior design services, custom joinery, or manufacturing capabilities. How can I assist you today?',
}

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  /* Auto-scroll to latest message */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  /* Focus input when chat opens */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 350)
    }
  }, [isOpen])

  /* Toggle chat window */
  const toggleChat = () => setIsOpen((prev) => !prev)

  /* Send message to backend */
  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage = { role: 'user', content: trimmed }
    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      // Send only role/content pairs (exclude the welcome message system role)
      const apiMessages = updatedMessages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .map(({ role, content }) => ({ role, content }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I\'m having trouble connecting right now. Please try again in a moment, or contact us directly through the form below.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  /* Handle Enter key */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* ── Chat Window ── */}
      <div className={`chatbot-window ${isOpen ? 'visible' : ''}`} id="chatbot-window">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8" /><rect x="2" y="8" width="20" height="12" rx="2" /><path d="M6 12h.01" /><path d="M18 12h.01" /><path d="M9 16c.6.6 1.5 1 2.5 1s1.9-.4 2.5-1" />
              </svg>
            </div>
            <div className="chatbot-header-text">
              <h4>SQD Architect</h4>
              <span>Powered by AI • Online</span>
            </div>
          </div>
          <button className="chatbot-close" onClick={toggleChat} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages" id="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-msg ${msg.role === 'user' ? 'user' : 'bot'}`}>
              {msg.content}
            </div>
          ))}
          {isLoading && (
            <div className="chatbot-typing">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chatbot-input-area">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about our services..."
            disabled={isLoading}
            id="chatbot-input"
          />
          <button
            className="chatbot-send"
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
            id="chatbot-send-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        <div className="chatbot-footer">SQD Architect • AI Assistant</div>
      </div>

      {/* ── Floating Toggle Button ── */}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        id="chatbot-toggle-btn"
      >
        {/* Chat icon */}
        <svg className="icon-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {/* Close icon */}
        <svg className="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </>
  )
}

export default Chatbot
