import { NavLink } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight, ArrowUpRight,
  FileText, Terminal, Scale, BarChart2, PenTool,
  Zap, ShieldCheck, Globe,
  Lock, Building2, ShoppingBag, Factory, Star,
  CheckCircle2, Users, Award, TrendingUp, Lightbulb, Coins
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] } })
}
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

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

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} className={className}
      initial="hidden" animate={inView ? 'show' : 'hidden'}
      variants={fadeUp} custom={delay}>
      {children}
    </motion.div>
  )
}

const products = [
  { icon: <FileText size={21} />, name: 'KsCV Builder', cat: 'AI Resume Builder', desc: '100% selection-rate résumés. ATS-optimized, professionally formatted, instantly downloadable.', link: 'https://kscv.vercel.app', domain: 'kscv.vercel.app', chips: ['ATS Optimized', 'AI Written', 'Templates'] },
  { icon: <Terminal size={21} />, name: 'Mr.K Agent IDE', cat: 'AI Coding Agent', desc: 'Online IDE with built-in AI agent. Write, debug, and deploy code from your browser — clear and blazing fast.', link: 'https://agent02.vercel.app', domain: 'agent02.vercel.app', chips: ['Online IDE', 'AI Agent', 'Multi-lang'] },
  { icon: <Scale size={21} />, name: 'Mr.K Law Agent', cat: 'AI Legal Assistant', desc: 'Solve real legal problems and sharpen law-student skills with AI case research and plain-language explanations.', link: 'https://pickup-law-agent.vercel.app', domain: 'pickup-law-agent.vercel.app', chips: ['Legal Research', 'Case Analysis', 'Education'] },
  { icon: <BarChart2 size={21} />, name: 'View Once DA', cat: 'AI Data Analytics', desc: 'Upload CSV or Excel — AI instantly generates dashboards, visualizations, and full pipeline walkthroughs.', link: 'https://da-agent-tnok.vercel.app', domain: 'da-agent-tnok.vercel.app', chips: ['Auto Dashboard', 'CSV / Excel', 'AI Insights'] },
  { icon: <PenTool size={21} />, name: 'Kdoc AI Editor', cat: 'Canva-Level AI Editor', desc: 'Design-meets-writing editor. Create stunning documents, reports, and content with intelligent assistance.', link: 'https://kdoc.vercel.app', domain: 'kdoc.vercel.app', chips: ['Rich Editor', 'AI Writing', 'Export Ready'] },
]

const features = [
  { icon: <Zap size={19} />, title: 'Fast & Purposeful', desc: 'Every product ships lean, loads instantly, and solves exactly one problem extremely well.' },
  { icon: <ShieldCheck size={19} />, title: 'Secure by Default', desc: 'HTTPS everywhere, no permanent file storage, and transparent AI data handling across all products.' },
  { icon: <Globe size={19} />, title: 'Built for Everyone', desc: 'Students, lawyers, developers, founders — Mr.K products serve every kind of professional.' },
]

const reviews = [
  { name: 'Priya S.', role: 'CS Student, Anna University', avatar: 'P', product: 'KsCV Builder', rating: 5, quote: 'Got my résumé done in 10 minutes and landed 3 interview calls in the same week. The AI-written content is shockingly good — much better than what I wrote myself.' },
  { name: 'Arun K.', role: 'Junior Developer, Chennai', avatar: 'A', product: 'Mr.K Agent IDE', rating: 5, quote: 'The AI coding agent is genuinely useful. It\'s not just autocomplete — it actually understands context, fixes bugs, and explains what it\'s doing. My productivity doubled.' },
  { name: 'Prithivik', role: 'Founder, RV Prithivk E-Shop', avatar: 'M', product: 'Private Client', rating: 5, quote: 'Karuppasamy built our entire factory automation system from scratch. Professional, on-time, and the software runs perfectly. 100% satisfied with the delivery.' },
  { name: 'Deepika S.', role: 'Law Student, Trichy Government Law College', avatar: 'D', product: 'Law Agent', rating: 5, quote: 'Mr.K Law Agent helped me prepare for moot court in half the time. It finds relevant cases, summarizes statutes, and explains legal concepts in plain English. Game changer.' },
  { name: 'Vikram T.', role: 'Data Analyst, Vdart', avatar: 'V', product: 'View Once DA', rating: 5, quote: 'I uploaded a raw dataset and got a full analytics dashboard in seconds. The AI even explained each chart and walked me through the pipeline. Saved me hours of pandas work.' },
  { name: 'Shalini M.', role: 'Content Creator, Coimbatore', avatar: 'S', product: 'Kdoc Editor', rating: 5, quote: 'Kdoc is what I\'ve been waiting for. Beautiful templates, AI that writes with my voice, and it exports perfectly. Finally a tool that feels built for creators.' },
]

