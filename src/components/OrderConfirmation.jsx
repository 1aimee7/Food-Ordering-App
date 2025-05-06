import React from 'react';

const OrderConfirmation = ({ cartItems, total, startNewOrder }) => {
  const handleImageError = (e) => {
    e.target.src = '/api/placeholder/50/50'; // Fallback placeholder for thumbnails
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirmation-title"
    >
      <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-md w-full">
        <h2 
          id="order-confirmation-title" 
          className="text-2xl font-bold mb-6 text-center"
        >
          Order Confirmation
        </h2>
        
        <div className="max-h-60 overflow-y-auto mb-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between py-2 border-b items-center">
              <div className="flex items-center">
                <img 
                  src={item.image.thumbnail} 
                  alt={`${item.name} thumbnail`}
                  className="w-12 h-12 object-cover mr-2 rounded"
                  onError={handleImageError}
                />
                <div>
                  <span className="font-medium">{item.quantity}x</span>
                  <span className="ml-2">{item.name}</span>
                </div>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4 mb-6">
          <div className="flex justify-between">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
        </div>
        
        <p className="text-center text-green-600 mb-6">
          Thank you for your order!
        </p>
        
        <button
          onClick={startNewOrder}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;