import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import PrivacyPolicy from './PrivacyPolicy'
import BandoImpresaDigitale from './BandoImpresaDigitale'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/bando-impresa-digitale" element={<BandoImpresaDigitale />} />
      </Routes>
    </Router>
  )
}

export default App