const privateProjects = [
  {
    icon: <Factory size={22} />,
    name: 'Dubai AC Duct Manufacturing',
    cat: 'Enterprise Automation Software',
    desc: 'Complete end-to-end factory automation software for a Dubai-based AC duct manufacturing company. Covers inventory management, production tracking, quality control, employee scheduling, and real-time reporting dashboards.',
    chips: ['Inventory System', 'Production Tracking', 'Reporting', 'Enterprise Grade'],
    country: 'Dubai, UAE',
    status: 'Delivered',
  },
  {
    icon: <ShoppingBag size={22} />,
    name: 'Multi-Client E-Commerce Suite',
    cat: 'Full-Stack E-Commerce Development',
    desc: 'Multiple production-grade e-commerce platforms built for clients across India and internationally. Each project includes custom UI, payment integration, order management, admin panel, and deployment.',
    chips: ['Payment Integration', 'Admin Panel', 'Custom UI', 'Full Deployment'],
    country: 'India & International',
    status: 'Multiple Delivered',
  },
]

const trustItems = [
  { icon: <CheckCircle2 size={16} />, label: '100% Project Delivery Rate' },
  { icon: <Users size={16} />, label: 'Global Client Base' },
  { icon: <Award size={16} />, label: 'Google Ambassador' },
  { icon: <TrendingUp size={16} />, label: 'Vdart Intern — Top Performer' },
]

const ticker = ['KsCV Builder', 'Mr.K Agent IDE', 'Law Agent', 'View Once DA', 'Kdoc Editor', 'AI Products', 'Solo Founder', 'Tamil Nadu, India', 'Dubai Clients', 'Google Ambassador']

