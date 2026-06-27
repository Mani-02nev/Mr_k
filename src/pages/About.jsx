import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap, Briefcase, Building2, Globe2, Brain, Zap, Trophy,
  Target, Lock, Lightbulb, Handshake, Plane,
  Eye, Compass, Flame, Star, CheckCircle2, TrendingUp, Users, Award,
  ArrowUpRight, ExternalLink
} from 'lucide-react'
import founderImg from '../assets/founder-new.png'
import SEO from '../components/SEO'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const founderTags = [
  { icon: <GraduationCap size={14} />, label: 'Computer Science Student' },
  { icon: <Briefcase size={14} />, label: 'Freelancer — Global Clients' },
  { icon: <Building2 size={14} />, label: 'System Architect' },
  { icon: <Building2 size={14} />, label: 'Vdart Intern' },
  { icon: <Globe2 size={14} />, label: 'Google Ambassador' },
  { icon: <Brain size={14} />, label: 'Strong CS Foundation' },
  { icon: <Zap size={14} />, label: 'Daily Builder & Shipper' },
  { icon: <Trophy size={14} />, label: 'Dubai Enterprise Client' },
]

const vmBlocks = [
  {
    num: '01',
    icon: <Eye size={22} />,
    label: 'Vision',
    title: 'AI for Everyone, Everywhere',
    desc: 'A world where every student, professional, and business — regardless of size or budget — has access to intelligent AI tools that were once exclusive to large corporations.',
  },
  {
    num: '02',
    icon: <Compass size={22} />,
    label: 'Mission',
    title: 'Build. Ship. Solve. Repeat.',
    desc: 'To build fast, purposeful AI products that solve real-world problems completely. No bloat, no complexity — just tools that work from the first click, trusted by thousands.',
  },
  {
    num: '03',
    icon: <Flame size={22} />,
    label: 'Power',
    title: 'One Person. Unlimited Impact.',
    desc: 'Mr.K proves that one skilled, focused individual with the right mindset can outship entire teams. 5 live AI products, enterprise clients in Dubai, and a new idea every day.',
  },
]

const values = [
  { icon: <Zap size={18} />, title: 'Speed', desc: 'Fast products. Fast decisions. Fast shipping. Zero delays.' },
  { icon: <Target size={18} />, title: 'Clarity', desc: 'Simple UI, clear purpose, zero confusion on every product.' },
  { icon: <Lock size={18} />, title: 'Trust', desc: 'Honest about AI limits. Transparent about data handling.' },
  { icon: <Lightbulb size={18} />, title: 'Innovation', desc: 'New ideas every day. The build never stops.' },
  { icon: <Handshake size={18} />, title: 'Accessibility', desc: 'AI tools built for students — not just enterprises.' },
  { icon: <Plane size={18} />, title: 'Global Impact', desc: 'Products used across India, Dubai, and beyond.' },
]

const achievements = [
  { icon: <Star size={16} />, val: '5+', lbl: 'Live AI Products' },
  { icon: <CheckCircle2 size={16} />, val: '100%', lbl: 'Client Satisfaction' },
  { icon: <Globe2 size={16} />, val: '2+', lbl: 'Countries Served' },
  { icon: <TrendingUp size={16} />, val: '∞', lbl: 'Ideas Per Day' },
]

const roles = ['Founder', 'System Architect', 'Freelancer', 'AI/ML Developer', 'Mentor', 'CEO', "GSA"]


