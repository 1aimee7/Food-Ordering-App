import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const handleImageError = (e) => {
    e.target.src = '/api/placeholder/200/200'; 
  };

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-40 bg-gray-200 relative">
        <picture>
          <source media="(max-width: 640px)" srcSet={product.image.mobile} />
          <source media="(max-width: 1024px)" srcSet={product.image.tablet} />
          <img 
            src={product.image.desktop} 
            alt={product.name}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </picture>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-3xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;