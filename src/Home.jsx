import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

/* ── AI Neural Grid Background ── */
function AIGridBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let nodes = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Grid settings
    const gridSize = 50
    const dotRadius = 1.5

    // Neural network nodes
    class Node {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.radius = Math.random() * 3 + 3
        this.opacity = Math.random() * 0.4 + 0.5
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        this.pulsePhase += this.pulseSpeed
      }
      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 4)
        gradient.addColorStop(0, `rgba(126, 41, 84, ${this.opacity * pulse})`)
        gradient.addColorStop(0.4, `rgba(255, 140, 66, ${this.opacity * pulse * 0.7})`)
        gradient.addColorStop(1, 'rgba(126, 41, 84, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * pulse * 0.9})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create nodes
    const nodeCount = Math.min(Math.floor((canvas.width * canvas.height) / 20000), 30)
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node())
    }

    const drawGrid = () => {
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.strokeStyle = 'rgba(126, 41, 84, 0.12)'
        ctx.lineWidth = 1
        ctx.stroke()
      }
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.strokeStyle = 'rgba(126, 41, 84, 0.12)'
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Grid dots at intersections
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(255, 140, 66, 0.4)'
          ctx.fill()
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      drawGrid()

      // Update and draw nodes
      nodes.forEach(node => {
        node.update()
        node.draw()
      })

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 250) {
            const opacity = (1 - dist / 250) * 0.35
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(255, 140, 66, ${opacity})`
            ctx.lineWidth = 1.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" />
}

/* ── AI Dashboard Cards ── */
function AIDashboard() {
  const [metrics, setMetrics] = useState({
    processing: 0,
    confidence: 0,
    leads: 0,
    efficiency: 0
  })

  useEffect(() => {
    // Animate metrics on mount
    const timer = setTimeout(() => {
      setMetrics({
        processing: 98,
        confidence: 94,
        leads: 847,
        efficiency: 312
      })
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="hero__dashboard">
      {/* AI Processing */}
      <div className="ai-card">
        <div className="ai-card__header">
          <div className="ai-card__icon">⚡</div>
          <div className="ai-card__label">AI Processing</div>
        </div>
        <div className="ai-card__value">{metrics.processing}%</div>
        <div className="ai-card__bar">
          <div
            className="ai-card__bar-fill ai-card__bar-fill--primary"
            style={{ width: `${metrics.processing}%` }}
          />
        </div>
        <div className="ai-card__pulse" />
      </div>

      {/* Confidence Score */}
      <div className="ai-card">
        <div className="ai-card__header">
          <div className="ai-card__icon">🎯</div>
          <div className="ai-card__label">Confidence</div>
        </div>
        <div className="ai-card__value">{metrics.confidence}%</div>
        <div className="ai-card__bar">
          <div
            className="ai-card__bar-fill ai-card__bar-fill--accent"
            style={{ width: `${metrics.confidence}%` }}
          />
        </div>
        <div className="ai-card__pulse" />
      </div>

      {/* Live Leads */}
      <div className="ai-card">
        <div className="ai-card__header">
          <div className="ai-card__icon">📊</div>
          <div className="ai-card__label">Leads Today</div>
        </div>
        <div className="ai-card__value">
          <AnimatedNumber target={metrics.leads.toString()} suffix="" />
        </div>
        <div className="ai-card__trend">
          <span className="ai-card__trend-icon">↗</span>
          <span className="ai-card__trend-text">+24% vs yesterday</span>
        </div>
        <div className="ai-card__pulse" />
      </div>

      {/* Efficiency */}
      <div className="ai-card">
        <div className="ai-card__header">
          <div className="ai-card__icon">🚀</div>
          <div className="ai-card__label">ROI Boost</div>
        </div>
        <div className="ai-card__value">
          <AnimatedNumber target={metrics.efficiency.toString()} suffix="%" />
        </div>
        <div className="ai-card__trend">
          <span className="ai-card__trend-icon">↗</span>
          <span className="ai-card__trend-text">Above industry avg</span>
        </div>
        <div className="ai-card__pulse" />
      </div>
    </div>
  )
}

/* ── Animated Counter ── */
function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const start = performance.now()
          const numTarget = parseInt(target) || 0

          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * numTarget))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ── SVG Icons ── */
const Icons = {
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
      <path d="M11 8a3 3 0 0 0-3 3"/>
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  sparkles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  lightbulb: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
      <path d="m21 3 1 11h-2"/>
      <path d="M3 3 2 14l6.5 6.7a1 1 0 1 0 3-3l-6.46-6.36"/>
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
      <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
      <path d="M6 18a4 4 0 0 1-1.967-.516"/>
      <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
    </svg>
  ),
}

/* ── Main Component ── */
function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const projects = [
    {
      id: 'lead-accelerator',
      name: 'Lead Accelerator',
      color: 'var(--color-lead-accelerator)',
      colorHex: '#FF8C42',
      icon: Icons.rocket,
      website: null,
      tagline: 'AI-Powered Lead Generation',
      description: 'Lead generation and enrichment through chatbot AI technology and an internal call center that validates every lead for maximum conversion.',
      highlights: ['Best Partner 2023 & 2024 — Eolo', 'AI & Chatbot Qualification', 'Internal Call Center Validation', 'Authorized Eolo Partner Agency'],
      detailedDescription: 'We combine cutting-edge AI technology with human expertise to deliver the highest quality leads. Our dual approach — AI chatbot for initial engagement and a dedicated call center for validation — ensures every lead meets the highest standards.',
      services: [
        { title: 'AI-Powered Lead Generation', description: 'Advanced chatbot technology that engages potential customers, qualifying them in real-time through intelligent conversations.' },
        { title: 'Lead Enrichment & Validation', description: 'Our internal call center team validates and enriches each lead, ensuring maximum conversion rates for our clients.' },
        { title: 'Strategic Partnership with Eolo', description: 'Recognized as Best Partner in 2023 and 2024 for the Sales & Digital channel, delivering the highest number of contracts sold.' },
      ],
      stats: [{ label: 'Contracts Rank', value: '#1' }, { label: 'Years Partnership', value: '5+' }, { label: 'Conversion Rate', value: '45%' }],
    },
    {
      id: 'search-booster',
      name: 'Search Booster',
      color: 'var(--color-search-booster)',
      colorHex: '#4ECDC4',
      icon: Icons.search,
      website: 'https://searchbooster.ai',
      tagline: 'Proprietary Search Technology',
      description: 'Proprietary search engines driving quality traffic to Yahoo!, our advertising feed provider. Tens of millions of searches generated monthly across major paid platforms.',
      highlights: ['Yahoo! Partnership', 'Tens of millions of searches/month', 'Top spender on Meta, TikTok, Google', 'Multi-platform expertise'],
      detailedDescription: 'Search Booster leverages proprietary search engine technology to deliver high-quality traffic to Yahoo!, our trusted advertising feed provider. Through strategic paid media campaigns across 7+ platforms, we generate tens of millions of searches every month.',
      services: [
        { title: 'Proprietary Search Technology', description: 'Custom-built search engines optimized for user intent and advertiser ROI, delivering quality traffic at scale.' },
        { title: 'Multi-Platform Advertising', description: 'Top spenders on Meta, TikTok, Google, Bing, Taboola, MGID, and Outbrain — ensuring maximum reach and quality.' },
        { title: 'Yahoo! Partnership', description: 'As a strategic partner of Yahoo!, we drive high-quality search traffic through our ADV Search feed provider relationship.' },
      ],
      stats: [{ label: 'Monthly Searches', value: '10M+' }, { label: 'Ad Platforms', value: '7+' }, { label: 'Traffic Quality', value: 'Premium' }],
    },
    {
      id: 'cleobi',
      name: 'Cleobi',
      color: 'var(--color-cleobi)',
      colorHex: '#1A365D',
      icon: Icons.cart,
      website: 'https://cleobi.com',
      tagline: 'Shopping Comparison Platform',
      description: 'Premium shopping comparison engine that delivers high purchase-intent traffic to client e-commerce sites on a pure performance revenue-share model.',
      highlights: ['eBay Partner since 2023', 'Google CSS Partner Program', 'Performance-based revenue share', 'Awin, Tradetracker, WebGains'],
      detailedDescription: 'Cleobi connects high-intent shoppers with the best e-commerce offers. We operate on a pure performance basis — we only earn when our clients make sales — aligning our success completely with theirs.',
      services: [
        { title: 'Shopping Comparison Engine', description: 'Advanced comparison technology driving transactional traffic with high purchase intent to client e-commerce sites.' },
        { title: 'Strategic E-commerce Partnerships', description: 'Official partner of eBay since 2023, plus strategic relationships with Awin, Tradetracker, and WebGains affiliate networks.' },
        { title: 'Google CSS Partner', description: 'As a Google Comparison Shopping Service (CSS) partner, we provide exclusive access to Google Shopping with competitive advantages.' },
      ],
      stats: [{ label: 'Partner Since', value: '2023' }, { label: 'Model', value: 'Rev Share' }, { label: 'Networks', value: '3+' }],
    },
    {
      id: 'miriade',
      name: 'Miriade.ai',
      color: 'var(--color-miriade)',
      colorHex: '#8B5CF6',
      icon: Icons.sparkles,
      website: 'https://www.miriade.ai',
      tagline: 'AI-Driven B2B Outreach',
      description: 'Intelligent B2B outreach platform powered by AI that automates prospecting, personalization, and engagement at scale for enterprise sales teams.',
      highlights: ['AI-Native Outreach Engine', 'Automated Prospecting at Scale', 'Hyper-Personalized Messaging', 'Enterprise-Grade Analytics'],
      detailedDescription: 'Miriade.ai represents our latest venture into AI-native products. The platform automates the entire B2B outreach pipeline — from prospect identification to personalized messaging — leveraging advanced AI to drive meaningful business conversations at scale.',
      services: [
        { title: 'AI Prospecting Engine', description: 'Automated identification and qualification of ideal prospects using AI-driven data analysis and intent signals.' },
        { title: 'Hyper-Personalized Outreach', description: 'AI-generated messaging that adapts to each prospect, ensuring relevance and maximizing engagement rates.' },
        { title: 'Campaign Intelligence', description: 'Real-time analytics and optimization of outreach campaigns, continuously improving performance through machine learning.' },
      ],
      stats: [{ label: 'Powered By', value: 'AI' }, { label: 'Outreach Scale', value: '10x' }, { label: 'Response Rate', value: '3x' }],
    },
  ]

  const partners = ['Yahoo!', 'eBay', 'Google', 'Meta', 'TikTok', 'Bing', 'Eolo', 'Awin', 'Taboola', 'Outbrain', 'Tradetracker', 'WebGains', 'MGID']

  const timeline = [
    { year: '2018', title: 'Foundation', description: 'Intraprendenza is born with a mission to innovate performance marketing.' },
    { year: '2020', title: 'Search Booster Launch', description: 'Launch of proprietary search technology with Yahoo! partnership.' },
    { year: '2023', title: 'Cleobi & Eolo Award', description: 'Cleobi launches as eBay partner. First "Best Partner" award from Eolo.' },
    { year: '2024', title: 'AI-First Transformation', description: 'Company-wide AI-first transformation. Second consecutive Eolo Best Partner award.' },
    { year: '2025', title: 'Miriade.ai', description: 'Launch of Miriade.ai — AI-native B2B outreach platform. Full AI-first operating model.' },
  ]

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo">intraprendenza</Link>
          <nav className="header__nav">
            <a href="#about" className="header__link">About</a>
            <a href="#projects" className="header__link">Projects</a>
            <a href="#contact" className="header__link">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero hero--split">
        <AIGridBackground />
        <div className="hero__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero__grid">
            <div className="hero__left">
              <span className="hero__badge">Est. 2018</span>
              <h1 className="hero__title">
                Data-driven growth.<br />
                <span className="hero__gradient">AI-powered results.</span>
              </h1>
              <p className="hero__sub">
                We build proprietary technology that turns traffic into revenue.
                From search engines to AI outreach platforms.
              </p>
              <a href="#projects" className="btn btn--primary">View Projects →</a>
            </div>
            <div className="hero__right">
              <AIDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners Bar ── */}
      <section className="partners">
        <div className="partners__track">
          {[...partners, ...partners].map((name, i) => (
            <span key={i} className="partners__item">{name}</span>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-label">About Us</div>
          <h2 className="section-title">Built for performance.<br />Transformed by AI.</h2>
          <p className="section-lead">
            Founded in 2018, Intraprendenza has evolved from a performance marketing agency
            into a technology-driven ecosystem of digital solutions. In 2024 we completed a
            company-wide <strong>AI-first transformation</strong>, embedding artificial intelligence
            across every division — from lead qualification to outreach automation.
          </p>
          <div className="about__grid">
            <div className="about__card">
              <div className="about__icon">{Icons.target}</div>
              <h3>Performance Driven</h3>
              <p>Every campaign optimized for maximum ROI and measurable results across all channels.</p>
            </div>
            <div className="about__card">
              <div className="about__icon">{Icons.brain}</div>
              <h3>AI-First Operations</h3>
              <p>AI embedded into every workflow — from lead scoring to campaign optimization to B2B outreach.</p>
            </div>
            <div className="about__card">
              <div className="about__icon">{Icons.handshake}</div>
              <h3>Strategic Partnerships</h3>
              <p>Trusted by industry leaders including Yahoo!, eBay, Google, and Eolo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="numbers">
        <div className="container numbers__grid">
          <div className="numbers__item">
            <div className="numbers__value"><AnimatedNumber target="10" suffix="M+" /></div>
            <div className="numbers__label">Monthly Searches</div>
          </div>
          <div className="numbers__item">
            <div className="numbers__value"><AnimatedNumber target="7" suffix="+" /></div>
            <div className="numbers__label">Ad Platforms</div>
          </div>
          <div className="numbers__item">
            <div className="numbers__value"><AnimatedNumber target="4" /></div>
            <div className="numbers__label">Active Projects</div>
          </div>
          <div className="numbers__item">
            <div className="numbers__value"><AnimatedNumber target="2" suffix="x" /></div>
            <div className="numbers__label">Eolo Best Partner</div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-label">Our Projects</div>
          <h2 className="section-title">Four divisions.<br />One mission.</h2>
          <div className="projects__grid">
            {projects.map((p) => (
              <div key={p.id} className="project-card" style={{ '--accent': p.colorHex }}>
                <div className="project-card__icon">{p.icon}</div>
                <h3 className="project-card__name">{p.name}</h3>
                <span className="project-card__tag">{p.tagline}</span>
                <p className="project-card__desc">{p.description}</p>
                <ul className="project-card__list">
                  {p.highlights.map((h, i) => (
                    <li key={i}><span className="project-card__check">&#10003;</span>{h}</li>
                  ))}
                </ul>
                <button className="project-card__btn" onClick={() => scrollTo(p.id)}>
                  Discover more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Details ── */}
      {projects.map((p) => (
        <section key={p.id} id={p.id} className="detail" style={{ '--accent': p.colorHex }}>
          <div className="container">
            <div className="detail__head">
              <div className="detail__icon">{p.icon}</div>
              <div>
                <h2 className="detail__title">{p.name}</h2>
                <p className="detail__sub">{p.detailedDescription}</p>
              </div>
            </div>
            <div className="detail__services">
              {p.services.map((s, i) => (
                <div key={i} className="detail__service">
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
            <div className="detail__stats">
              {p.stats.map((s, i) => (
                <div key={i} className="detail__stat">
                  <span className="detail__stat-val">{s.value}</span>
                  <span className="detail__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="detail__cta">
              {p.website ? (
                <a href={p.website} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Visit {p.name}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                </a>
              ) : (
                <button className="btn btn--outline" onClick={() => scrollTo('projects')}>Back to Projects</button>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ── Timeline ── */}
      <section className="timeline">
        <div className="container">
          <div className="section-label">Our Journey</div>
          <h2 className="section-title">From startup to<br />AI-first company</h2>
          <div className="timeline__track">
            {timeline.map((item, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <span className="timeline__year">{item.year}</span>
                  <h4 className="timeline__heading">{item.title}</h4>
                  <p className="timeline__text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <h2 className="footer__logo">intraprendenza</h2>
              <p className="footer__tagline">Performance Marketing Excellence since 2018</p>
              <div className="footer__legal">
                <p><strong>INTRAPRENDENZA S.R.L.</strong></p>
                <p>Via Calzabigi 4, 57125 Livorno (LI)</p>
                <p>REA 207784 &middot; Cap. soc. € 10.000,00</p>
                <p>PEC: <a href="mailto:intraprendenzasrl@pec.it">intraprendenzasrl@pec.it</a></p>
                <p>SDI: M5UXCR1</p>
              </div>
            </div>
            <div className="footer__cols">
              <div className="footer__col">
                <h4>Projects</h4>
                <ul>
                  {projects.map(p => (
                    <li key={p.id}><a href={`#${p.id}`}>{p.name}</a></li>
                  ))}
                </ul>
              </div>
              <div className="footer__col">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} Intraprendenza Srl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
