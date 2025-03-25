import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/Signin');
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl mb-4">Product Page</h1>
      <p>Welcome to the product page! Explore our collection of amazing products.</p>
      <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Product;
