import React, { useState } from 'react';

export default function Training() {
  const [trainings, setTrainings] = useState([
    { id: 1, field: 'Technology', title: 'Introduction to React', type: 'Free' },
    { id: 2, field: 'Business', title: 'Project Management Professional', type: 'Paid' }
  ]);

  const [filterField, setFilterField] = useState('');

  const filteredTrainings = trainings.filter(training =>
    training.field.toLowerCase().includes(filterField.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold">Training</h2>
      <div className="mt-4">
        <label className="block mb-2">Filter by Field:</label>
        <input
          type="text"
          placeholder="Enter field"
          className="border p-2 w-full box-border"
          value={filterField}
          onChange={e => setFilterField(e.target.value)}
        />
      </div>
      <div className="mt-4">
        {filteredTrainings.map(training => (
          <div key={training.id} className="border p-4 mb-4">
            <h3 className="text-lg font-bold">{training.title}</h3>
            <p className="text-sm text-gray-600">{training.field}</p>
            <p>Type: {training.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}