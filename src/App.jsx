import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './Components/Catalogs';
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import About from './Components/About';
import Contact from './Components/Contact';
import Payment from './Components/Payment';
import Portfolio from './Components/Portfolio';
import Review from './Components/Review';

function App() {
  return (
    <div className="bg-white">
      <Nav />
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/review" element={<Review />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
