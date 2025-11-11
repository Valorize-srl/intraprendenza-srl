import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      name: 'Lead Accelerator',
      color: '#FF8C42',
      icon: '🚀',
      description: 'AI-powered lead generation and enrichment division. Utilizing chatbot technology and an internal call center to validate and qualify leads.',
      highlights: [
        'Best Partner 2023 & 2024 for Eolo',
        'AI & Chatbot Integration',
        'Internal Call Center Validation',
        'Authorized Eolo Partner Agency'
      ]
    },
    {
      name: 'Search Booster',
      color: '#4ECDC4',
      icon: '🔍',
      description: 'Proprietary search engines driving traffic to Yahoo, our advertising feed provider. Generating millions of searches monthly through strategic paid media campaigns.',
      highlights: [
        'Yahoo! Partnership',
        'Millions of searches/month',
        'Top spender on Meta, TikTok, Google',
        'Multi-platform expertise'
      ]
    },
    {
      name: 'Cleobi',
      color: '#1A365D',
      icon: '🛍️',
      description: 'Shopping comparison platform delivering high-intent traffic to client e-commerce sites. Revenue-based performance model.',
      highlights: [
        'eBay Partner since 2023',
        'Google CSS Partner Program',
        'Performance-based model',
        'Awin, Tradetracker, WebGains'
      ]
    },
    {
      name: 'Adsflare',
      color: '#E63946',
      icon: '📊',
      description: 'SaaS platform specialized in managing Google Ads campaigns, particularly Shopping and Performance Max for e-Commerce businesses.',
      highlights: [
        'Google Ads Expertise',
        'Shopping & pMax Optimization',
        'E-Commerce Focused',
        'Advanced Campaign Management'
      ]
    },
    {
      name: 'Werego',
      color: '#06D6A0',
      icon: '📈',
      description: 'Advanced tracking system for monitoring Google AFS keyword performance and outbound traffic monetization platform for editorial websites.',
      highlights: [
        'Google AFS Integration',
        'Advanced Keyword Tracking',
        'Display Monetization',
        'Editorial Site Optimization'
      ]
    }
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <h1 className="logo">Intraprendenza</h1>
            <nav className="nav">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Since 2018</div>
            <h1 className="hero-title">
              Performance Marketing
              <span className="gradient-text">Excellence</span>
            </h1>
            <p className="hero-subtitle">
              Leading the future of digital advertising with innovative solutions
              across lead generation, search optimization, and e-commerce technology.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">Explore Our Projects</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5</div>
                <div className="stat-label">Innovative Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">7+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat">
                <div className="stat-number">M+</div>
                <div className="stat-label">Monthly Searches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Intraprendenza</h2>
            <p className="section-subtitle">
              Pioneering performance marketing since 2018
            </p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                Founded in 2018, Intraprendenza has established itself as a leader in
                performance marketing, consistently pushing the boundaries of digital
                advertising innovation. Our journey began with a singular focus on
                performance marketing, and has evolved into a comprehensive ecosystem
                of cutting-edge digital solutions.
              </p>
              <p className="about-description">
                Today, we operate five distinct divisions, each specializing in different
                aspects of the digital marketing landscape. From AI-powered lead generation
                to advanced tracking systems, our projects represent the forefront of
                marketing technology and strategy.
              </p>
            </div>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <h3>Performance Driven</h3>
                <p>Every campaign optimized for maximum ROI and measurable results</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💡</div>
                <h3>Innovation First</h3>
                <p>Leveraging cutting-edge technology and proprietary solutions</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <h3>Strategic Partnerships</h3>
                <p>Collaborating with industry leaders like Yahoo!, eBay, and Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">
              Five innovative divisions driving digital excellence
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                style={{ '--project-color': project.color }}
              >
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <h3 className="project-name">{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                <div className="project-footer">
                  <button className="project-btn">Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h2 className="footer-logo">Intraprendenza</h2>
              <p className="footer-tagline">
                Performance Marketing Excellence since 2018
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Projects</h4>
                <ul>
                  <li><a href="#projects">Lead Accelerator</a></li>
                  <li><a href="#projects">Search Booster</a></li>
                  <li><a href="#projects">Cleobi</a></li>
                  <li><a href="#projects">Adsflare</a></li>
                  <li><a href="#projects">Werego</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#projects">Our Work</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Intraprendenza Srl. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
