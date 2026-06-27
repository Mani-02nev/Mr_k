import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, LogOut, Download, Trash2, Search, Calendar, Mail, Tag, DollarSign, ExternalLink, Briefcase, Coins, Landmark, ArrowUpRight } from 'lucide-react'
import { supabase } from '../supabase'

export default function Admin() {
  const [password, setPassword] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [error, setError] = useState('')
  const [records, setRecords] = useState([])
  const [investments, setInvestments] = useState([])
  const [hiring, setHiring] = useState([])
  const [activeTab, setActiveTab] = useState('projects') // 'projects' | 'hiring' | 'investments'
  const [search, setSearch] = useState('')
  const [syncStatus, setSyncStatus] = useState('checking') // 'checking' | 'online' | 'offline'

  // Load records from Supabase directly without localStorage fallback
  const loadRecords = async () => {
    setSyncStatus('checking')
    try {
      // 1. Fetch enquiries
      const { data: enquiriesData, error: enquiriesError } = await supabase
        .from('enquiries')
        .select('*')
        .order('timestamp', { ascending: false })
      
      if (enquiriesError) throw enquiriesError

      // 2. Fetch investments
      const { data: investmentsData, error: investmentsError } = await supabase
        .from('investments')
        .select('*')
        .order('timestamp', { ascending: false })

      if (investmentsError) throw investmentsError

      // 3. Fetch hiring
      const { data: hiringData, error: hiringError } = await supabase
        .from('hiring')
        .select('*')
        .order('timestamp', { ascending: false })

      if (hiringError) throw hiringError

      setRecords(enquiriesData || [])
      setInvestments(investmentsData || [])
      setHiring(hiringData || [])
      setSyncStatus('online')
    } catch (err) {
      console.error('Supabase fetch error:', err)
      setRecords([])
      setInvestments([])
      setHiring([])
      setSyncStatus('offline')
    }
  }

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('mrk_admin_auth') === 'true'
    if (loggedIn) {
      setIsAuthorized(true)
      loadRecords()
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password.toLowerCase() === 'mani0211') {
      setIsAuthorized(true)
      setError('')
      sessionStorage.setItem('mrk_admin_auth', 'true')
      loadRecords()
    } else {
      setError('Incorrect Admin Password')
    }
  }

  const handleLogout = () => {
    setIsAuthorized(false)
    setPassword('')
    sessionStorage.removeItem('mrk_admin_auth')
  }

  // Clear records for active tab
  const handleClear = async () => {
    const isProjects = activeTab === 'projects'
    const isHiring = activeTab === 'hiring'
    const tabName = isProjects 
      ? 'project requests' 
      : isHiring 
      ? 'hiring applications' 
      : 'investment proposals'
    
    if (window.confirm(`Are you sure you want to clear all ${tabName}? This action cannot be undone.`)) {
      try {
        if (isProjects) {
          const { error } = await supabase.from('enquiries').delete().neq('id', '')
          if (error) throw error
          setRecords([])
        } else if (isHiring) {
          const { error } = await supabase.from('hiring').delete().neq('id', '')
          if (error) throw error
          setHiring([])
        } else {
          const { error } = await supabase.from('investments').delete().neq('id', '')
          if (error) throw error
          setInvestments([])
        }
      } catch (e) {
        console.error('Supabase clear failed:', e)
        alert('Failed to clear records from server.')
      }
    }
  }

  // Generate and download CSV
  const handleDownloadCSV = () => {
    const isProjects = activeTab === 'projects'
    const isHiring = activeTab === 'hiring'
    const targetList = isProjects ? records : isHiring ? hiring : investments

    if (targetList.length === 0) {
      alert('No records to download')
      return
    }

    let headers = []
    let csvRows = []

    if (isProjects) {
      headers = ['id', 'date', 'name', 'email', 'whatsapp', 'title', 'type', 'budget', 'description']
      csvRows.push(headers.join(','))
      targetList.forEach(r => {
        const row = [
          `"${r.id || ''}"`,
          `"${r.date || ''}"`,
          `"${(r.name || '').replace(/"/g, '""')}"`,
          `"${(r.email || '').replace(/"/g, '""')}"`,
          `"${(r.whatsapp || '').replace(/"/g, '""')}"`,
          `"${(r.title || '').replace(/"/g, '""')}"`,
          `"${(r.type || '').replace(/"/g, '""')}"`,
          `"${(r.budget || '').replace(/"/g, '""')}"`,
          `"${(r.description || '').replace(/"/g, '""')}"`
        ]
        csvRows.push(row.join(','))
      })
    } else if (isHiring) {
      headers = ['id', 'date', 'name', 'email', 'whatsapp', 'role', 'portfolio', 'education', 'resume', 'description']
      csvRows.push(headers.join(','))
      targetList.forEach(r => {
        const row = [
          `"${r.id || ''}"`,
          `"${r.date || ''}"`,
          `"${(r.name || '').replace(/"/g, '""')}"`,
          `"${(r.email || '').replace(/"/g, '""')}"`,
          `"${(r.whatsapp || '').replace(/"/g, '""')}"`,
          `"${(r.role || '').replace(/"/g, '""')}"`,
          `"${(r.portfolio || '').replace(/"/g, '""')}"`,
          `"${(r.education || '').replace(/"/g, '""')}"`,
          `"${(r.resume || '').replace(/"/g, '""')}"`,
          `"${(r.description || '').replace(/"/g, '""')}"`
        ]
        csvRows.push(row.join(','))
      })
    } else {
      headers = ['id', 'date', 'name', 'company', 'email', 'whatsapp', 'amount', 'target_product', 'notes']
      csvRows.push(headers.join(','))
      targetList.forEach(r => {
        const row = [
          `"${r.id || ''}"`,
          `"${r.date || ''}"`,
          `"${(r.name || '').replace(/"/g, '""')}"`,
          `"${(r.company || '').replace(/"/g, '""')}"`,
          `"${(r.email || '').replace(/"/g, '""')}"`,
          `"${(r.whatsapp || '').replace(/"/g, '""')}"`,
          `"${(r.amount || '').replace(/"/g, '""')}"`,
          `"${(r.target_product || '').replace(/"/g, '""')}"`,
          `"${(r.notes || '').replace(/"/g, '""')}"`
        ]
        csvRows.push(row.join(','))
      })
    }

    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvRows.join('\n'))
    const link = document.createElement('a')
    link.setAttribute('href', csvContent)
    
    let filename = 'investments.csv'
    if (isProjects) filename = 'projects.csv'
    if (isHiring) filename = 'hiring.csv'
    
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Filter records
  const filteredRecords = records.filter(r => 
    (r.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.email || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.title || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.type || '').toLowerCase().includes(search.toLowerCase())
  )

  const filteredHiring = hiring.filter(r => 
    (r.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.email || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.role || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.description || '').toLowerCase().includes(search.toLowerCase())
  )

  const filteredInvestments = investments.filter(r => 
    (r.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.company || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.email || '').toLowerCase().includes(search.toLowerCase()) ||
    (r.target_product || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="legal-page pt-nav" style={{ minHeight: 'calc(100vh - 120px)', background: isAuthorized ? 'var(--ink-02)' : 'var(--white)' }}>
      <div className="wrap" style={{ paddingBottom: 60 }}>
        <AnimatePresence mode="wait">
          {!isAuthorized ? (
            /* ══ LOGIN SCREEN ══ */
            <motion.div
              key="login"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              style={{ maxWidth: 440, margin: '80px auto 0', textAlign: 'center' }}
            >
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--ink-08)',
                borderRadius: 'var(--r24)',
                padding: '40px',
                boxShadow: 'var(--s3)'
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'var(--gold-mist)', border: '1px solid var(--gold-border)',
                  color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <Lock size={24} />
                </div>
                <h1 style={{ fontSize: 24, fontWeight: 720, letterSpacing: '-1px', marginBottom: 8 }}>
                  Admin Workspace
                </h1>
                <p style={{ color: 'var(--ink-30)', fontSize: 13.5, marginBottom: 28 }}>
                  Enter the password to view project requests, investment proposals, and download requirements.
                </p>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div className="ff" style={{ textAlign: 'left', marginBottom: 0 }}>
                    <label htmlFor="admin-pass">Security Password</label>
                    <input
                      id="admin-pass"
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: '100%' }}
                    />
                  </div>
                  {error && (
                    <div style={{ color: 'var(--red)', fontSize: 12.5, fontWeight: 500, textAlign: 'left' }}>
                      {error}
                    </div>
                  )}
                  <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Access Records
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* ══ ADMIN DASHBOARD ══ */
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header block */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 36 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span className="pill pill-gold">Admin Panel</span>
                    {syncStatus === 'online' ? (
                      <span className="pill" style={{ background: 'rgba(52,199,89,0.1)', color: '#248a3d', border: '1px solid rgba(52,199,89,0.2)', fontSize: 11, padding: '4px 10px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        ● Supabase Connected
                      </span>
                    ) : syncStatus === 'checking' ? (
                      <span className="pill" style={{ background: 'rgba(0,122,255,0.1)', color: '#007aff', border: '1px solid rgba(0,122,255,0.2)', fontSize: 11, padding: '4px 10px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        ● Connecting...
                      </span>
                    ) : (
                      <span className="pill" style={{ background: 'rgba(255,69,58,0.1)', color: 'var(--red)', border: '1px solid rgba(255,69,58,0.2)', fontSize: 11, padding: '4px 10px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        ● Connection Error
                      </span>
                    )}
                  </div>
                  <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 740, letterSpacing: '-1.5px', margin: 0 }}>
                    Workspace Database
                  </h1>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button className="btn btn-ink" onClick={handleDownloadCSV}>
                    <Download size={14} /> Download CSV
                  </button>
                  <button className="btn btn-ghost" onClick={handleClear} style={{ color: 'var(--red)', borderColor: 'rgba(255,69,58,0.2)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,69,58,0.05)'} onMouseLeave={(e) => e.currentTarget.style.background = 'none'}>
                    <Trash2 size={14} /> Clear Tab
                  </button>
                  <button className="btn btn-ghost" onClick={handleLogout}>
                    <LogOut size={14} /> Log Out
                  </button>
                </div>
              </div>

              {/* Stats overview */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 28 }}>
                {[
                  { label: 'Project Enquiries', val: records.length },
                  { label: 'Hiring Applications', val: hiring.length },
                  { label: 'Funding Offers', val: investments.length },
                  { label: 'Growth/Enterprise Capital', val: investments.filter(r => (r.amount || '').toLowerCase().includes('growth') || (r.amount || '').toLowerCase().includes('enterprise')).length }
                ].map((s, i) => (
                  <div key={i} style={{ background: 'var(--white)', border: '1px solid var(--ink-08)', borderRadius: 'var(--r16)', padding: '20px 24px', boxShadow: 'var(--s1)' }}>
                    <div style={{ fontSize: 13, color: 'var(--ink-30)', fontWeight: 500 }}>{s.label}</div>
                    <div style={{ fontSize: 32, fontWeight: 785, color: 'var(--ink)', marginTop: 4 }}>{s.val}</div>
                  </div>
                ))}
              </div>

              {/* Tab Selector */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 20, borderBottom: '1px solid var(--ink-08)', paddingBottom: 12, flexWrap: 'wrap' }}>
                <button
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--r8)',
                    fontSize: 14.5,
                    fontWeight: 650,
                    background: activeTab === 'projects' ? 'var(--gold-mist)' : 'transparent',
                    border: activeTab === 'projects' ? '1px solid var(--gold-border)' : '1px solid transparent',
                    color: activeTab === 'projects' ? '#7A5500' : 'var(--ink-50)',
                    cursor: 'pointer'
                  }}
                  onClick={() => { setActiveTab('projects'); setSearch(''); }}
                >
                  <Briefcase size={14} style={{ marginRight: 6, display: 'inline', verticalAlign: 'middle' }} />
                  Project Enquiries ({records.length})
                </button>
                <button
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--r8)',
                    fontSize: 14.5,
                    fontWeight: 650,
                    background: activeTab === 'hiring' ? 'var(--gold-mist)' : 'transparent',
                    border: activeTab === 'hiring' ? '1px solid var(--gold-border)' : '1px solid transparent',
                    color: activeTab === 'hiring' ? '#7A5500' : 'var(--ink-50)',
                    cursor: 'pointer'
                  }}
                  onClick={() => { setActiveTab('hiring'); setSearch(''); }}
                >
                  <Briefcase size={14} style={{ marginRight: 6, display: 'inline', verticalAlign: 'middle' }} />
                  Hiring Applications ({hiring.length})
                </button>
                <button
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--r8)',
                    fontSize: 14.5,
                    fontWeight: 650,
                    background: activeTab === 'investments' ? 'var(--gold-mist)' : 'transparent',
                    border: activeTab === 'investments' ? '1px solid var(--gold-border)' : '1px solid transparent',
                    color: activeTab === 'investments' ? '#7A5500' : 'var(--ink-50)',
                    cursor: 'pointer'
                  }}
                  onClick={() => { setActiveTab('investments'); setSearch(''); }}
                >
                  <Landmark size={14} style={{ marginRight: 6, display: 'inline', verticalAlign: 'middle' }} />
                  Funding & Investments ({investments.length})
                </button>
              </div>

              {/* Search bar */}
              <div style={{ position: 'relative', marginBottom: 20 }}>
                <Search size={16} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-15)' }} />
                <input
                  type="text"
                  placeholder={
                    activeTab === 'projects' 
                      ? "Search inquiries by name, email, or project title..." 
                      : activeTab === 'hiring'
                      ? "Search applications by name, email, or details..."
                      : "Search investments by name, company, or target product..."
                  }
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 48px',
                    border: '1.5px solid var(--ink-08)',
                    borderRadius: 'var(--r12)',
                    fontSize: 14,
                    fontFamily: 'var(--sans)',
                    background: 'var(--white)',
                    boxShadow: 'var(--s1)'
                  }}
                />
              </div>

              {/* Records Table */}
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--ink-08)',
                borderRadius: 'var(--r20)',
                overflow: 'hidden',
                boxShadow: 'var(--s2)'
              }}>
                {activeTab === 'projects' ? (
                  /* ══ PROJECT REQUESTS TABLE ══ */
                  filteredRecords.length > 0 ? (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 14 }}>
                        <thead>
                          <tr style={{ background: 'var(--ink-04)', borderBottom: '1px solid var(--ink-08)', color: 'var(--ink-50)' }}>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Project / Type</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Client Contact</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Budget scale</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Date</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredRecords.map((r, i) => (
                            <tr key={r.id || i} style={{ borderBottom: i === filteredRecords.length - 1 ? 'none' : '1px solid var(--ink-08)', verticalAlign: 'top' }}>
                              <td style={{ padding: '20px' }}>
                                <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 14.5 }}>{r.title}</div>
                                <span className="pill pill-gold" style={{ fontSize: 9.5, padding: '2px 8px', marginTop: 6 }}>{r.type}</span>
                              </td>
                              <td style={{ padding: '20px' }}>
                                <div style={{ fontWeight: 600, color: 'var(--ink)' }}>{r.name}</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 6 }}>
                                  <a href={`mailto:${r.email}`} style={{ color: 'var(--blue)', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                                    <Mail size={11} /> {r.email}
                                  </a>
                                  {r.whatsapp && (
                                    <a href={`https://wa.me/${r.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" style={{ color: '#25D366', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 500 }}>
                                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.42 1.45 5.302 1.453 5.485.002 9.948-4.463 9.952-9.953.002-2.66-1.033-5.161-2.91-7.04-1.876-1.879-4.375-2.914-7.034-2.916-5.487 0-9.95 4.461-9.954 9.95-.001 1.88.497 3.719 1.442 5.31l-.243.89-.963 3.524 3.61-.947.886-.234zm11.353-7.53c-.305-.152-1.807-.892-2.086-.994-.279-.101-.483-.152-.686.152-.204.304-.787.994-.965 1.196-.177.203-.355.228-.66.076-.304-.152-1.285-.473-2.448-1.511-.906-.807-1.517-1.805-1.694-2.11-.178-.304-.019-.468.133-.62.137-.136.305-.355.457-.532.152-.177.203-.304.305-.507.102-.203.05-.38-.025-.532-.076-.152-.686-1.653-.94-2.261-.247-.595-.497-.514-.686-.524-.177-.008-.38-.01-.583-.01-.203 0-.533.076-.812.38-.28.304-1.066 1.039-1.066 2.535s1.09 2.94 1.243 3.143c.152.203 2.146 3.277 5.197 4.594.726.313 1.293.5 1.734.64.73.23 1.39.198 1.912.12.583-.087 1.807-.738 2.061-1.453.254-.716.254-1.33.178-1.457-.076-.127-.279-.203-.583-.355z"/></svg> {r.whatsapp}
                                    </a>
                                  )}
                                </div>
                              </td>
                              <td style={{ padding: '20px' }}>
                                <div style={{ fontWeight: 500, color: '#6B4A00', background: 'var(--gold-mist)', display: 'inline-block', padding: '3px 9px', borderRadius: 'var(--r8)', fontSize: 12.5, border: '1px solid var(--gold-border)' }}>
                                  {r.budget}
                                </div>
                              </td>
                              <td style={{ padding: '20px', color: 'var(--ink-30)', fontSize: 13, whiteSpace: 'nowrap' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                  <Calendar size={12} /> {r.date}
                                </div>
                              </td>
                              <td style={{ padding: '20px', color: 'var(--ink-50)', fontSize: 13, maxWidth: 300, lineHeight: 1.5 }}>
                                <div style={{ whiteSpace: 'pre-wrap' }}>{r.description}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div style={{ padding: '64px 20px', textAlign: 'center', color: 'var(--ink-30)' }}>
                      <Search size={32} strokeWidth={1.5} style={{ color: 'var(--ink-15)', marginBottom: 12 }} />
                      <p style={{ fontSize: 15, fontWeight: 500 }}>No project requests found</p>
                      <p style={{ fontSize: 13, marginTop: 4 }}>Any submissions from the Request form will appear here.</p>
                    </div>
                  )
                ) : activeTab === 'hiring' ? (
                  /* ══ HIRING APPLICATIONS TABLE ══ */
                  filteredHiring.length > 0 ? (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 14 }}>
                        <thead>
                          <tr style={{ background: 'var(--ink-04)', borderBottom: '1px solid var(--ink-08)', color: 'var(--ink-50)' }}>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Applicant / Role</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Qualification & Resume</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Contact Info</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Date</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Experience / Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredHiring.map((r, i) => (
                            <tr key={r.id || i} style={{ borderBottom: i === filteredHiring.length - 1 ? 'none' : '1px solid var(--ink-08)', verticalAlign: 'top' }}>
                              <td style={{ padding: '20px' }}>
                                <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 14.5 }}>{r.name}</div>
                                <span className="pill pill-gold" style={{ fontSize: 9.5, padding: '2px 8px', marginTop: 6 }}>{r.role}</span>
                              </td>
                              <td style={{ padding: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <span style={{ fontSize: 12, color: 'var(--ink-30)', fontWeight: 600 }}>Edu:</span>
                                    <span className="pill pill-neutral" style={{ fontSize: 11, padding: '2px 8px', textTransform: 'none', fontWeight: 650 }}>
                                      {r.education || 'Diploma'}
                                    </span>
                                  </div>
                                  {r.resume ? (
                                    <div style={{ display: 'flex', gap: 6, marginTop: 2 }}>
                                      <button 
                                        onClick={() => {
                                          const newTab = window.open()
                                          if (newTab) {
                                            newTab.document.write(
                                              `<iframe src="${r.resume}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
                                            )
                                          } else {
                                            alert("Failed to open resume tab. Please allow popups.")
                                          }
                                        }}
                                        className="btn btn-sm btn-gold" 
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11.5, height: 26, padding: '0 8px' }}
                                      >
                                        View
                                      </button>
                                      <a 
                                        href={r.resume} 
                                        download={`resume_${(r.name || 'candidate').replace(/\s+/g, '_')}.pdf`}
                                        className="btn btn-sm btn-ghost" 
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11.5, height: 26, padding: '0 8px' }}
                                      >
                                        <Download size={11} /> Save
                                      </a>
                                    </div>
                                  ) : (
                                    <span style={{ fontSize: 12, color: 'var(--ink-15)' }}>No resume file</span>
                                  )}
                                </div>
                              </td>
                              <td style={{ padding: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                  <a href={`mailto:${r.email}`} style={{ color: 'var(--blue)', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                                    <Mail size={11} /> {r.email}
                                  </a>
                                  {r.whatsapp && (
                                    <a href={`https://wa.me/${r.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" style={{ color: '#25D366', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 500 }}>
                                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.42 1.45 5.302 1.453 5.485.002 9.948-4.463 9.952-9.953.002-2.66-1.033-5.161-2.91-7.04-1.876-1.879-4.375-2.914-7.034-2.916-5.487 0-9.95 4.461-9.954 9.95-.001 1.88.497 3.719 1.442 5.31l-.243.89-.963 3.524 3.61-.947.886-.234zm11.353-7.53c-.305-.152-1.807-.892-2.086-.994-.279-.101-.483-.152-.686.152-.204.304-.787.994-.965 1.196-.177.203-.355.228-.66.076-.304-.152-1.285-.473-2.448-1.511-.906-.807-1.517-1.805-1.694-2.11-.178-.304-.019-.468.133-.62.137-.136.305-.355.457-.532.152-.177.203-.304.305-.507.102-.203.05-.38-.025-.532-.076-.152-.686-1.653-.94-2.261-.247-.595-.497-.514-.686-.524-.177-.008-.38-.01-.583-.01-.203 0-.533.076-.812.38-.28.304-1.066 1.039-1.066 2.535s1.09 2.94 1.243 3.143c.152.203 2.146 3.277 5.197 4.594.726.313 1.293.5 1.734.64.73.23 1.39.198 1.912.12.583-.087 1.807-.738 2.061-1.453.254-.716.254-1.33.178-1.457-.076-.127-.279-.203-.583-.355z"/></svg> {r.whatsapp}
                                    </a>
                                  )}
                                  {r.portfolio && (
                                    <a href={r.portfolio} target="_blank" rel="noreferrer" style={{ color: 'var(--blue)', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 500, marginTop: 2 }}>
                                      <ExternalLink size={11} /> Portfolio Link <ArrowUpRight size={11} />
                                    </a>
                                  )}
                                </div>
                              </td>
                              <td style={{ padding: '20px', color: 'var(--ink-30)', fontSize: 13, whiteSpace: 'nowrap' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                  <Calendar size={12} /> {r.date}
                                </div>
                              </td>
                              <td style={{ padding: '20px', color: 'var(--ink-50)', fontSize: 13, maxWidth: 300, lineHeight: 1.5 }}>
                                <div style={{ whiteSpace: 'pre-wrap' }}>{r.description}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div style={{ padding: '64px 20px', textAlign: 'center', color: 'var(--ink-30)' }}>
                      <Search size={32} strokeWidth={1.5} style={{ color: 'var(--ink-15)', marginBottom: 12 }} />
                      <p style={{ fontSize: 15, fontWeight: 500 }}>No hiring applications found</p>
                      <p style={{ fontSize: 13, marginTop: 4 }}>Submissions from the Hiring page form will show up here.</p>
                    </div>
                  )
                ) : (
                  /* ══ INVESTMENTS TABLE ══ */
                  filteredInvestments.length > 0 ? (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 14 }}>
                        <thead>
                          <tr style={{ background: 'var(--ink-04)', borderBottom: '1px solid var(--ink-08)', color: 'var(--ink-50)' }}>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Investor / Company</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Contact Info</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Product Target</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Investment Scale</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Date</th>
                            <th style={{ padding: '16px 20px', fontWeight: 600 }}>Proposal Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredInvestments.map((r, i) => (
                            <tr key={r.id || i} style={{ borderBottom: i === filteredInvestments.length - 1 ? 'none' : '1px solid var(--ink-08)', verticalAlign: 'top' }}>
                              <td style={{ padding: '20px' }}>
                                <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: 14.5 }}>{r.name}</div>
                                {r.company && <div style={{ fontSize: 12.5, color: 'var(--ink-30)', marginTop: 4 }}>{r.company}</div>}
                              </td>
                              <td style={{ padding: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                  <a href={`mailto:${r.email}`} style={{ color: 'var(--blue)', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                                    <Mail size={11} /> {r.email}
                                  </a>
                                  {r.whatsapp && (
                                    <a href={`https://wa.me/${r.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" style={{ color: '#25D366', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4, fontWeight: 500 }}>
                                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.42 1.45 5.302 1.453 5.485.002 9.948-4.463 9.952-9.953.002-2.66-1.033-5.161-2.91-7.04-1.876-1.879-4.375-2.914-7.034-2.916-5.487 0-9.95 4.461-9.954 9.95-.001 1.88.497 3.719 1.442 5.31l-.243.89-.963 3.524 3.61-.947.886-.234zm11.353-7.53c-.305-.152-1.807-.892-2.086-.994-.279-.101-.483-.152-.686.152-.204.304-.787.994-.965 1.196-.177.203-.355.228-.66.076-.304-.152-1.285-.473-2.448-1.511-.906-.807-1.517-1.805-1.694-2.11-.178-.304-.019-.468.133-.62.137-.136.305-.355.457-.532.152-.177.203-.304.305-.507.102-.203.05-.38-.025-.532-.076-.152-.686-1.653-.94-2.261-.247-.595-.497-.514-.686-.524-.177-.008-.38-.01-.583-.01-.203 0-.533.076-.812.38-.28.304-1.066 1.039-1.066 2.535s1.09 2.94 1.243 3.143c.152.203 2.146 3.277 5.197 4.594.726.313 1.293.5 1.734.64.73.23 1.39.198 1.912.12.583-.087 1.807-.738 2.061-1.453.254-.716.254-1.33.178-1.457-.076-.127-.279-.203-.583-.355z"/></svg> {r.whatsapp}
                                    </a>
                                  )}
                                </div>
                              </td>
                              <td style={{ padding: '20px' }}>
                                <span className="pill pill-neutral" style={{ fontSize: 10, padding: '3px 10px' }}>{r.target_product}</span>
                              </td>
                              <td style={{ padding: '20px' }}>
                                <div style={{ fontWeight: 500, color: '#6B4A00', background: 'var(--gold-mist)', display: 'inline-block', padding: '3px 9px', borderRadius: 'var(--r8)', fontSize: 12.5, border: '1px solid var(--gold-border)' }}>
                                  {r.amount}
                                </div>
                              </td>
                              <td style={{ padding: '20px', color: 'var(--ink-30)', fontSize: 13, whiteSpace: 'nowrap' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                  <Calendar size={12} /> {r.date}
                                </div>
                              </td>
                              <td style={{ padding: '20px', color: 'var(--ink-50)', fontSize: 13, maxWidth: 300, lineHeight: 1.5 }}>
                                <div style={{ whiteSpace: 'pre-wrap' }}>{r.notes}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div style={{ padding: '64px 20px', textAlign: 'center', color: 'var(--ink-30)' }}>
                      <Search size={32} strokeWidth={1.5} style={{ color: 'var(--ink-15)', marginBottom: 12 }} />
                      <p style={{ fontSize: 15, fontWeight: 500 }}>No investment proposals found</p>
                      <p style={{ fontSize: 13, marginTop: 4 }}>Any submissions from the Invest page will appear here.</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
