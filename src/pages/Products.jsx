import { motion } from 'framer-motion'
import {
  ArrowUpRight, FileText, Terminal, Scale, BarChart2, PenTool,
  Building2, ShoppingBag, Factory, Lock, Globe2, CheckCircle2, Star
} from 'lucide-react'

const products = [
  { icon: <FileText size={24} />, name: 'KsCV Builder', cat: 'AI Resume Builder', desc: 'AI-powered résumé builder that crafts ATS-optimized, professionally formatted CVs. Upload your details and get a job-winning résumé with a 100% selection rate.', link: 'https://kscv.vercel.app', domain: 'kscv.vercel.app', chips: ['ATS Optimized', 'AI Written Content', 'Multiple Templates', 'Instant Download'] },
  { icon: <Terminal size={24} />, name: 'Mr.K Agent IDE', cat: 'AI Coding Agent & Online IDE', desc: 'A clear and blazing-fast online IDE powered by an AI coding agent. Write, debug, and ship code from your browser with intelligent AI assistance at every step.', link: 'https://agent02.vercel.app', domain: 'agent02.vercel.app', chips: ['AI Code Generation', 'Online IDE', 'Fast Execution', 'Multi-language'] },
  { icon: <Scale size={24} />, name: 'Mr.K Law Agent', cat: 'AI Legal Assistant', desc: 'Solve real law problems and supercharge law-student skills. Get AI-powered legal research, case summaries, statute lookups, and plain-language explanations instantly.', link: 'https://pickup-law-agent.vercel.app', domain: 'pickup-law-agent.vercel.app', chips: ['Legal Research', 'Case Analysis', 'Student Learning', 'Plain Language'] },
  { icon: <BarChart2 size={24} />, name: 'View Once DA', cat: 'AI Data Analytics Dashboard', desc: 'Upload any CSV or Excel dataset — AI automatically creates a full analytics dashboard, rich visualizations, and walks you through every data pipeline step in detail.', link: 'https://da-agent-tnok.vercel.app', domain: 'da-agent-tnok.vercel.app', chips: ['Auto Dashboard', 'CSV / Excel Upload', 'AI Insights', 'Pipeline Steps'] },
  { icon: <PenTool size={24} />, name: 'Kdoc AI Editor', cat: 'Canva-Level AI Document Editor', desc: 'A powerful AI-assisted document editor combining beautiful design with intelligent writing. Create stunning documents, reports, and content with templates and live AI assistance.', link: 'https://kdoc.vercel.app', domain: 'kdoc.vercel.app', chips: ['AI Writing', 'Design Templates', 'Rich Editor', 'Export Ready'] },
]

const privateProjects = [
  {
    icon: <Factory size={22} />,
    name: 'Dubai AC Duct Manufacturing — Full Automation',
    cat: 'Enterprise Factory Automation Software',
    desc: 'End-to-end factory automation platform for a Dubai-based AC duct manufacturing company. Covers real-time inventory management, production line tracking, quality control workflow, employee scheduling, cost calculation, and executive reporting dashboards. Delivered on time with full client sign-off.',
    chips: ['Inventory Management', 'Production Tracking', 'Quality Control', 'Employee Scheduling', 'Real-time Dashboards', 'Enterprise Grade'],
    country: 'Dubai, UAE',
    status: 'Delivered · 100% Satisfied',
    type: 'Private Enterprise',
  },
  {
    icon: <ShoppingBag size={22} />,
    name: 'Multi-Client E-Commerce Suite',
    cat: 'Full-Stack E-Commerce Development',
    desc: 'Multiple production-grade e-commerce platforms built for clients across India and internationally. Each project includes custom UI/UX design, payment gateway integration, product management, order tracking, customer accounts, admin dashboard, SEO optimization, and full production deployment.',
    chips: ['Custom UI/UX', 'Payment Gateway', 'Order Management', 'Admin Dashboard', 'SEO Optimized', 'Full Deployment'],
    country: 'India & International',
    status: 'Multiple Delivered · All Satisfied',
    type: 'Private Clients',
  },
]

