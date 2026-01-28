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
      website: null,
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
      website: 'https://searchbooster.ai',
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
      website: 'https://cleobi.com',
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
                <div className="stat-number">3</div>
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
                Today, we operate three distinct divisions, each specializing in different
                aspects of the digital marketing landscape. From AI-powered lead generation
                to shopping comparison technology, our projects represent the forefront of
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
              Three innovative divisions driving digital excellence
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
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-website-btn"
                >
                  Visit {project.name} Website →
                </a>
              ) : (
                <button
                  className="back-to-projects-btn"
                  onClick={() => scrollToSection('projects')}
                >
                  ← Back to All Projects
                </button>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Privacy Policy Section */}
      <section id="privacy" className="privacy-policy">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Privacy Policy</h2>
            <p className="section-subtitle">
              Information about how we collect and use your data
            </p>
          </div>
          <div className="privacy-content">
            <div className="privacy-section">
              <h3>1. Data Controller</h3>
              <p>
                The Data Controller is Intraprendenza S.r.l., with registered office at Via Calzabigi 4, 57125 Livorno (LI),
                Italy, REA 207784, email: intraprendenzasrl@pec.it
              </p>
            </div>

            <div className="privacy-section">
              <h3>2. Types of Data Collected</h3>
              <p>
                Among the types of Personal Data that this website collects, by itself or through third parties, there are:
                Cookies, Usage Data, email address, first name, and last name.
              </p>
              <p>
                Complete details on each type of Personal Data collected are provided in the dedicated sections of this
                privacy policy or by specific explanation texts displayed prior to the Data collection.
              </p>
            </div>

            <div className="privacy-section">
              <h3>3. Purpose of Data Processing</h3>
              <p>
                The Data concerning the User is collected to allow the Owner to provide its services, as well as for the
                following purposes:
              </p>
              <ul>
                <li>Analytics and statistics</li>
                <li>Contacting the User</li>
                <li>Managing contacts and sending messages</li>
                <li>Interaction with external social networks and platforms</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3>4. Legal Basis for Processing</h3>
              <p>
                The Owner may process Personal Data relating to Users if one of the following applies:
              </p>
              <ul>
                <li>Users have given their consent for one or more specific purposes</li>
                <li>Provision of Data is necessary for the performance of an agreement with the User</li>
                <li>Processing is necessary for compliance with a legal obligation</li>
                <li>Processing is related to a task carried out in the public interest</li>
                <li>Processing is necessary for the purposes of legitimate interests pursued by the Owner</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3>5. User Rights</h3>
              <p>
                Users may exercise certain rights regarding their Data processed by the Owner. In particular, Users have
                the right to:
              </p>
              <ul>
                <li>Withdraw their consent at any time</li>
                <li>Object to processing of their Data</li>
                <li>Access their Data</li>
                <li>Verify and seek rectification</li>
                <li>Restrict the processing of their Data</li>
                <li>Have their Personal Data deleted or otherwise removed</li>
                <li>Receive their Data and have it transferred to another controller</li>
                <li>Lodge a complaint with the relevant data protection authority</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3>6. Cookies</h3>
              <p>
                This website uses Cookies and similar technologies to ensure proper functioning and to improve user experience.
                Users can manage their preferences regarding Cookies through their browser settings.
              </p>
            </div>

            <div className="privacy-section">
              <h3>7. Data Retention</h3>
              <p>
                Personal Data shall be processed and stored for as long as required by the purpose for which it has been collected.
                Therefore, Personal Data collected for purposes related to the performance of a contract shall be retained until
                such contract has been fully performed.
              </p>
            </div>

            <div className="privacy-section">
              <h3>8. Contact Information</h3>
              <p>
                For any questions or requests regarding this Privacy Policy, you can contact us at:
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:intraprendenzasrl@pec.it">intraprendenzasrl@pec.it</a><br />
                <strong>Address:</strong> Via Calzabigi 4, 57125 Livorno (LI), Italy
              </p>
            </div>

            <div className="privacy-section">
              <h3>9. Changes to This Privacy Policy</h3>
              <p>
                The Owner reserves the right to make changes to this privacy policy at any time by giving notice to its Users
                on this page. It is strongly recommended to check this page often, referring to the date of the last modification
                listed at the bottom.
              </p>
              <p className="privacy-update">
                <strong>Last updated:</strong> January 28, 2026
              </p>
            </div>
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
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#projects">Our Work</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
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
