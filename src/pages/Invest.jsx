import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, ArrowRight, Coins, DollarSign, Percent, TrendingUp, Handshake } from 'lucide-react'
import { supabase } from '../supabase'

const SEED_INVESTMENTS = [
  {
    id: 'inv-1',
    date: '10 Jun 2026, 09:15 AM',
    name: 'Rohan Sharma',
    company: 'Capitalize Ventures',
    email: 'rohan@capitalize.in',
    whatsapp: '+91 99999 88888',
    amount: 'Growth Funding (₹50,000 - ₹2,00,000 INR)',
    target_product: 'KsCV Builder',
    notes: 'Interested in funding the next major version of KsCV Builder. We can provide ₹1.5L in marketing capital for a 15% revenue share over 12 months.'
  },
  {
    id: 'inv-2',
    date: '10 Jun 2026, 11:45 AM',
    name: 'Lin Xia',
    company: 'Apex Tech Singapore',
    email: 'lin.xia@apextech.sg',
    whatsapp: '+65 8123 4567',
    amount: 'Enterprise Scale (Above ₹2,00,000 INR)',
    target_product: 'Mr.K Agent IDE',
    notes: 'We want to fund the premium subscription tier of the Agent IDE. We are prepared to invest ₹5L to expedite custom Docker sandboxes development for a 20% equity/profit sharing model.'
  }
]

