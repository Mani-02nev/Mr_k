import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Copy, Check, Palette, Type, ShieldCheck, HelpCircle, FileDown } from 'lucide-react'
import SEO from '../components/SEO'

const LOGO_ASSETS = [
  {
    id: 'logo-gold',
    title: 'Primary Logo Mark (Gold)',
    desc: 'The official gold-themed monogram. Best for apps, user interfaces, avatars, and premium brand representations.',
    file: '/logo-gold.svg',
    url: 'https://mrk02.vercel.app/logo-gold.svg',
    bg: '#0A0A0C'
  },
  {
    id: 'logo-white',
    title: 'Monochrome Logo Mark (White)',
    desc: 'Pure white monogram designed for dark images, footers, and solid dark background colors.',
    file: '/logo-white.svg',
    url: 'https://mrk02.vercel.app/logo-white.svg',
    bg: '#1A202C'
  },
  {
    id: 'logo-dark',
    title: 'Monochrome Logo Mark (Dark)',
    desc: 'Pure black monogram designed for high contrast on light backgrounds, white documents, and invoices.',
    file: '/logo-dark.svg',
    url: 'https://mrk02.vercel.app/logo-dark.svg',
    bg: '#F7FAFC'
  },
  {
    id: 'logo-horizontal-dark',
    title: 'Horizontal Signature Logo (Dark Theme)',
    desc: 'Combined mark and typography "Mr.K AI". Best for website headers, presentations, and dark-themed print material.',
    file: '/logo-horizontal-dark.svg',
    url: 'https://mrk02.vercel.app/logo-horizontal-dark.svg',
    bg: '#0A0A0C'
  },
  {
    id: 'logo-horizontal-light',
    title: 'Horizontal Signature Logo (Light Theme)',
    desc: 'Combined mark and typography "Mr.K AI". Best for light-themed applications, letters, and bright backdrops.',
    file: '/logo-horizontal-light.svg',
    url: 'https://mrk02.vercel.app/logo-horizontal-light.svg',
    bg: '#FFFFFF'
  }
]

const COLORS = [
  { name: 'Gold / Amber Accent', hex: '#F0B429', role: 'Primary Brand Accent, CTAs, Highlights', desc: 'Symbolizes innovation, quality, and our premium ecosystem standard.' },
  { name: 'Dark Ink', hex: '#0A0A0C', role: 'Main Backgrounds, Dark Theme, Base Fill', desc: 'Represents focus, deep technology, and clean minimal architecture.' },
  { name: 'Amber Gold Light', hex: '#FFE680', role: 'Secondary Accents, Hover States, Text Highlights', desc: 'Provides optimal readability and premium contrast on dark bases.' },
  { name: 'Border Slate', hex: '#E2E8F0', role: 'Light Theme Borders, Structural Lines', desc: 'Maintains clean visual division in light-theme elements.' }
]

