import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">B-Line</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li><Link to="/bon-coin" className="hover:underline cursor-pointer">Bon Coin</Link></li>
          <li><Link to="/delivery" className="hover:underline cursor-pointer">Delivery</Link></li>
          <li><Link to="/service-announcement" className="hover:underline cursor-pointer">Service Announcement</Link></li>
          <li><Link to="/training" className="hover:underline cursor-pointer">Training</Link></li>
          <li><Link to="/event" className="hover:underline cursor-pointer">Event</Link></li>
          <li><Link to="/tip" className="hover:underline cursor-pointer">Tip</Link></li>
          <li><Link to="/intello" className="hover:underline cursor-pointer">Intello</Link></li>
        </ul>
      </nav>
    </header>
  );
}