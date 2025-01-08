import React from 'react';

export default function Tip() {
  const tips = [
    { id: 1, title: 'Saving Money', content: 'Create a budget and stick to it.' },
    { id: 2, title: 'Healthy Living', content: 'Exercise regularly and eat a balanced diet.' }
  ];

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold">Tips</h2>
      <div className="mt-4">
        {tips.map(tip => (
          <div key={tip.id} className="border p-4 mb-4">
            <h3 className="text-lg font-bold">{tip.title}</h3>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}