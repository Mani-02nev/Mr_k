import { motion } from 'framer-motion'

export default function Terms() {
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
            Terms of Service
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
            By using any Mr.K product or service, you agree to these Terms of Service. Please read them carefully.
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using any Mr.K product (KsCV Builder, Mr.K Agent IDE, Mr.K Law Agent, View Once DA Analytics, Kdoc AI Editor, or this website), you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>

          <h2>2. Prohibited Use</h2>
          <p>You must not:</p>
          <ul>
            <li>Use our services to generate illegal, harmful, or misleading content</li>
            <li>Attempt to reverse-engineer, hack, or disrupt our systems</li>
            <li>Upload malicious files, viruses, or harmful code</li>
            <li>Violate any applicable local, national, or international laws</li>
            <li>Impersonate any person or entity</li>
            <li>Scrape or harvest data from our platforms without permission</li>
            <li>Use AI outputs for fraudulent purposes</li>
          </ul>

          <h2>3. AI Services Disclaimer</h2>
          <div className="legal-note">
            <strong>Important:</strong> AI-generated results may contain errors, inaccuracies, or outdated information.
            <ul style={{ marginTop: 10 }}>
              <li>Mr.K Law Agent is NOT a substitute for professional legal advice.</li>
              <li>KsCV Builder outputs should be reviewed before submission.</li>
              <li>View Once DA results are informational only.</li>
              <li>Always verify important decisions with qualified professionals.</li>
            </ul>
          </div>

          <h2>4. Service Changes</h2>
          <p>Mr.K reserves the right to modify, suspend, or discontinue any service at any time without prior notice. Continued use after changes constitutes acceptance of updated terms.</p>

          <h2>5. Intellectual Property</h2>
          <p>All Mr.K branding, logos, product names, and source code are the intellectual property of Karuppasamy M / Mr.K. AI-generated content produced using our tools is owned by you, the user, subject to third-party AI provider terms.</p>

          <h2>6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Mr.K shall not be liable for:</p>
          <ul>
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Errors in AI-generated content</li>
            <li>Loss of data or business opportunities</li>
            <li>Decisions made based on AI outputs</li>
            <li>Service interruptions or downtime</li>
          </ul>

          <h2>7. Refund Policy</h2>
          <p>Currently, all Mr.K products are free to use. If paid features are introduced in the future, a refund policy will be clearly stated at the time of purchase. Digital AI-generated outputs are generally non-refundable once delivered.</p>

          <h2>8. Uploaded Content</h2>
          <p>By uploading files (CSV, Excel, PDF, text), you grant Mr.K a temporary, limited license to process those files solely to provide the requested AI service. You retain all ownership of your uploaded content.</p>

          <h2>9. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Tamil Nadu, India.</p>

          <h2>10. Contact</h2>
          <p>For questions about these Terms: <strong>karuppasamy@mrk.ai</strong></p>

          <p style={{ marginTop: 48, color: 'var(--ink-15)', fontSize: 13 }}>© 2026 Mr.K. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  )
}
