import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity, confirmOrder, total, isMobile = false }) => {
  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-md mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4 text-orange-700">Your Cart</h2>
        
        <div className="flex justify-center w-full">
          <img 
            src="/images/illustration-empty-cart.svg" 
            alt="empty cart" 
            className="w-32 mb-4" 
          />
        </div>

        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${!isMobile ? 'sticky top-6' : ''}`}>
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      
      <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center">
              <div className="ml-4">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="text-gray-500 hover:text-orange-500 focus:outline-none focus:text-orange-500 p-1"
                aria-label="Decrease quantity"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg> */}
              </button>
              <span className="mx-2" aria-live="polite">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="text-gray-500 hover:text-orange-500 focus:outline-none focus:text-orange-500 p-1"
                aria-label="Increase quantity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700 p-1"
                aria-label={`Remove ${item.name} from cart`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between mb-4">
          <span className="font-bold">Total:</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button
          onClick={confirmOrder}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Cart;