export default function About() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="pt-nav">
      <SEO title="About the Founder" description="Learn more about Mr.K, a solo founder AI product company built by Karuppasamy M, an AI/ML developer and Google Ambassador based in Tamil Nadu, India." />

      {/* ══ COMPANY (Top Intro) ══ */}
      <section className="section" style={{ paddingBottom: 60 }}>
        <div className="wrap-sm">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 20 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              AI Ecosystem In Progress
            </span>
            <h1 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 740, letterSpacing: '-2px', lineHeight: 1.08, marginBottom: 24 }}>
              About Mr.K
            </h1>
            <p style={{ fontSize: 18, color: 'var(--ink-30)', lineHeight: 1.82, marginBottom: 20 }}>
              Mr.K is a <strong style={{ color: 'var(--ink)', fontWeight: 640 }}>Solo Founder AI Product Company</strong> — not a Pvt Ltd, not an OPC. It is a trusted brand built by one person with a clear mission: build a complete AI ecosystem (In Progress) and deliver intelligent, practical AI tools that are accessible to everyone.
            </p>
            <p style={{ fontSize: 16, color: 'var(--ink-30)', lineHeight: 1.82, marginBottom: 20 }}>
              From résumé builders to legal agents, data analytics to code IDEs — every product solves a real-world problem and is live, working, and available for free. Mr.K proves that one person with the right skills and mindset can build what teams of hundreds build.
            </p>
            <p style={{ fontSize: 16, color: 'var(--ink-30)', lineHeight: 1.82 }}>
              With enterprise clients in Dubai, internship experience at Vdart, recognition as a Google Ambassador, and 5 live AI products — Mr.K is not just a brand. It's a statement of what's possible when skill meets relentless execution.
            </p>

            {/* Key differentiators */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginTop: 36 }}>
              {[
                { icon: <Award size={15} />, text: 'Trusted by enterprise clients globally' },
                { icon: <Users size={15} />, text: 'Products used by students & professionals' },
                { icon: <CheckCircle2 size={15} />, text: '100% project delivery, zero failures' },
                { icon: <TrendingUp size={15} />, text: 'Constantly shipping new AI products' },
              ].map(d => (
                <div key={d.text} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  background: 'var(--gold-mist)', border: '1px solid var(--gold-border)',
                  borderRadius: 'var(--r8)', padding: '12px 14px'
                }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 1 }}>{d.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#6B4A00', lineHeight: 1.5 }}>{d.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ VISION · MISSION · POWER (Middle) ══ */}
      <section className="section-alt">
        <div className="wrap">
          <motion.div className="sh c"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 16 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              Vision · Mission · Power
            </span>
            <h2 className="sh-h">What drives Mr.K</h2>
            <p className="sh-sub">The north star behind every product, every line of code, and every client delivered.</p>
          </motion.div>

          <motion.div className="vm-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {vmBlocks.map(v => (
              <motion.div className="vm-item" key={v.label} variants={itemVariants}>
                <span className="vm-num">{v.num}</span>
                <div className="vm-icon">{v.icon}</div>
                <div className="vm-label">{v.label}</div>
                <div className="vm-title">{v.title}</div>
                <div className="vm-desc">{v.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ VALUES (Principles) ══ */}
      <section className="section">
        <div className="wrap">
          <motion.div className="sh c"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 16 }}>Values</span>
            <h2 className="sh-h">Built on Principles</h2>
            <p className="sh-sub">The core beliefs that guide every product decision at Mr.K.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {values.map((v, i) => (
              <motion.div key={v.title}
                style={{ background: 'var(--white)', border: '1px solid var(--ink-08)', borderRadius: 'var(--r16)', padding: '28px' }}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.08)', borderColor: 'rgba(240,180,41,0.4)' }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 'var(--r8)',
                  background: 'var(--gold-mist)', border: '1px solid var(--gold-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)', marginBottom: 16
                }}>{v.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 640, color: 'var(--ink)', marginBottom: 8, letterSpacing: '-0.2px' }}>{v.title}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-30)', lineHeight: 1.65 }}>{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ FOUNDER (Bottom - Premium Dark Section) ══ */}
      <section className="section-dark founder-feature-section" style={{ background: '#000', color: '#fff', paddingTop: 100, paddingBottom: 100, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="wrap">
          <div className="founder-feature-grid">
            {/* Left side: Founder Image */}
            <motion.div
              className="founder-feature-img-wrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={founderImg} alt="Karuppasamy M" className="founder-feature-img" />
            </motion.div>

            {/* Right side: Founder Copy */}
            <motion.div
              className="founder-feature-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <span className="founder-feature-meet">Meet</span>
              <h2 className="founder-feature-name" style={{ margin: 0 }}>Karuppasamy</h2>
              <h3 className="founder-feature-title" style={{ display: 'flex', alignItems: 'center', height: '1.2em', textTransform: 'uppercase' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </h3>

              <div className="founder-feature-bio">
                <p>
                  A Computer Science student, freelancer, and solo founder building a complete AI ecosystem (In Progress). With a rock-solid CS foundation and a relentlessly high-skill mindset, Karuppasamy ships new ideas every single day.
                </p>
                <p>
                  Currently interning at Vdart, serving as a Google Ambassador, and delivering enterprise-grade software for clients in Dubai — all while building 5 live AI products from scratch.
                </p>
              </div>

              <div className="founder-feature-tags">
                {founderTags.map(t => (
                  <span className="founder-feature-tag" key={t.label}>
                    <span className="founder-feature-tag-icon">{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <div className="founder-feature-achievements">
                {achievements.map(a => (
                  <div key={a.lbl} className="founder-feature-ach-item">
                    <div className="founder-feature-ach-val-wrap">
                      <span className="founder-feature-ach-icon">{a.icon}</span>
                      <span className="founder-feature-ach-val">{a.val}</span>
                    </div>
                    <span className="founder-feature-ach-lbl">{a.lbl}</span>
                  </div>
                ))}
              </div>

              {/* CTA Links */}
              <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
                <a
                  href="https://mr-k02.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    background: 'var(--gold)', color: '#000',
                    fontWeight: 680, fontSize: 14, padding: '11px 20px',
                    borderRadius: 'var(--r8)', letterSpacing: '-0.2px',
                    textDecoration: 'none', transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <ExternalLink size={14} /> Founder Portfolio
                </a>
                <a
                  href="https://mr-k02.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.85)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    fontWeight: 560, fontSize: 14, padding: '11px 20px',
                    borderRadius: 'var(--r8)', letterSpacing: '-0.2px',
                    textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
                >
                  Mr.K Company Site <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