const productReviews = [
  { product: 'KsCV Builder', name: 'Priya S.', role: 'CS Student, Anna University', avatar: 'P', rating: 5, quote: 'Got my résumé done in 10 minutes and landed 3 interview calls in the same week. The AI-written content is shockingly good — much better than anything I wrote myself.' },
  { product: 'Mr.K Agent IDE', name: 'Arun K.', role: 'Junior Developer, Chennai', avatar: 'A', rating: 5, quote: 'The AI coding agent is genuinely useful — not just autocomplete. It understands context, fixes bugs, and explains what it\'s doing. My productivity doubled overnight.' },
  { product: 'Law Agent', name: 'Deepika R.', role: 'Law Student, NLS Bangalore', avatar: 'D', rating: 5, quote: 'Helped me prepare for moot court in half the time. It finds relevant cases, summarizes statutes, and explains legal concepts in plain English. An absolute game changer.' },
  { product: 'View Once DA', name: 'Vikram T.', role: 'Data Analyst, Bangalore', avatar: 'V', rating: 5, quote: 'I uploaded a raw dataset and got a full analytics dashboard in seconds. The AI explained each chart and walked me through the pipeline. Saved me hours of pandas work.' },
  { product: 'Kdoc Editor', name: 'Shalini M.', role: 'Content Creator, Coimbatore', avatar: 'S', rating: 5, quote: 'Kdoc is what I\'ve been waiting for. Beautiful templates, AI that writes with my voice, and perfect exports. Finally a tool that feels built for creators like me.' },
  { product: 'Private Client', name: 'Mohammed F.', role: 'Operations Manager, Dubai', avatar: 'M', rating: 5, quote: 'Karuppasamy built our entire factory automation system. Professional, on-time, and the software runs flawlessly. We are 100% satisfied with everything delivered.' },
]

export default function Products() {
  return (
    <div className="pt-nav">
      {/* Header */}
      <div className="products-hero">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 20 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              5 Live Products · 2 Enterprise Clients
            </span>
            <h1 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 720, letterSpacing: '-2px', lineHeight: 1.08, marginBottom: 16 }}>
              Products & Work<br />by Mr.K
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-30)', maxWidth: 520, lineHeight: 1.7 }}>
              Five live AI tools solving real problems, plus enterprise software delivered to clients in Dubai and globally. All built by one person.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product List */}
      <section className="section">
        <div className="wrap">
          <motion.div className="sh"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 14 }}>
              <span className="pulse" />AI Products
            </span>
            <h2 className="sh-h">Public AI Products</h2>
            <p className="sh-sub">All products are live, free to try, and running on Vercel.</p>
          </motion.div>
          <div className="prod-list">
            {products.map((p, i) => (
              <motion.div className="prod-row" key={p.name}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="prod-row-left">
                  <div className="prod-row-icon">{p.icon}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                      <div className="prod-row-name">{p.name}</div>
                      <span className="pill pill-green" style={{ fontSize: 10 }}>
                        <span className="pulse" />Live
                      </span>
                    </div>
                    <div className="prod-row-tag">{p.cat}</div>
                    <p className="prod-row-desc">{p.desc}</p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {p.chips.map(c => <span className="chip" key={c}>{c}</span>)}
                    </div>
                  </div>
                </div>
                <div className="prod-row-right">
                  <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-gold">
                    Launch App <ArrowUpRight size={14} />
                  </a>
                  <div className="prod-row-domain">{p.domain}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Projects */}
      <section className="section-dark">
        <div className="wrap">
          <motion.div className="sh"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="pill" style={{ background: 'rgba(240,180,41,0.1)', border: '1px solid rgba(240,180,41,0.2)', color: 'var(--gold)', marginBottom: 16 }}>
              <Lock size={11} /> Private Enterprise Projects
            </span>
            <h2 className="sh-h" style={{ color: '#fff' }}>Trusted by Businesses.<br />Delivered with Precision.</h2>
            <p className="sh-sub" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Confidential enterprise software built for real businesses. Client identities protected — results are not.
            </p>
          </motion.div>

          <div className="pproj-grid">
            {privateProjects.map((p, i) => (
              <motion.div className="pproj" key={p.name}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className="pproj-lock"><Lock size={10} />Confidential · {p.type}</div>
                <div className="pproj-icon">{p.icon}</div>
                <div className="pproj-name">{p.name}</div>
                <div className="pproj-cat">{p.cat}</div>
                <p className="pproj-desc">{p.desc}</p>
                <div className="pproj-chips">{p.chips.map(c => <span className="pproj-chip" key={c}>{c}</span>)}</div>
                <div className="pproj-meta">
                  <Globe2 size={11} />{p.country}
                  <span className="pproj-meta-dot" />
                  <CheckCircle2 size={11} style={{ color: 'var(--green)' }} />
                  <span style={{ color: 'var(--green)' }}>{p.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Reviews */}
      <section className="section-alt" style={{ overflow: 'hidden' }}>
        <div className="wrap">
          <motion.div className="sh c"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 16 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              Reviews
            </span>
            <h2 className="sh-h">What users & clients say</h2>
            <p className="sh-sub">Real feedback from students, developers, and enterprise clients using Mr.K products.</p>
          </motion.div>
        </div>

        <div className="reviews-outer">
          <div className="reviews-track">
            {[...productReviews, ...productReviews].map((r, i) => (
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
    </div>
  )
}
