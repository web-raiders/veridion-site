import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import CommoditySourcing from './pages/services/CommoditySourcing'
import DevelopmentFinance from './pages/services/DevelopmentFinance'
import MarketIntelligence from './pages/services/MarketIntelligence'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/commodity-sourcing" element={<CommoditySourcing />} />
        <Route path="/services/development-finance" element={<DevelopmentFinance />} />
        <Route path="/services/market-intelligence" element={<MarketIntelligence />} />
        {/* Compatibility redirects from live-WP slugs */}
        <Route
          path="/service/commodity-sourcing-trade-facilitation"
          element={<Navigate to="/services/commodity-sourcing" replace />}
        />
        <Route
          path="/service/development-finance-advisory"
          element={<Navigate to="/services/development-finance" replace />}
        />
        <Route
          path="/service/market-intelligence-risk-advisory"
          element={<Navigate to="/services/market-intelligence" replace />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
