import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import { supabase } from '../supabase'

const SEED_RECORDS = [
  {
    id: 'req-1',
    date: '09 Jun 2026, 10:30 PM',
    name: 'Sarah Jenkins',
    email: 'sarah@nexusfin.tech',
    whatsapp: '+1 555-0199',
    title: 'AI Portfolio Optimizer',
    type: 'AI Agent & Automation (LLM, Chatbots, Workflows)',
    budget: 'Professional / Enterprise (₹50,000 - ₹1,50,000 INR)',
    description: 'An intelligent automated agent that balances crypto and stock portfolios based on daily sentiment analysis and historical market patterns.'
  },
  {
    id: 'req-2',
    date: '09 Jun 2026, 11:12 PM',
    name: 'Ahamed Al-Mansoori',
    email: 'contact@mansoorigroups.ae',
    whatsapp: '+971 50 123 4567',
    title: 'Real Estate CRM Integration',
    type: 'SaaS / Web Application (React, Next.js, Node)',
    budget: 'Startup / Mid Scale (₹15,000 - ₹50,000 INR)',
    description: 'A property portal showing real-time listings with custom filtering for clients based in Dubai, integrating automatic email updates.'
  },
  {
    id: 'req-3',
    date: '09 Jun 2026, 11:35 PM',
    name: 'Karuppasamy M',
    email: 'mani@mrk.inc',
    whatsapp: '+91 98765 43210',
    title: 'AI Ecosystem Portal',
    type: 'Full-Stack Custom Software (ERP/CRM)',
    budget: 'Large Scale Custom Solutions (Above ₹1,50,000 INR)',
    description: 'The unified control portal for shipping, tracking, and debugging autonomous AI agents and standard web apps.'
  }
]

export default function Enquiry() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    title: '',
    type: 'AI Agent & Automation (LLM, Chatbots, Workflows)',
    budget: 'Micro / Small Project (₹4,000 - ₹15,000 INR)',
    description: '',
  })
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Clean formatted date: "09 Jun 2026, 11:35 PM"
    const now = new Date()
    const cleanDate = now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) + 
                      ', ' + 
                      now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

    const newEnquiry = {
      ...form,
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
      date: cleanDate,
      timestamp: Date.now()
    }
    
    try {
      const { error } = await supabase.from('enquiries').insert([newEnquiry])
      if (error) throw error

      setSuccess(true)
      setForm({
        name: '',
        email: '',
        whatsapp: '',
        title: '',
        type: 'AI Agent & Automation (LLM, Chatbots, Workflows)',
        budget: 'Micro / Small Project (₹4,000 - ₹15,000 INR)',
        description: '',
      })
    } catch (err) {
      console.error('Error saving to Supabase:', err)
      alert('Failed to submit project request. Please check your network connection and try again.')
    }
  }

  return (
    <div className="legal-page pt-nav" style={{ minHeight: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center' }}>
      <SEO title="Project Enquiry" description="Describe your software project, web application, custom automation, or AI Agent requirements to get a custom development proposal." />
      <div className="wrap-sm" style={{ width: '100%' }}>
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <span className="pill pill-gold" style={{ marginBottom: 16 }}>Enquiry Form</span>
                <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 720, letterSpacing: '-2.5px', lineHeight: 1.1, marginBottom: 12 }}>
                  Request a Project
                </h1>
                <p style={{ color: 'var(--ink-30)', fontSize: 15 }}>
                  Want to build a perfect and fast AI Agent, custom web app, or automation suite? Describe your requirements below.
                </p>
              </div>

              <form className="cf" onSubmit={handleSubmit}>
                <div className="frow">
                  <div className="ff">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="ff">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="frow">
                  <div className="ff">
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    />
                  </div>
                  <div className="ff">
                    <label htmlFor="title">Project / Product Name</label>
                    <input
                      id="title"
                      type="text"
                      required
                      placeholder="AI Resume Analyzer"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                  </div>
                </div>

                <div className="frow">
                  <div className="ff">
                    <label htmlFor="type">Product Type</label>
                    <select
                      id="type"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                    >
                      <option value="AI Agent & Automation (LLM, Chatbots, Workflows)">AI Agent & Automation (LLM, Chatbots, Workflows)</option>
                      <option value="Telegram / WhatsApp Automation Bot">Telegram / WhatsApp Automation Bot</option>
                      <option value="SaaS / Web Application (React, Next.js, Node)">SaaS / Web Application (React, Next.js, Node)</option>
                      <option value="Premium Portfolio & Landing Page">Premium Portfolio & Landing Page</option>
                      <option value="Custom Web Scraping & Data Extraction">Custom Web Scraping & Data Extraction</option>
                      <option value="E-Commerce Store & Custom Payments">E-Commerce Store & Custom Payments</option>
                      <option value="Mobile App Development (Android/iOS)">Mobile App Development (Android/iOS)</option>
                      <option value="Full-Stack Custom Software (ERP/CRM)">Full-Stack Custom Software (ERP/CRM)</option>
                      <option value="Other Custom Tech Requirement">Other Custom Tech Requirement</option>
                    </select>
                  </div>
                  <div className="ff">
                    <label htmlFor="budget">Budget Scale (INR)</label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    >
                      <option value="Micro / Small Project (₹4,000 - ₹15,000 INR)">Micro / Small Project (₹4,000 - ₹15,000 INR)</option>
                      <option value="Startup / Mid Scale (₹15,000 - ₹50,000 INR)">Startup / Mid Scale (₹15,000 - ₹50,000 INR)</option>
                      <option value="Professional / Enterprise (₹50,000 - ₹1,50,000 INR)">Professional / Enterprise (₹50,000 - ₹1,50,000 INR)</option>
                      <option value="Large Scale Custom Solutions (Above ₹1,50,000 INR)">Large Scale Custom Solutions (Above ₹1,50,000 INR)</option>
                      <option value="Custom Budget (To be discussed)">Custom Budget (To be discussed)</option>
                    </select>
                  </div>
                </div>

                <div className="ff">
                  <label htmlFor="description">Detailed Requirements</label>
                  <textarea
                    id="description"
                    required
                    placeholder="Describe what your product does, custom features needed, integrations required..."
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
                  Submit Requirement <Send size={15} />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--ink-08)',
                borderRadius: 'var(--r24)',
                padding: '60px 40px',
                textAlign: 'center',
                boxShadow: 'var(--s4)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, color: 'var(--green)' }}>
                <CheckCircle2 size={64} strokeWidth={1.5} />
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 740, letterSpacing: '-1.5px', marginBottom: 12 }}>
                Requirement Saved!
              </h2>
              <p style={{ color: 'var(--ink-30)', maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.6 }}>
                Your requirement has been saved successfully to the database records. The founder, **Karuppasamy M**, will review your details and contact you shortly.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                <button className="btn btn-gold" onClick={() => setSuccess(false)}>
                  Submit Another Project <Send size={13} />
                </button>
                <a href="/" className="btn btn-ghost">
                  Back to Home <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
