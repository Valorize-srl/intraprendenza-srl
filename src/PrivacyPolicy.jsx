import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <header className="header header--scrolled">
        <div className="container header__inner">
          <Link to="/" className="header__logo">intraprendenza</Link>
          <nav className="header__nav">
            <Link to="/" className="header__link">Home</Link>
            <Link to="/#projects" className="header__link">Projects</Link>
            <Link to="/#contact" className="header__link">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="privacy-policy privacy-page">
        <div className="container">
          <div className="section-label">Legal</div>
          <h2 className="section-title">Privacy Policy</h2>
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
              <p>The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes:</p>
              <ul>
                <li>Analytics and statistics</li>
                <li>Contacting the User</li>
                <li>Managing contacts and sending messages</li>
                <li>Interaction with external social networks and platforms</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h3>4. Legal Basis for Processing</h3>
              <p>The Owner may process Personal Data relating to Users if one of the following applies:</p>
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
              <p>Users may exercise certain rights regarding their Data processed by the Owner. In particular, Users have the right to:</p>
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
              <p>For any questions or requests regarding this Privacy Policy, you can contact us at:</p>
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
              <p className="privacy-update"><strong>Last updated:</strong> January 28, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
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
                  <li><Link to="/#lead-accelerator">Lead Accelerator</Link></li>
                  <li><Link to="/#search-booster">Search Booster</Link></li>
                  <li><Link to="/#cleobi">Cleobi</Link></li>
                  <li><Link to="/#miriade">Miriade.ai</Link></li>
                </ul>
              </div>
              <div className="footer__col">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/#about">About</Link></li>
                  <li><Link to="/#projects">Projects</Link></li>
                  <li><Link to="/#contact">Contact</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/bando-impresa-digitale">Bando Impresa Digitale</Link></li>
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

export default PrivacyPolicy
