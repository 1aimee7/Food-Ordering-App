import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
 
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
 
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Desserts</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;