import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description, keywords }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const BASE_URL = 'https://mrk02.vercel.app'
    const currentUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`

    // 1. Title
    const fullTitle = title
      ? `${title} | Mr.K AI — Karuppasamy M`
      : 'Mr.K | AI Product Company — Built by Karuppasamy M'
    document.title = fullTitle

    // 2. Meta Description
    const defaultDesc = 'Mr.K is a Solo Founder AI Product Company built by Karuppasamy M — AI/ML developer and Google Student Ambassador from Tamil Nadu, India. Building 5 live AI tools: KsCV Builder, Agent IDE, Law Agent, View Once DA, and Kdoc AI Editor.'
    const setMeta = (selector, attr, val) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, val)
    }

    setMeta('meta[name="description"]', 'content', description || defaultDesc)
    setMeta('meta[name="keywords"]', 'content',
      keywords || 'Mr.K, Karuppasamy M, AI Product Company, Solo Founder, KsCV Builder, Agent IDE, Law Agent, View Once DA, Kdoc Editor, Tamil Nadu AI Developer, Google Student Ambassador'
    )
    setMeta('meta[name="author"]', 'content', 'Karuppasamy M')

    // 3. Open Graph
    setMeta('meta[property="og:url"]', 'content', currentUrl)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description || defaultDesc)

    // 4. Twitter
    setMeta('meta[name="twitter:url"]', 'content', currentUrl)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description || defaultDesc)

    // 5. Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', currentUrl)

  }, [title, description, keywords, pathname])

  return null
}
