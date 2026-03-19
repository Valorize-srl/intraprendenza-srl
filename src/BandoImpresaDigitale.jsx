import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function BandoImpresaDigitale() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="header__logo">intraprendenza</Link>
          <nav className="header__nav">
            <Link to="/" className="header__link">Home</Link>
            <Link to="/#projects" className="header__link">Projects</Link>
            <Link to="/#contact" className="header__link">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bando-page">
        <div className="container">
          <div className="section-label">Bando</div>
          <h2 className="section-title">Bando Impresa Digitale</h2>

          <div className="bando-content">
            <div className="bando-header-image">
              <img src="/bando-header.png" alt="POR CreO 2014-2020 - Unione Europea, Repubblica Italiana, Regione Toscana - Le ali alle tue idee" />
            </div>

            <div className="bando-text">
              <p className="bando-intro">
                Siamo lieti di annunciare che il nostro progetto:<br />
                <strong>&ldquo;Automazione delle Reportistiche per l&rsquo;Ottimizzazione del Performance Marketing mediante Intelligenza Artificiale&rdquo;</strong><br />
                &egrave; stato realizzato con il contributo del Programma Regionale FESR Toscana 2021-2027, nell&rsquo;ambito dell&rsquo;Azione 1.6.1 &ldquo;Servizi per l&rsquo;innovazione&rdquo;.
              </p>

              <div className="bando-section">
                <h3>Obiettivo del progetto</h3>
                <p>
                  Il progetto &ldquo;Automazione delle Reportistiche per l&rsquo;Ottimizzazione del Performance Marketing
                  mediante Intelligenza Artificiale&rdquo; ha come obiettivo la trasformazione dei processi di gestione delle campagne di
                  marketing di Intraprendenza Srl attraverso l&rsquo;implementazione di un sistema avanzato di automazione. Grazie all&rsquo;uso di
                  tecnologie innovative come intelligenza artificiale e cloud computing, sar&agrave; possibile generare report dettagliati e
                  personalizzati, riducendo gli errori umani e migliorando l&rsquo;efficienza operativa.
                </p>
              </div>

              <div className="bando-section">
                <h3>Risultati attesi</h3>
                <p>
                  Generazione automatica di report, riduzione degli errori manuali, aumento dell&rsquo;efficienza operativa,
                  miglioramento delle decisioni strategiche, ottimizzazione delle campagne di marketing.
                </p>
              </div>

              <div className="bando-section">
                <h3>Investimento effettuato</h3>
                <p>
                  Questo progetto &egrave; finanziato grazie al sostegno dell&rsquo;Unione Europea attraverso il Fondo
                  Europeo di Sviluppo Regionale (FESR) e la Regione Toscana e l&rsquo;investimento effettuato &egrave; di <strong>&euro; 150K</strong>.
                </p>
              </div>
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
                <p>REA 207784 &middot; Cap. soc. &euro; 10.000,00</p>
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

export default BandoImpresaDigitale
