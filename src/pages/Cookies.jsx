import { motion } from 'framer-motion'
import SEO from '../components/SEO'

export default function Cookies() {
  return (
    <div className="legal-page pt-nav">
      <SEO title="Cookie Policy" description="Read the Cookie Policy of Mr.K AI Product Company. Learn how cookies and local storage are utilized to improve user experience." />
      <div className="wrap-sm">
        <motion.div
          className="legal-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pill pill-gold" style={{ marginBottom: 16 }}>Legal</span>
          <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 720, letterSpacing: '-1.5px', lineHeight: 1.1 }}>
            Cookie Policy
          </h1>
          <div className="legal-meta">
            <span className="pill pill-neutral">Effective: January 1, 2026</span>
            <span>Mr.K · Solo Founder AI Company</span>
          </div>
        </motion.div>

        <motion.div
          className="legal-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="legal-note">
            This policy explains what cookies Mr.K uses, why we use them, and how you can control them across all products and this website.
          </div>

          <h2>1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help remember preferences, analyze usage, and provide a better experience.</p>

          <h2>2. Essential Cookies</h2>
          <p>Required for the website and products to function. These cannot be disabled.</p>
          <ul>
            <li><strong>Session cookies:</strong> Keep you logged in during your visit</li>
            <li><strong>Security cookies:</strong> Help prevent cross-site request forgery</li>
            <li><strong>Preference cookies:</strong> Remember your settings (theme, language)</li>
          </ul>

          <h2>3. Analytics Cookies</h2>
          <div className="legal-note">
            We use <strong>Google Analytics</strong> to understand how users interact with our products. This includes pages visited, time on site, and general geographic location (country level). IP addresses are anonymized. You can opt out via Google's opt-out tool.
          </div>

          <h2>4. Login Session Cookies</h2>
          <p>Products that require authentication use session cookies to maintain your login state. These expire when you log out or close your browser.</p>

          <h2>5. Tracking Cookies</h2>
          <p>We do NOT use advertising or cross-site tracking cookies. We do not run ads on our products.</p>

          <h2>6. Third-Party Cookies</h2>
          <ul>
            <li><strong>Google Analytics</strong> — usage analytics (anonymized)</li>
            <li><strong>Vercel</strong> — hosting and performance monitoring</li>
            <li><strong>AI API providers</strong> — may set functional cookies for API sessions</li>
          </ul>

          <h2>7. How to Control Cookies</h2>
          <ul>
            <li><strong>Chrome:</strong> Settings → Privacy → Cookies</li>
            <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
            <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
          </ul>

          <h2>8. Local Storage</h2>
          <p>Our products may use browser local storage to save your work (drafts, settings) locally. This data never leaves your device unless explicitly submitted.</p>

          <h2>9. Cookie Retention</h2>
          <ul>
            <li>Session cookies: Deleted when you close your browser</li>
            <li>Analytics cookies: Up to 2 years (Google Analytics default)</li>
            <li>Preference cookies: Up to 1 year</li>
          </ul>

          <h2>10. Contact</h2>
          <p>Cookie questions: <strong>karuppasamy@mrk.ai</strong></p>

          <p style={{ marginTop: 48, color: 'var(--ink-15)', fontSize: 13 }}>© 2026 Mr.K. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  )
}
