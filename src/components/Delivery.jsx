import React, { useState } from 'react';

export default function Delivery() {
  const [address, setAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState('standard');

  const handleOrder = () => {
    // Handle order submission
    console.log('Order submitted:', { address, deliveryType });
  };

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-xl font-bold">Delivery</h2>
      <div className="mt-4">
        <label className="block mb-2">Delivery Address:</label>
        <input
          type="text"
          className="border p-2 w-full box-border"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2">Delivery Type:</label>
        <select
          className="border p-2 w-full box-border"
          value={deliveryType}
          onChange={e => setDeliveryType(e.target.value)}
        >
          <option value="standard">Standard Delivery</option>
          <option value="vip">VIP Delivery</option>
        </select>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
        onClick={handleOrder}
      >
        Place Order
      </button>
    </div>
  );
}