export default function Invest() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    target_product: 'General Company Funding',
    amount: 'Growth Funding (₹50,000 - ₹2,00,000 INR)',
    notes: '',
  })
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Clean formatted date: "10 Jun 2026, 09:15 AM"
    const now = new Date()
    const cleanDate = now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) + 
                      ', ' + 
                      now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

    const newInvestment = {
      ...form,
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
      date: cleanDate,
      timestamp: Date.now()
    }
    
    try {
      const { error } = await supabase.from('investments').insert([newInvestment])
      if (error) throw error

      setSuccess(true)
      setForm({
        name: '',
        company: '',
        email: '',
        whatsapp: '',
        target_product: 'General Company Funding',
        amount: 'Growth Funding (₹50,000 - ₹2,00,000 INR)',
        notes: '',
      })
    } catch (err) {
      console.error('Error saving investment to Supabase:', err)
      // Save locally as fallback
      const saved = localStorage.getItem('mrk_investments')
      const investments = saved ? JSON.parse(saved) : [...SEED_INVESTMENTS]
      investments.unshift(newInvestment)
      localStorage.setItem('mrk_investments', JSON.stringify(investments))
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-nav" style={{ minHeight: '100vh', background: 'var(--ink-02)' }}>
      {/* ══ HERO BANNER ══ */}
      <section className="section" style={{ paddingBottom: 40, paddingTop: 80 }}>
        <div className="wrap-sm" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 20 }}>
              <Coins size={12} style={{ marginRight: 2 }} />
              Profit Sharing Investment
            </span>
            <h1 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 740, letterSpacing: '-2px', lineHeight: 1.08, marginBottom: 20 }}>
              Invest in Mr.K Products
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-30)', lineHeight: 1.75, marginBottom: 32 }}>
              Partner with a highly efficient solo founder shipping live AI products. Fund specific tools or the general ecosystem and participate in structured revenue/profit sharing models.
            </p>
            
            {/* Added metrics */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', borderTop: '1px solid var(--ink-08)', borderBottom: '1px solid var(--ink-08)', padding: '24px 0', maxWidth: 500, margin: '0 auto' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-1px' }}>$12,850</div>
                <div style={{ fontSize: 12, color: 'var(--ink-30)', fontWeight: 500, marginTop: 4 }}>Total Invested (USD)</div>
              </div>
              <div style={{ width: 1, height: 40, background: 'var(--ink-08)', alignSelf: 'center' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-1px' }}>12</div>
                <div style={{ fontSize: 12, color: 'var(--ink-30)', fontWeight: 500, marginTop: 4 }}>Active Business Partners</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ VALUE PROP CARDS ══ */}
      <section className="section" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {[
              {
                icon: <Percent size={20} />,
                title: 'Structured Profit Share',
                desc: 'Earn a recurring percentage of the revenue generated by the specific product you fund, tracked transparently.'
              },
              {
                icon: <TrendingUp size={20} />,
                title: 'Proven User Bases',
                desc: 'Fund products that are already live and being actively used by students, developers, and professionals.'
              },
              {
                icon: <Handshake size={20} />,
                title: 'Solo Founder Efficiency',
                desc: 'Zero corporate overhead. 100% of your investment goes directly into product engineering, design, and marketing.'
              }
            ].map((v, i) => (
              <motion.div
                key={v.title}
                style={{ background: 'var(--white)', border: '1px solid var(--ink-08)', borderRadius: 'var(--r16)', padding: '24px' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: 'var(--s2)', borderColor: 'rgba(240,180,41,0.3)' }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 'var(--r8)',
                  background: 'var(--gold-mist)', border: '1px solid var(--gold-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)', marginBottom: 16
                }}>{v.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 640, color: 'var(--ink)', marginBottom: 8, letterSpacing: '-0.2px' }}>{v.title}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-30)', lineHeight: 1.6 }}>{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FORM SECTION ══ */}
      <section className="section" style={{ padding: '0 0 100px' }}>
        <div className="wrap-sm">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="invest-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <form className="cf" onSubmit={handleSubmit} style={{ background: 'var(--white)' }}>
                  <div style={{ marginBottom: 28 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 6 }}>
                      Submit Investment Proposal
                    </h2>
                    <p style={{ color: 'var(--ink-30)', fontSize: 13.5 }}>
                      Fill in your proposal details, and the founder will review it on the Admin Workspace.
                    </p>
                  </div>

                  <div className="frow">
                    <div className="ff">
                      <label htmlFor="inv-name">Investor / Organization Name</label>
                      <input
                        id="inv-name"
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="ff">
                      <label htmlFor="inv-company">Company Name (Optional)</label>
                      <input
                        id="inv-company"
                        type="text"
                        placeholder="Jenkins Capital"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="ff">
                      <label htmlFor="inv-email">Email Address</label>
                      <input
                        id="inv-email"
                        type="email"
                        required
                        placeholder="sarah@jenkins.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="ff">
                      <label htmlFor="inv-whatsapp">WhatsApp Number</label>
                      <input
                        id="inv-whatsapp"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="frow">
                    <div className="ff">
                      <label htmlFor="inv-target">Select Product to Invest In</label>
                      <select
                        id="inv-target"
                        value={form.target_product}
                        onChange={(e) => setForm({ ...form, target_product: e.target.value })}
                      >
                        <option value="General Company Funding">General Company Funding</option>
                        <option value="KsCV Builder">KsCV Builder</option>
                        <option value="Mr.K Agent IDE">Mr.K Agent IDE</option>
                        <option value="Law Agent">Law Agent</option>
                        <option value="View Once DA">View Once DA</option>
                        <option value="Kdoc Editor">Kdoc Editor</option>
                        <option value="Other Custom Tech Product">Other Custom Tech Product</option>
                      </select>
                    </div>
                    <div className="ff">
                      <label htmlFor="inv-amount">Desired Investment Scale</label>
                      <select
                        id="inv-amount"
                        value={form.amount}
                        onChange={(e) => setForm({ ...form, amount: e.target.value })}
                      >
                        <option value="Micro Investment (₹10,000 - ₹50,000 INR)">Micro Investment (₹10,000 - ₹50,000 INR)</option>
                        <option value="Growth Funding (₹50,000 - ₹2,00,000 INR)">Growth Funding (₹50,000 - ₹2,00,000 INR)</option>
                        <option value="Enterprise Scale (Above ₹2,00,000 INR)">Enterprise Scale (Above ₹2,00,000 INR)</option>
                      </select>
                    </div>
                  </div>

                  <div className="ff">
                    <label htmlFor="inv-notes">Investment Offer & Profit Sharing Proposal</label>
                    <textarea
                      id="inv-notes"
                      required
                      placeholder="Outline your funding offer, preferred profit split, marketing assets you can bring, or query details..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold btn-lg"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}
                    disabled={loading}
                  >
                    {loading ? 'Submitting Proposal...' : 'Submit Investment Offer'} <Send size={15} />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="invest-success"
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
                  Proposal Received!
                </h2>
                <p style={{ color: 'var(--ink-30)', maxWidth: 460, margin: '0 auto 32px', lineHeight: 1.6 }}>
                  Thank you for your interest in funding Mr.K. The founder will review your profit-sharing proposal and contact you via Email or WhatsApp shortly.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                  <button className="btn btn-gold" onClick={() => setSuccess(false)}>
                    Submit Another Offer <Send size={13} />
                  </button>
                  <a href="/" className="btn btn-ghost">
                    Back to Home <ArrowRight size={13} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
