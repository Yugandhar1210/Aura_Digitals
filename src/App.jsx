import React from "react";
import { Header, Footer } from "./components/common";
import Home from "./pages/Home";
// Future: Uncomment when using React Router
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home, ServicesPage, AboutPage, ContactPage } from './pages';

/**
 * Main App component
 * Currently uses single-page layout with smooth scrolling
 * Future: Can be converted to multi-page using React Router
 */
function App() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Single page layout */}
        <Home />

        {/* Future: Multi-page routing setup
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
        */}
      </main>
      <Footer />
    </>
  );
}

export default App;
