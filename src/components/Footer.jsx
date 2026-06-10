import { NavLink } from 'react-router-dom'
import { TriangleAlert } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="foot-brand">
            <img src={logo} alt="Mr.K" style={{ height: 60, width: 'auto', opacity: 0.9 }} />
            <p>AI Product Based Company. Building intelligent, accessible tools for students, professionals, and businesses worldwide.</p>
            <div className="foot-warn">
              <TriangleAlert size={13} style={{ flexShrink: 0, marginTop: 1, color: 'rgba(240,180,41,0.6)' }} />
              AI-generated results may contain errors. Always verify critical decisions independently. For informational use only.
            </div>
          </div>

          <div className="foot-col">
            <h6>Products</h6>
            <ul>
              <li><a href="https://kscv.vercel.app" target="_blank" rel="noreferrer">KsCV Builder</a></li>
              <li><a href="https://agent02.vercel.app" target="_blank" rel="noreferrer">Mr.K Agent IDE</a></li>
              <li><a href="https://pickup-law-agent.vercel.app" target="_blank" rel="noreferrer">Law Agent</a></li>
              <li><a href="https://da-agent-tnok.vercel.app" target="_blank" rel="noreferrer">View Once DA</a></li>
              <li><a href="https://kdoc.vercel.app" target="_blank" rel="noreferrer">Kdoc Editor</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h6>Company</h6>
            <ul>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/enquiry">Request Product</NavLink></li>
              <li><NavLink to="/invest">Invest & Funding</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="foot-col">
            <h6>Legal</h6>
            <ul>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms">Terms of Service</NavLink></li>
              <li><NavLink to="/cookies">Cookie Policy</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="footer-bot">
          <p>© 2026 Mr.K · Solo Founder Company · Founded by Karuppasamy M, Tamil Nadu, India</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="https://www.linkedin.com/in/karuppasamy-m02/" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.instagram.com/mr_k.inc/" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
            <p>Built with precision. Shipped with purpose.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