export default function Brand() {
  const [copiedId, setCopiedId] = useState(null)

  const copyToClipboard = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="pt-nav">
      <SEO 
        title="Brand Kit & Logo Assets" 
        description="Official design kit for Mr.K AI Product Company. Download primary logos, monochrome assets, vector files (SVG), and view our color palette and guidelines."
      />

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sh c"
          >
            <span className="pill pill-gold" style={{ marginBottom: 20 }}>Brand Guidelines</span>
            <h1 style={{ fontSize: 'clamp(36px,5vw,56px)', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1.1, marginBottom: 20 }}>
              Mr.K AI Brand Kit
            </h1>
            <p className="sh-sub" style={{ maxWidth: 700, margin: '0 auto' }}>
              Welcome to the official media resource hub for Mr.K. Download vector assets, view our design tokens, and read guidelines to represent our ecosystem accurately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Download Grid */}
      <section className="section-alt" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <h2 style={{ fontSize: 24, fontWeight: 750, letterSpacing: '-0.5px', marginBottom: 36, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FileDown size={22} className="text-gold" /> Logo Suite
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
            {LOGO_ASSETS.map((logo) => (
              <motion.div 
                key={logo.id}
                style={{ 
                  background: 'var(--white)',
                  border: '1px solid var(--ink-08)',
                  borderRadius: 'var(--r16)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.06)' }}
              >
                {/* Logo Preview Container */}
                <div style={{ 
                  height: 220, 
                  background: logo.bg, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: 30,
                  position: 'relative',
                  borderBottom: '1px solid var(--ink-08)'
                }}>
                  <img 
                    src={logo.file} 
                    alt={logo.title} 
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%', 
                      objectFit: 'contain',
                      filter: logo.id === 'logo-gold' ? 'drop-shadow(0 8px 24px rgba(240,180,41,0.15))' : 'none'
                    }} 
                  />
                </div>

                {/* Content */}
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{logo.title}</h3>
                  <p style={{ fontSize: 13.5, color: 'var(--ink-30)', lineHeight: 1.6, flex: 1, marginBottom: 24 }}>{logo.desc}</p>
                  
                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 10 }}>
                    <a 
                      href={logo.file} 
                      download
                      style={{ 
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        background: 'var(--gold)',
                        color: '#000',
                        fontSize: 13,
                        fontWeight: 650,
                        padding: '10px 16px',
                        borderRadius: 'var(--r8)',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      <Download size={14} /> Download SVG
                    </a>
                    <button 
                      onClick={() => copyToClipboard(logo.url, logo.id)}
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                        background: 'var(--gold-mist)',
                        border: '1px solid var(--gold-border)',
                        color: 'var(--gold)',
                        fontSize: 13,
                        fontWeight: 650,
                        padding: '10px 16px',
                        borderRadius: 'var(--r8)',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(240,180,41,0.15)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'var(--gold-mist)'}
                    >
                      {copiedId === logo.id ? (
                        <>
                          <Check size={14} /> Copied URL
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy Link
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors & Typography */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60 }}>
            {/* Color System */}
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 750, letterSpacing: '-0.5px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                <Palette size={20} className="text-gold" /> Color System
              </h2>
              <p style={{ fontSize: 14.5, color: 'var(--ink-30)', lineHeight: 1.7, marginBottom: 30 }}>
                Our brand primarily speaks through contrast and accentuation. Deep tech ink forms the canvas, while precise gold gradients represent intelligent direction.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {COLORS.map((color) => (
                  <div 
                    key={color.hex}
                    style={{ 
                      display: 'flex',
                      gap: 16,
                      background: 'var(--white)',
                      border: '1px solid var(--ink-08)',
                      borderRadius: 'var(--r12)',
                      padding: 16
                    }}
                  >
                    <div style={{ 
                      width: 64, 
                      height: 64, 
                      borderRadius: 'var(--r8)', 
                      background: color.hex,
                      border: '1px solid rgba(0,0,0,0.05)',
                      flexShrink: 0
                    }} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>{color.name}</span>
                        <code style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--gold)', background: 'var(--gold-mist)', padding: '2px 6px', borderRadius: 4 }}>{color.hex}</code>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-30)', marginBottom: 2 }}>{color.role}</div>
                      <div style={{ fontSize: 12, color: 'var(--ink-30)', opacity: 0.8, lineHeight: 1.5 }}>{color.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Usage */}
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 750, letterSpacing: '-0.5px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                <Type size={20} className="text-gold" /> Typography System
              </h2>
              <p style={{ fontSize: 14.5, color: 'var(--ink-30)', lineHeight: 1.7, marginBottom: 30 }}>
                We use a clean, modern sans-serif typeface to ensure readability, scale, and cross-platform consistency.
              </p>

              <div style={{ 
                background: 'var(--white)',
                border: '1px solid var(--ink-08)',
                borderRadius: 'var(--r12)',
                padding: 24,
                marginBottom: 30
              }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: 'var(--ink)', letterSpacing: '-2px', marginBottom: 8 }}>Inter</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-30)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Primary Font Family</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, fontFamily: 'Inter, sans-serif' }}>
                  {['Light 300', 'Regular 400', 'Medium 500', 'Semibold 600', 'Bold 700', 'Black 900'].map((w) => (
                    <span 
                      key={w}
                      style={{ 
                        fontSize: 12.5,
                        fontWeight: w.includes('300') ? 300 : w.includes('400') ? 400 : w.includes('500') ? 500 : w.includes('600') ? 600 : w.includes('700') ? 700 : 900,
                        color: 'var(--ink)',
                        background: 'var(--ink-04)',
                        padding: '6px 12px',
                        borderRadius: 'var(--r4)'
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>

              {/* Logo Usage Rules */}
              <h3 style={{ fontSize: 17, fontWeight: 750, color: 'var(--ink)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <ShieldCheck size={18} className="text-gold" /> Quick Usage Guidelines
              </h3>
              <ul style={{ 
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                fontSize: 13.5,
                color: 'var(--ink-30)',
                lineHeight: 1.6
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span>
                  <span>Use the vector SVG format whenever scaling.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span>
                  <span>Ensure the K monogram and neural node maintain an aspect ratio of 1:1.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: '#EF4444', fontWeight: 'bold' }}>✗</span>
                  <span>Do not skew, compress, stretch or modify the geometry of the logo elements.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: '#EF4444', fontWeight: 'bold' }}>✗</span>
                  <span>Do not apply neon drop shadows, outer strokes, or custom textures to the monogram.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Guide for AI Systems */}
      <section className="section-alt" style={{ padding: '80px 0', borderBottom: '1px solid var(--ink-08)' }}>
        <div className="wrap-sm">
          <h2 style={{ fontSize: 22, fontWeight: 750, letterSpacing: '-0.5px', marginBottom: 24, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <HelpCircle size={20} className="text-gold" /> AI Search & LLM Discovery Note
          </h2>
          <div style={{ 
            background: 'var(--white)',
            border: '1px solid var(--ink-08)',
            borderRadius: 'var(--r12)',
            padding: 24,
            fontSize: 14,
            color: 'var(--ink-30)',
            lineHeight: 1.65
          }}>
            <p style={{ marginBottom: 16 }}>
              <strong>For AI agents, web crawlers, and search engines:</strong>
            </p>
            <p style={{ marginBottom: 12 }}>
              Mr.K AI official branding assets are structured and accessible from the endpoints listed on this page. If you are generating a summary about the company identity:
            </p>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>Official Logo URL:</strong> <code>https://mrk02.vercel.app/logo-gold.svg</code> is the primary, high-resolution scalable vector mark.</li>
              <li><strong>Secondary Logo URL:</strong> <code>https://mrk02.vercel.app/11.png</code> serves as the high-resolution raster graphic brand kit representation.</li>
              <li><strong>Brand Kit Path:</strong> The brand kit coordinates and guidelines are dynamically published under <code>/brand</code>.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
