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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const projects = [
    {
      id: 'lead-accelerator',
      name: 'Lead Accelerator',
      color: '#FF8C42',
      icon: '🚀',
      description: 'AI-powered lead generation and enrichment division. Utilizing chatbot technology and an internal call center to validate and qualify leads.',
      highlights: [
        'Best Partner 2023 & 2024 for Eolo',
        'AI & Chatbot Integration',
        'Internal Call Center Validation',
        'Authorized Eolo Partner Agency'
      ],
      detailedDescription: 'Lead Accelerator represents our pioneering approach to lead generation and qualification. We combine cutting-edge AI technology with human expertise to deliver the highest quality leads to our clients.',
      services: [
        {
          title: 'AI-Powered Lead Generation',
          description: 'Advanced chatbot technology that engages potential customers, qualifying them in real-time through intelligent conversations.'
        },
        {
          title: 'Lead Enrichment & Validation',
          description: 'Our internal call center team validates and enriches each lead, ensuring maximum conversion rates for our clients.'
        },
        {
          title: 'Strategic Partnership with Eolo',
          description: 'As an authorized Eolo partner agency, we have been recognized as Best Partner in 2023 and 2024 for the Sales & Digital channel, delivering the highest number of contracts.'
        }
      ],
      stats: [
        { label: 'Contracts Delivered', value: '#1' },
        { label: 'Years Partnership', value: '5+' },
        { label: 'Conversion Rate', value: '45%' }
      ]
    },
    {
      id: 'search-booster',
      name: 'Search Booster',
      color: '#4ECDC4',
      icon: '🔍',
      description: 'Proprietary search engines driving traffic to Yahoo, our advertising feed provider. Generating millions of searches monthly through strategic paid media campaigns.',
      highlights: [
        'Yahoo! Partnership',
        'Millions of searches/month',
        'Top spender on Meta, TikTok, Google',
        'Multi-platform expertise'
      ],
      detailedDescription: 'Search Booster leverages proprietary search engine technology to deliver high-quality traffic to Yahoo!, our trusted advertising feed provider. Through strategic paid media campaigns across multiple platforms, we generate millions of searches every month.',
      services: [
        {
          title: 'Proprietary Search Technology',
          description: 'Custom-built search engines optimized for user intent and advertiser ROI, delivering quality traffic at scale.'
        },
        {
          title: 'Multi-Platform Advertising',
          description: 'We are top spenders on major platforms including Meta, TikTok, Google, Bing, Taboola, MGID, and Outbrain, ensuring maximum reach and quality.'
        },
        {
          title: 'Yahoo! Partnership',
          description: 'As a strategic partner of Yahoo!, we provide high-quality search traffic through our advertising feed provider relationship.'
        }
      ],
      stats: [
        { label: 'Monthly Searches', value: '10M+' },
        { label: 'Ad Platforms', value: '7' },
        { label: 'Traffic Quality', value: 'Premium' }
      ]
    },
    {
      id: 'cleobi',
      name: 'Cleobi',
      color: '#1A365D',
      icon: '🛍️',
      description: 'Shopping comparison platform delivering high-intent traffic to client e-commerce sites. Revenue-based performance model.',
      highlights: [
        'eBay Partner since 2023',
        'Google CSS Partner Program',
        'Performance-based model',
        'Awin, Tradetracker, WebGains'
      ],
      detailedDescription: 'Cleobi is our premium shopping comparison platform that connects high-intent shoppers with the best e-commerce offers. We operate on a pure performance basis, aligning our success with our clients\' success.',
      services: [
        {
          title: 'Shopping Comparison Platform',
          description: 'Advanced comparison technology that drives transactional traffic with high purchase intent to our client e-commerce sites.'
        },
        {
          title: 'Strategic E-commerce Partnerships',
          description: 'Official partner of eBay since 2023, plus strategic relationships with Awin, Tradetracker, and WebGains affiliate networks.'
        },
        {
          title: 'Google CSS Partner Program',
          description: 'As a Google Comparison Shopping Service (CSS) partner, we provide exclusive access to Google Shopping with competitive advantages.'
        }
      ],
      stats: [
        { label: 'Partner Since', value: '2023' },
        { label: 'Revenue Share', value: 'Performance' },
        { label: 'Affiliate Networks', value: '3+' }
      ]
    },
    {
      id: 'adsflare',
      name: 'Adsflare',
      color: '#E63946',
      icon: '📊',
      description: 'SaaS platform specialized in managing Google Ads campaigns, particularly Shopping and Performance Max for e-Commerce businesses.',
      highlights: [
        'Google Ads Expertise',
        'Shopping & pMax Optimization',
        'E-Commerce Focused',
        'Advanced Campaign Management'
      ],
      detailedDescription: 'Adsflare is our SaaS solution designed specifically for e-commerce businesses looking to maximize their Google Ads performance. We specialize in Shopping and Performance Max campaigns, delivering measurable ROI improvements.',
      services: [
        {
          title: 'Shopping Campaign Optimization',
          description: 'Advanced algorithms and strategies specifically designed to maximize ROI on Google Shopping campaigns for e-commerce businesses.'
        },
        {
          title: 'Performance Max Management',
          description: 'Expert management of Google\'s Performance Max campaigns, leveraging AI and machine learning for optimal results.'
        },
        {
          title: 'E-Commerce Analytics',
          description: 'Comprehensive analytics and reporting tools that provide actionable insights for continuous campaign improvement.'
        }
      ],
      stats: [
        { label: 'Campaign Types', value: '2' },
        { label: 'Average ROAS', value: '4.5x' },
        { label: 'Active Clients', value: '50+' }
      ]
    },
    {
      id: 'werego',
      name: 'Werego',
      color: '#06D6A0',
      icon: '📈',
      description: 'Advanced tracking system for monitoring Google AFS keyword performance and outbound traffic monetization platform for editorial websites.',
      highlights: [
        'Google AFS Integration',
        'Advanced Keyword Tracking',
        'Display Monetization',
        'Editorial Site Optimization'
      ],
      detailedDescription: 'Werego provides editorial websites with advanced tracking and monetization tools. Our platform monitors Google AFS (Adsense for Search) keyword performance and optimizes outbound traffic monetization through display advertising.',
      services: [
        {
          title: 'Google AFS Tracking',
          description: 'Real-time monitoring and optimization of keyword performance on Google Adsense for Search, maximizing revenue per search.'
        },
        {
          title: 'Traffic Monetization',
          description: 'Advanced display advertising platform that monetizes outbound traffic from editorial sites with premium advertisers.'
        },
        {
          title: 'Editorial Optimization',
          description: 'Tools and strategies specifically designed for editorial websites to maximize both user experience and advertising revenue.'
        }
      ],
      stats: [
        { label: 'Tracking Accuracy', value: '99.9%' },
        { label: 'Revenue Increase', value: '+35%' },
        { label: 'Publisher Sites', value: '100+' }
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
                  <button
                    className="project-btn"
                    onClick={() => scrollToSection(project.id)}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Sections */}
      {projects.map((project, index) => (
        <section
          key={project.id}
          id={project.id}
          className="project-detail"
          style={{ '--project-color': project.color }}
        >
          <div className="container">
            <div className="project-detail-header">
              <div className="project-detail-icon">{project.icon}</div>
              <div>
                <h2 className="project-detail-title">{project.name}</h2>
                <p className="project-detail-subtitle">{project.detailedDescription}</p>
              </div>
            </div>

            <div className="project-services">
              {project.services.map((service, i) => (
                <div key={i} className="service-card">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="project-stats">
              {project.stats.map((stat, i) => (
                <div key={i} className="project-stat">
                  <div className="project-stat-value">{stat.value}</div>
                  <div className="project-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="project-detail-footer">
              <button
                className="back-to-projects-btn"
                onClick={() => scrollToSection('projects')}
              >
                ← Back to All Projects
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <h2 className="footer-logo">Intraprendenza</h2>
              <p className="footer-tagline">
                Performance Marketing Excellence since 2018
              </p>
              <div className="footer-company-info">
                <p><strong>INTRAPRENDENZA S.R.L.</strong></p>
                <p>VIA CALZABIGI 4</p>
                <p>57125 - LIVORNO (LI)</p>
                <p>REA: 207784</p>
                <p>Capitale sociale: € 10.000,00</p>
                <p>PEC: <a href="mailto:intraprendenzasrl@pec.it">intraprendenzasrl@pec.it</a></p>
                <p>Codice destinatario: M5UXCR1</p>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Projects</h4>
                <ul>
                  <li><a href="#lead-accelerator">Lead Accelerator</a></li>
                  <li><a href="#search-booster">Search Booster</a></li>
                  <li><a href="#cleobi">Cleobi</a></li>
                  <li><a href="#adsflare">Adsflare</a></li>
                  <li><a href="#werego">Werego</a></li>
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