export default function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-canvas">
          <div className="hero-grid" />
          <motion.div className="hero-orb1"
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div className="hero-orb2"
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

        <div className="wrap hero-content">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} custom={0}>
              <div className="hero-announce">
                <span className="announce-tag">Trusted</span>
                5 Live AI Products · Global Clients · 100% Satisfaction
              </div>
            </motion.div>
            <motion.h1 className="hero-h1" variants={fadeUp} custom={0.05}>
              Build Smarter<br />with <em>Mr.K AI</em>
            </motion.h1>
            <motion.p className="hero-sub" variants={fadeUp} custom={0.1}>
              AI-powered tools for résumés, coding, law, data analytics, and documents.
              Trusted by students, professionals, and enterprise clients worldwide.
            </motion.p>
            <motion.div className="hero-btns" variants={fadeUp} custom={0.15}>
              <NavLink to="/products" className="btn btn-gold btn-lg">
                Explore Products <ArrowRight size={17} />
              </NavLink>
              <NavLink to="/about" className="btn btn-ghost btn-lg">
                About the Founder
              </NavLink>
            </motion.div>
            <motion.div className="hero-metrics" variants={fadeUp} custom={0.2}>
              {[
                { n: '5', s: '+', l: 'Live AI Products' },
                { n: '$1,200', s: '', l: 'Total Invested' },
                { n: '1', s: '', l: 'Active Investor' },
                { n: '100', s: '%', l: 'Client Satisfaction' },
              ].map(m => (
                <div className="metric" key={m.l}>
                  <div className="metric-n">{m.n}<sup>{m.s}</sup></div>
                  <div className="metric-l">{m.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div className="ticker-wrap">
        <div className="ticker-track" aria-hidden>
          {[...ticker, ...ticker].map((t, i) => (
            <span className="ticker-item" key={i}>
              {t}<span className="ticker-sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ PRODUCTS ══ */}
      <section className="section-alt">
        <div className="wrap">
          <Reveal className="sh">
            <span className="pill pill-gold"><span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />Our Products</span>
            <h2 className="sh-h">AI tools that<br />actually work.</h2>
            <p className="sh-sub">Live. Free to try. No downloads. All running on Vercel. Solving real problems.</p>
          </Reveal>
          <div className="pgrid">
            {products.map((p, i) => (
              <motion.div className="pcard" key={p.name}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="pcard-head">
                  <div className="pcard-icon">{p.icon}</div>
                  <span className="pill pill-green"><span className="pulse" />Live</span>
                </div>
                <div className="pcard-name">{p.name}</div>
                <div className="pcard-cat">{p.cat}</div>
                <p className="pcard-desc">{p.desc}</p>
                <div className="pcard-chips">{p.chips.map(c => <span className="chip" key={c}>{c}</span>)}</div>
                <div className="pcard-footer">
                  <a href={p.link} target="_blank" rel="noreferrer" className="launch-btn">
                    Launch App <ArrowUpRight size={13} />
                  </a>
                  <span className="pcard-domain">{p.domain}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRIVATE PROJECTS ══ */}
      <section className="section-dark">
        <div className="wrap">
          <Reveal className="sh">
            <span className="pill" style={{ background: 'rgba(240,180,41,0.1)', border: '1px solid rgba(240,180,41,0.2)', color: 'var(--gold)', marginBottom: 16 }}>
              <Lock size={11} /> Private Client Projects
            </span>
            <h2 className="sh-h" style={{ color: '#fff' }}>Enterprise Work.<br />100% Satisfaction.</h2>
            <p className="sh-sub" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Beyond public products, Mr.K delivers complete custom enterprise software. Every project shipped on time, every client fully satisfied.
            </p>
          </Reveal>

          <div className="pproj-grid">
            {privateProjects.map((p, i) => (
              <motion.div className="pproj" key={p.name}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className="pproj-lock"><Lock size={10} />Confidential Project</div>
                <div className="pproj-icon">{p.icon}</div>
                <div className="pproj-name">{p.name}</div>
                <div className="pproj-cat">{p.cat}</div>
                <p className="pproj-desc">{p.desc}</p>
                <div className="pproj-chips">{p.chips.map(c => <span className="pproj-chip" key={c}>{c}</span>)}</div>
                <div className="pproj-meta">
                  <Globe size={11} />{p.country}
                  <span className="pproj-meta-dot" />
                  <CheckCircle2 size={11} style={{ color: 'var(--green)' }} />
                  <span style={{ color: 'var(--green)' }}>{p.status}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust strip */}
          <motion.div className="trust-strip"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 56 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            {trustItems.map(t => (
              <div className="trust-item" key={t.label} style={{ color: 'rgba(255,255,255,0.4)' }}>
                <div className="trust-icon">{t.icon}</div>
                {t.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="section-alt" style={{ overflow: 'hidden' }}>
        <div className="wrap">
          <Reveal className="sh c">
            <span className="pill pill-gold"><span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />Reviews</span>
            <h2 className="sh-h">What people say<br />about Mr.K.</h2>
            <p className="sh-sub">Real feedback from students, developers, and enterprise clients who use Mr.K products every day.</p>
          </Reveal>
        </div>

        <div className="reviews-outer">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((r, i) => (
              <div className="rcard" key={r.name + '-' + i}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className="rcard-stars">
                    {Array(r.rating).fill(0).map((_, j) => <Star key={j} size={13} fill="var(--gold)" color="var(--gold)" />)}
                  </div>
                  <span className="rcard-product">{r.product}</span>
                </div>
                <p className="rcard-quote">"{r.quote}"</p>
                <div className="rcard-author">
                  <div className="rcard-avatar">{r.avatar}</div>
                  <div>
                    <div className="rcard-name">{r.name}</div>
                    <div className="rcard-role">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY MR.K ══ */}
      <section className="section">
        <div className="wrap">
          <Reveal className="sh c">
            <span className="pill pill-gold"><span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />Why Mr.K</span>
            <h2 className="sh-h">Precision built.<br />Purpose driven.</h2>
            <p className="sh-sub">Every product is crafted with a singular focus — solve the problem completely, ship it fast.</p>
          </Reveal>
          <motion.div className="fgrid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {features.map(f => (
              <motion.div className="fitem" key={f.title} variants={itemVariants}>
                <div className="ficon">{f.icon}</div>
                <div className="ftitle">{f.title}</div>
                <div className="fdesc">{f.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CUSTOM PRODUCT CTA ══ */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <motion.div
            className="cta-panel"
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
            <Lightbulb size={36} color="var(--gold)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: 28, fontWeight: 720, letterSpacing: '-0.6px', marginBottom: 12 }}>
              Got a Custom Idea?
            </h2>
            <p style={{ fontSize: 16, color: 'var(--ink-30)', maxWidth: 520, margin: '0 auto 24px', lineHeight: 1.6 }}>
              If you need a tailored AI product or enterprise solution, I'm here to build it. Submit your requirements and get a custom proposal within 24 hours.
            </p>
            <NavLink to="/enquiry" className="btn btn-gold btn-lg">
              Request Custom Product <ArrowRight size={17} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* ══ PROFIT SHARING INVESTMENT CTA ══ */}
      <section className="section">
        <div className="wrap">
          <motion.div
            className="cta-panel"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'linear-gradient(135deg, var(--ink-80) 0%, var(--ink) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--r20)',
              padding: '56px 48px',
              textAlign: 'center',
              color: 'var(--white)'
            }}
          >
            <Coins size={36} color="var(--gold)" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: 28, fontWeight: 720, letterSpacing: '-0.6px', marginBottom: 12, color: 'var(--white)' }}>
              Subscription Profit Partnerships
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255, 255, 255, 0.7)', maxWidth: 540, margin: '0 auto 24px', lineHeight: 1.6 }}>
              Join <strong style={{ color: 'var(--gold)' }}>1 Active Business Investor</strong> funding the ecosystem. Current total invested capital: <strong style={{ color: 'var(--gold)' }}>$1,200 USD</strong> (converted from <strong style={{ color: 'var(--gold)' }}>₹1,00,000 INR</strong>). Fund a product today and earn returns based on net subscription profits.
            </p>
            <NavLink to="/invest" className="btn btn-gold btn-lg">
              Partner & Invest Now <ArrowRight size={17} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <motion.div className="cta-panel"
            initial={{ opacity: 0, y: 32, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="cta-h">Ready to try<br /><em>Mr.K AI?</em></h2>
            <p className="cta-p">All products are free. Start today — no account required for most tools.</p>
            <div className="cta-btns">
              <NavLink to="/products" className="btn btn-gold btn-lg">View All Products <ArrowRight size={17} /></NavLink>
              <NavLink to="/contact" className="btn btn-ghost-inv btn-lg">Get in Touch</NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
