import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <div className="legal-page pt-nav">
      <div className="wrap-sm">
        <motion.div
          className="legal-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pill pill-gold" style={{ marginBottom: 16 }}>Legal</span>
          <h1 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 720, letterSpacing: '-1.5px', lineHeight: 1.1 }}>
            Privacy Policy
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
            Your privacy matters. This policy explains what data we collect, how we use it, and your rights across all Mr.K products.
          </div>

          <h2>1. Who We Are</h2>
          <p>Mr.K is a Solo Founder AI Product Company founded by Karuppasamy M, based in Tamil Nadu, India. Our products include KsCV Builder, Mr.K Agent IDE, Mr.K Law Agent, View Once DA Analytics, and Kdoc AI Editor.</p>

          <h2>2. Data We Collect</h2>
          <p>Depending on which product you use, we may collect:</p>
          <ul>
            <li>Information you provide directly (name, email, résumé content, legal queries)</li>
            <li>Uploaded files (CSV, Excel, PDF, documents)</li>
            <li>Usage data (pages visited, features used, session duration)</li>
            <li>Device and browser information (IP address, browser type, OS)</li>
            <li>Cookies and local storage data for session management</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To provide and improve our AI-powered services</li>
            <li>To process your uploaded files and generate AI outputs</li>
            <li>To communicate with you (support, updates)</li>
            <li>To analyze usage patterns and improve product experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Uploaded Files — Important Notice</h2>
          <div className="legal-note">
            <strong>File Storage:</strong> Files you upload (CSV, Excel, PDF) are processed temporarily to generate AI outputs. We do not permanently store uploaded files beyond your active session unless explicitly stated.<br /><br />
            <strong>Retention:</strong> Temporary files are deleted within 24 hours of your session ending.<br /><br />
            <strong>Third-Party AI:</strong> Some products use third-party AI APIs (such as Google Gemini or OpenAI) to process your data. By using our services, you acknowledge your inputs may be sent to these providers under their respective privacy policies.
          </div>

          <h2>5. Data Sharing</h2>
          <p>We do not sell your personal data. We may share data with:</p>
          <ul>
            <li>AI API providers (for processing your queries and uploads)</li>
            <li>Analytics services (Google Analytics — anonymized)</li>
            <li>Hosting providers (Vercel) for service delivery</li>
            <li>Legal authorities if required by law</li>
          </ul>

          <h2>6. AI-Generated Content Disclaimer</h2>
          <div className="legal-note">
            AI-generated results (résumés, legal advice, code, analytics) may contain errors or inaccuracies. Always verify important decisions independently. Mr.K services are provided for informational and productivity purposes only.
          </div>

          <h2>7. Data Security</h2>
          <p>All products use HTTPS (SSL encryption). We follow industry best practices to protect your data. No method of internet transmission is 100% secure.</p>

          <h2>8. Your Rights</h2>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of analytics tracking</li>
            <li>Contact us for any privacy concerns</li>
          </ul>

          <h2>9. Children's Privacy</h2>
          <p>Our services are not directed to children under 13. We do not knowingly collect data from children under 13.</p>

          <h2>10. Contact</h2>
          <p>For privacy questions: <strong>karuppasamy@mrk.ai</strong></p>

          <p style={{ marginTop: 48, color: 'var(--ink-15)', fontSize: 13 }}>© 2026 Mr.K. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  )
}
