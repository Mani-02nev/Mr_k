import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description, keywords }) {
  const { pathname } = useLocation()

  useEffect(() => {
    // 1. Update Title
    const fullTitle = title ? `${title} | Mr.K AI` : 'Mr.K | AI Product Company'
    document.title = fullTitle

    // 2. Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description || 'Mr.K is a solo founder AI product company building intelligent, accessible, and purpose-driven tools for students, professionals, and businesses worldwide.'
      )
    }

    // 3. Update Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        keywords || 'Mr.K, AI, Resume Builder, Code Agent, Law Agent, Data Analytics, AI Editor, KsCV Builder, Mr.K Agent IDE, Law Agent, View Once DA, Kdoc Editor, Karuppasamy M'
      )
    }

    // 4. Update OpenGraph URL, Title, Description
    const currentUrl = `https://mrk02.vercel.app${pathname === '/' ? '' : pathname}`
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', currentUrl)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', fullTitle)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        description || 'Building intelligent, lean, and purpose-driven AI products for students, professionals, and enterprises worldwide.'
      )
    }

    // 5. Update Twitter URL, Title, Description
    const twUrl = document.querySelector('meta[name="twitter:url"]')
    if (twUrl) twUrl.setAttribute('content', currentUrl)

    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', fullTitle)

    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) {
      twDesc.setAttribute(
        'content',
        description || 'Building intelligent, lean, and purpose-driven AI products for students, professionals, and enterprises worldwide.'
      )
    }

    // 6. Update Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', currentUrl)
    }
  }, [title, description, keywords, pathname])

  return null
}
