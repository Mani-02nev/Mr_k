import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import SEO from '../components/SEO'
import { 
  ArrowUpRight, CheckCircle2, Send, Briefcase, DollarSign, Clock, 
  ShieldAlert, Lightbulb, ChevronRight, HelpCircle, FileText, Code, 
  Palette, UserCheck 
} from 'lucide-react'
import { supabase } from '../supabase'

const OPEN_POSITIONS = [
  {
    id: 'product-director',
    title: 'Product Director',
    icon: <UserCheck size={20} />,
    department: 'Product Management',
    pay: '₹40,000 - ₹1,20,000 / project milestone',
    summary: 'Lead product definition, establish clear feature specifications, and orchestrate ship cycles for Mr.K AI products.',
    responsibilities: [
      'Create high-fidelity product specification docs (PRDs).',
      'Oversee design consistency and premium user experience (UX) guidelines.',
      'Coordinate milestone tasks for engineering and editing teams.'
    ],
    requirements: [
      'Prior experience managing software products (SaaS, AI, or Web apps).',
      'Strong eye for detail, premium design aesthetics, and UI/UX flows.',
      'Clear, written documentation skills in English.'
    ]
  },
  {
    id: 'editor',
    title: 'Editor / Content Strategist',
    icon: <FileText size={20} />,
    department: 'Marketing & Copy',
    pay: '₹20,000 - ₹50,000 / project milestone',
    summary: 'Craft high-ranking SEO copy, premium landing page content, documentation, and updates for the Mr.K active ecosystem.',
    responsibilities: [
      'Write technical product updates and detailed step-by-step guides.',
      'Optimize web pages for Google-level search optimization (SEO/GEO).',
      'Ensure clear, concise brand messaging across all active channels.'
    ],
    requirements: [
      'Strong writing portfolio showing tech product guides or SaaS copy.',
      'Familiarity with Markdown, SEO keywords, and metadata structures.',
      'Relentless attention to grammar, clarity, and formatting.'
    ]
  },
  {
    id: 'ai-developer',
    title: 'Full-Stack AI Developer',
    icon: <Code size={20} />,
    department: 'Engineering',
    pay: '₹50,000 - ₹1,50,000 / project milestone',
    summary: 'Build, maintain, and ship core features for the Mr.K Agent IDE, Law Agent, and other upcoming custom AI applications.',
    responsibilities: [
      'Integrate Large Language Models (LLMs), vectors, and custom sandboxes.',
      'Develop clean React / Vite / Node interfaces and components.',
      'Optimize performance, database schema connections, and API routes.'
    ],
    requirements: [
      'Proven experience with React, Next.js, Node.js, and Supabase/SQL.',
      'Hands-on experience with OpenAI, Gemini, or Claude API integrations.',
      'Fast build-and-ship mindset; code cleanly and document core systems.'
    ]
  },
  {
    id: 'uiux-designer',
    title: 'UI/UX Designer',
    icon: <Palette size={20} />,
    department: 'Design',
    pay: '₹25,000 - ₹70,000 / project milestone',
    summary: 'Design state-of-the-art visual assets, dark-mode premium dashboard systems, and interactive glassmorphic web portals.',
    responsibilities: [
      'Create high-fidelity Figma components, interfaces, and layouts.',
      'Design clean icon sets, banners, and marketing assets.',
      'Ensure mobile-first responsiveness and interactive transitions.'
    ],
    requirements: [
      'Stunning Dribbble, Behance, or personal portfolio of web interfaces.',
      'Mastery of Figma, layout grids, typography, and dark-theme palettes.',
      'Ability to translate complex user scenarios into simple visual workflows.'
    ]
  }
]

const FAQS = [
  {
    q: 'How does the Task-Based / WFH model work?',
    a: 'We work fully asynchronously. We do not count hours or require you to join daily standup calls. Instead, we break features into milestone tasks with set deadlines and payout values. You complete the task, we verify the delivery, and you get paid instantly.'
  },
  {
    q: 'Can I apply if I am currently a student or employed?',
    a: 'Yes. Since our hours are completely flexible and output-based, you can work on milestones during your free time. All we care about is the quality of your output and meeting the milestone deadlines.'
  },
  {
    q: 'What is the selection process?',
    a: 'After reviewing your portfolio link, we assign a short, paid trial task relevant to your role. If you deliver high-quality work on time, you are immediately onboarded as a core contributor for the Mr.K ecosystem.'
  }
]

