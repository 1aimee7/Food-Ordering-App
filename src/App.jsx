import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import { useCart } from './hooks/useCart';
import productsData from './data/products.json';


function App() {
  const [products] = useState(productsData);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const { 
    cartItems, 
    showOrderConfirmation, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    confirmOrder, 
    startNewOrder, 
    calculateTotal 
  } = useCart();

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
       
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <ProductList products={products} addToCart={addToCart} />
          </div>
          <div className="w-full md:w-1/3">
            <Cart 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
              confirmOrder={confirmOrder}
              total={calculateTotal()}
              isMobile={isMobile}
            />
          </div>
        </div>
      </main>

      {showOrderConfirmation && (
        <OrderConfirmation 
          cartItems={cartItems}
          total={calculateTotal()}
          startNewOrder={startNewOrder}
        />
      )}
    </div>
  );
}

export default App;