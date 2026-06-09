import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Send } from 'lucide-react'
import logo from '../assets/logo.png'

const NAV = [
  ['/', 'Home'],
  ['/products', 'Products'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/enquiry', 'Request'],
  ['/privacy', 'Legal'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="nav">
      <div className={`nav-glass${solid ? ' solid' : ''}`}>
        <div className="nav-row">
          {/* Logo */}
          <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
            <motion.img
              src={logo} alt="Mr.K"
              className="nav-logo-img"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            />
          </NavLink>

          {/* Center links */}
          <nav className={`nav-center${open ? ' open' : ''}`}>
            {NAV.map(([path, label]) => (
              <NavLink
                key={path} to={path} end={path === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right */}
          <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href="https://www.linkedin.com/in/karuppasamy-m02/" target="_blank" rel="noreferrer" className="nav-social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/mr_k.inc/" target="_blank" rel="noreferrer" className="nav-social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <NavLink to="/enquiry" className="btn btn-gold btn-sm" style={{ fontWeight: 650 }}>
              <Send size={13} /> Request
            </NavLink>
            <button className="nav-mob" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'x' : 'm'}
                  initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  style={{ display: 'flex' }}
                >
                  {open ? <X size={21} /> : <Menu size={21} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
