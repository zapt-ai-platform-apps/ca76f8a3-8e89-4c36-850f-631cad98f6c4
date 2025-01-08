import React, { useState } from 'react';

export default function ServiceAnnouncement() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, category: 'Jobs', title: 'Software Developer Position', description: 'Looking for an experienced developer.' },
    { id: 2, category: 'Real Estate', title: 'Apartment for Rent', description: '2-bedroom apartment in city center.' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnnouncements = announcements.filter(announcement =>
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold">Service Announcement</h2>
      <input
        type="text"
        placeholder="Search announcements"
        className="border p-2 w-full mt-4 mb-4 box-border"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredAnnouncements.map(announcement => (
          <div key={announcement.id} className="border p-4 mb-4">
            <h3 className="text-lg font-bold">{announcement.title}</h3>
            <p className="text-sm text-gray-600">{announcement.category}</p>
            <p>{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}