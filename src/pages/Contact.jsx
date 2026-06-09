import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Mail, MapPin, ArrowUpRight, CheckCircle2, Send, Lightbulb } from 'lucide-react'

const quickLinks = [
  ['KsCV Builder', 'https://kscv.vercel.app'],
  ['Mr.K Agent IDE', 'https://agent02.vercel.app'],
  ['Mr.K Law Agent', 'https://pickup-law-agent.vercel.app'],
  ['View Once DA', 'https://da-agent-tnok.vercel.app'],
  ['Kdoc Editor', 'https://kdoc.vercel.app'],
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <div className="pt-nav">
      <section className="products-hero">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 20 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              Contact
            </span>
            <h1 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 720, letterSpacing: '-2px', lineHeight: 1.08, marginBottom: 16 }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-30)', maxWidth: 460, lineHeight: 1.7 }}>
              Have a project idea, collaboration request, or product feedback? Let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-split">
            {/* Left */}
            <motion.div
              className="contact-side"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="c-info">
                <div className="c-info-item">
                  <div className="c-icon"><Mail size={16} /></div>
                  <div>
                    <div className="c-lbl">Email</div>
                    <div className="c-val">karuppasamy.murugesan02@gmail.com</div>
                  </div>
                </div>
                <div className="c-info-item">
                  <div className="c-icon"><MapPin size={16} /></div>
                  <div>
                    <div className="c-lbl">Location</div>
                    <div className="c-val">Tamil Nadu, India</div>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'var(--white)', border: '1px solid var(--ink-08)',
                borderRadius: 'var(--r16)', padding: '28px 28px',
                boxShadow: 'var(--s2)'
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-30)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 18 }}>
                  Quick Links
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {quickLinks.map(([name, link]) => (
                    <a
                      key={name} href={link} target="_blank" rel="noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 12px', borderRadius: 'var(--r8)',
                        fontSize: 14, fontWeight: 500, color: 'var(--ink-50)',
                        transition: 'all 0.15s', border: '1px solid transparent'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-mist)'; e.currentTarget.style.borderColor = 'var(--gold-border)'; e.currentTarget.style.color = 'var(--ink)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = 'var(--ink-50)' }}
                    >
                      {name}
                      <ArrowUpRight size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {sent ? (
                <div className="cf" style={{ textAlign: 'center', padding: '72px 40px' }}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle2 size={52} color="var(--green)" style={{ margin: '0 auto 20px' }} />
                  </motion.div>
                  <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.5px' }}>Message Sent!</div>
                  <p style={{ fontSize: 15, color: 'var(--ink-30)' }}>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form className="cf" onSubmit={handleSubmit}>
                  <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.4px', marginBottom: 28 }}>Send a Message</div>
                  <div className="frow">
                    <div className="ff">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your name" required />
                    </div>
                    <div className="ff">
                      <label>Email Address</label>
                      <input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="ff">
                    <label>Subject</label>
                    <select required>
                      <option value="">Select a topic</option>
                      <option>Product Feedback</option>
                      <option>Client Project</option>
                      <option>Collaboration</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="ff">
                    <label>Message</label>
                    <textarea placeholder="Tell me about your project or inquiry..." required />
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', height: 48 }}>
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Custom Product Request */}
      <section className="section-alt">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'linear-gradient(135deg, var(--gold-soft) 0%, var(--gold-mist) 100%)',
              border: '1px solid var(--gold-border)',
              borderRadius: 'var(--r20)',
              padding: '56px 48px',
              textAlign: 'center'
            }}
          >
            <Lightbulb size={40} color="var(--gold)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: 28, fontWeight: 720, letterSpacing: '-0.6px', marginBottom: 12 }}>
              Need a Custom Product?
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-30)', maxWidth: 520, margin: '0 auto 24px', lineHeight: 1.6 }}>
              Not finding exactly what you need? I build custom AI products and enterprise software solutions. Tell me your requirements and I'll create a personalized proposal.
            </p>
            <NavLink to="/enquiry" className="btn btn-gold btn-lg">
              Request a Custom Product <ArrowUpRight size={17} />
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
