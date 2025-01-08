import React, { useState, useEffect } from 'react';

export default function BonCoin() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch listings from API or backend
    // For now, we'll use mock data
    const mockListings = [
      { id: 1, title: 'Restaurant Le Gourmet', category: 'Restaurant', description: 'Fine dining experience.', rating: 4.5 },
      { id: 2, title: 'Hotel Comfort Inn', category: 'Hotel', description: 'Comfortable rooms at affordable prices.', rating: 4.0 }
    ];
    setListings(mockListings);
  }, []);

  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold">Bon Coin</h2>
      <input
        type="text"
        placeholder="Search for products or services"
        className="border p-2 w-full mt-4 mb-4 box-border"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredListings.map(listing => (
          <div key={listing.id} className="border p-4 cursor-pointer">
            <h3 className="text-lg font-bold">{listing.title}</h3>
            <p className="text-sm text-gray-600">{listing.category}</p>
            <p>{listing.description}</p>
            <p className="text-yellow-500">Rating: {listing.rating}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
}