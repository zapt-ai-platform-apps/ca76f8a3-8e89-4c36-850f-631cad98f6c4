import React from 'react';

export default function Intello() {
  const intellectualWorks = [
    { id: 1, title: 'Research Paper on AI', author: 'Dr. Smith' },
    { id: 2, title: 'Business Management Tools', author: 'Jane Doe' }
  ];

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold">Intello</h2>
      <div className="mt-4">
        {intellectualWorks.map(work => (
          <div key={work.id} className="border p-4 mb-4">
            <h3 className="text-lg font-bold">{work.title}</h3>
            <p className="text-sm text-gray-600">Author: {work.author}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}