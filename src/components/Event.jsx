import React, { useState } from 'react';

export default function Event() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Music Concert', location: 'City Park', date: '2023-10-15' },
    { id: 2, title: 'Art Exhibition', location: 'Downtown Gallery', date: '2023-11-01' }
  ]);

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold">Event</h2>
      <div className="mt-4">
        {events.map(event => (
          <div key={event.id} className="border p-4 mb-4">
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.location}</p>
            <p>Date: {event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}