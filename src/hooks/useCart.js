import { useState } from 'react';


export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const confirmOrder = () => {
    if (cartItems.length > 0) {
      setShowOrderConfirmation(true);
    }
  };

 
  const startNewOrder = () => {
    setCartItems([]);
    setShowOrderConfirmation(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return {
    cartItems,
    showOrderConfirmation,
    addToCart,
    removeFromCart,
    updateQuantity,
    confirmOrder,
    startNewOrder,
    calculateTotal
  };
};