export default function Hiring() {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    role: 'Product Director',
    portfolio: '',
    education: 'Diploma',
    resume: '',
    resumeName: '',
    description: '',
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [activeFaq, setActiveFaq] = useState(null)

  const handleApplyClick = (roleTitle) => {
    setForm(f => ({ ...f, role: roleTitle }))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Limit file size to 5MB
    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('Resume file size must be less than 5MB.')
      e.target.value = ''
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setForm(prev => ({
        ...prev,
        resume: reader.result,
        resumeName: file.name
      }))
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    if (!form.resume) {
      setErrorMsg('Please upload your resume file.')
      setLoading(false)
      return
    }

    const now = new Date()
    const cleanDate = now.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) + 
                      ', ' + 
                      now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

    const newApplication = {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
      date: cleanDate,
      name: form.name,
      email: form.email,
      whatsapp: form.whatsapp,
      role: form.role,
      portfolio: form.portfolio,
      education: form.education,
      resume: form.resume,
      description: form.description,
      timestamp: Date.now()
    }

    try {
      const { error } = await supabase.from('hiring').insert([newApplication])
      if (error) throw error
      setSent(true)
    } catch (err) {
      console.error('Error saving application to Supabase:', err)
      setErrorMsg('Failed to submit application. Please check your network and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-nav" style={{ background: 'var(--ink-02)', minHeight: '100vh' }}>
      <SEO title="Careers & Open Positions" description="Join the Mr.K AI core team. Apply for premium Work from Home (WFH) task-based roles. We are hiring a Product Director, Content Editor, AI/ML Developer, and UI/UX Designer." />
      
      {/* Premium Hero */}
      <section className="products-hero" style={{ background: 'linear-gradient(180deg, var(--white) 0%, var(--ink-02) 100%)', borderBottom: '1px solid var(--ink-08)', paddingBottom: 80 }}>
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}
          >
            <span className="pill pill-gold" style={{ marginBottom: 20 }}>
              <span className="pulse" style={{ width: 6, height: 6 }} />
              Distributed Team Openings
            </span>
            <h1 style={{ fontSize: 'clamp(38px,6vw,64px)', fontWeight: 800, letterSpacing: '-2.5px', lineHeight: 1.05, marginBottom: 20, color: 'var(--ink)' }}>
              Build the Future of AI with Mr.K
            </h1>
            <p style={{ fontSize: 18, color: 'var(--ink-30)', lineHeight: 1.7, marginBottom: 32 }}>
              We build top-ranking AI agent ecosystems. Join as a milestone-based core contributor. Work from home, deliver premium features, and earn competitive milestone salaries.
            </p>

            {/* Micro Stats Banner */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--ink-50)' }}>
                <Clock size={16} color="var(--gold)" /> Flexible Hours
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--ink-50)' }}>
                <DollarSign size={16} color="var(--green)" /> Milestone Pay
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--ink-50)' }}>
                <Briefcase size={16} color="var(--blue)" /> WFH / Remote
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Card */}
      <section ref={formRef} className="section" style={{ padding: '60px 0 100px 0' }}>
        <div className="wrap-sm">
          <div style={{
            background: 'var(--white)',
            border: '1.5px solid var(--ink-08)',
            borderRadius: 'var(--r24)',
            padding: '48px',
            boxShadow: 'var(--s4)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '56px 20px' }}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <CheckCircle2 size={64} color="var(--green)" style={{ margin: '0 auto 24px' }} />
                </motion.div>
                <h2 style={{ fontSize: 26, fontWeight: 750, marginBottom: 12, letterSpacing: '-0.5px' }}>Application Submitted Successfully!</h2>
                <p style={{ fontSize: 16, color: 'var(--ink-30)', lineHeight: 1.6, maxWidth: 480, margin: '0 auto 32px' }}>
                  Your details have been saved in our hiring database. We will review your resume and reach out on WhatsApp or email to proceed with the next steps.
                </p>
                <button className="btn btn-ghost" onClick={() => {
                  setForm({
                    name: '',
                    email: '',
                    whatsapp: '',
                    role: 'Product Director',
                    portfolio: '',
                    education: 'Diploma',
                    resume: '',
                    resumeName: '',
                    description: '',
                  })
                  setSent(false)
                }}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                  <h2 style={{ fontSize: 28, fontWeight: 750, letterSpacing: '-0.8px', marginBottom: 8 }}>Submit Your Application</h2>
                  <p style={{ fontSize: 14.5, color: 'var(--ink-30)' }}>Join our core contributor team. Complete the fields below.</p>
                </div>
                
                {errorMsg && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,69,58,0.08)', border: '1px solid rgba(255,69,58,0.2)', padding: '14px 18px', borderRadius: 'var(--r12)', marginBottom: 24, color: 'var(--red)', fontSize: 14 }}>
                    <ShieldAlert size={18} style={{ flexShrink: 0 }} /> {errorMsg}
                  </div>
                )}

                <div className="frow" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
                  <div className="ff" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="h-name" style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--ink-50)' }}>Full Name</label>
                    <input 
                      id="h-name"
                      type="text" 
                      placeholder="Enter your name" 
                      required 
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{
                        padding: '12px 16px',
                        border: '1.5px solid var(--ink-08)',
                        borderRadius: 'var(--r12)',
                        fontSize: 14.5,
                        outline: 'none',
                        background: 'var(--ink-02)'
                      }}
                    />
                  </div>
                  <div className="ff" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="h-email" style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--ink-50)' }}>Email Address</label>
                    <input 
                      id="h-email"
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{
                        padding: '12px 16px',
                        border: '1.5px solid var(--ink-08)',
                        borderRadius: 'var(--r12)',
                        fontSize: 14.5,
                        outline: 'none',
                        background: 'var(--ink-02)'
                      }}
                    />
                  </div>
                </div>

                <div className="frow" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
                  <div className="ff" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="h-whatsapp" style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--ink-50)' }}>WhatsApp Number</label>
                    <input 
                      id="h-whatsapp"
                      type="tel" 
                      placeholder="e.g. +91 98765 43210" 
                      required 
                      value={form.whatsapp}
                      onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                      style={{
                        padding: '12px 16px',
                        border: '1.5px solid var(--ink-08)',
                        borderRadius: 'var(--r12)',
                        fontSize: 14.5,
                        outline: 'none',
                        background: 'var(--ink-02)'
                      }}
                    />
                  </div>
                  <div className="ff" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="h-role" style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--ink-50)' }}>Desired Position</label>
                    <select 
                      id="h-role"
                      required 
                      value={form.role} 
                      onChange={e => setForm({ ...form, role: e.target.value })}
                      style={{
                        padding: '12px 16px',
                        border: '1.5px solid var(--ink-08)',
                        borderRadius: 'var(--r12)',
                        fontSize: 14.5,
                        outline: 'none',
                        background: 'var(--ink-02)',
                        appearance: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Product Director">Product Director</option>
                      <option value="Editor / Content Strategist">Editor / Content Strategist</option>
                      <option value="Full-Stack AI Developer">Full-Stack AI Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                    </select>
                  </div>
                </div>

                <div className="frow" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 20 }}>
                  <div className="ff" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="h-education" style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--ink-50)' }}>Education Qualification</label>
                    <select 
                      id="h-education"
                      required 
                      value={form.education} 
                      onChange={e => setForm({ ...form, education: e.target.value })}
                      style={{
                        padding: '12px 16px',
                        border: '1.5px solid var(--ink-08)',
                        borderRadius: 'var(--r12)',
                        fontSize: 14.5,
                        outline: 'none',
                        background: 'var(--ink-02)',
                        appearance: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="Diploma">Diploma</option>
                      <option value="B.E.">B.E.</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="B.Sc">B.Sc</option>
                      <option value="B.C.A">B.C.A</option>
                      <option value="M.E.">M.E.</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="M.C.A">M.C.A</option>
                      <option value="M.Sc">M.Sc</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="ff" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="h-resume" style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--ink-50)' }}>Upload Resume / CV (PDF, Image, Doc)</label>
                    <input 
                      id="h-resume"
                      type="file" 
                      accept=".pdf,.doc,.docx,image/*"
                      onChange={handleFileChange}
                      style={{
                        padding: '12px 16px',
                        border: '1.5px solid var(--ink-08)',
                        borderRadius: 'var(--r12)',
                        fontSize: 14.5,
                        outline: 'none',
                        background: 'var(--ink-02)',
                        cursor: 'pointer'
                      }}
                    />
                    {form.resumeName && (
                      <span style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600, marginTop: 4 }}>
                        ✓ Selected file: {form.resumeName}
                      </span>
                    )}
                  </div>
                </div>

                <div className="ff" style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
                  <label htmlFor="h-portfolio" style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--ink-50)' }}>Portfolio Link (Optional)</label>
                  <input 
                    id="h-portfolio"
                    type="url" 
                    placeholder="https://github.com/username or LinkedIn profile" 
                    value={form.portfolio}
                    onChange={e => setForm({ ...form, portfolio: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      border: '1.5px solid var(--ink-08)',
                      borderRadius: 'var(--r12)',
                      fontSize: 14.5,
                      outline: 'none',
                      background: 'var(--ink-02)'
                    }}
                  />
                </div>

                <div className="ff" style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 28 }}>
                  <label htmlFor="h-desc" style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--ink-50)' }}>Tell us about your experience and skills</label>
                  <textarea 
                    id="h-desc"
                    placeholder="Provide a brief summary of your tech stack, relevant projects you built. Why are you interested in this milestone role?" 
                    required 
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                    style={{
                      padding: '12px 16px',
                      border: '1.5px solid var(--ink-08)',
                      borderRadius: 'var(--r12)',
                      fontSize: 14.5,
                      outline: 'none',
                      background: 'var(--ink-02)',
                      minHeight: 140,
                      resize: 'vertical',
                      fontFamily: 'var(--sans)'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-gold" 
                  style={{ width: '100%', justifyContent: 'center', height: 48, fontSize: 15 }} 
                  disabled={loading}
                >
                  {loading ? 'Submitting Application...' : 'Submit Job Application'} <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
