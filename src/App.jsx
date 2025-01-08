import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BonCoin from './components/BonCoin';
import Delivery from './components/Delivery';
import ServiceAnnouncement from './components/ServiceAnnouncement';
import Training from './components/Training';
import Event from './components/Event';
import Tip from './components/Tip';
import Intello from './components/Intello';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/bon-coin" element={<BonCoin />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/service-announcement" element={<ServiceAnnouncement />} />
            <Route path="/training" element={<Training />} />
            <Route path="/event" element={<Event />} />
            <Route path="/tip" element={<Tip />} />
            <Route path="/intello" element={<Intello />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}