import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Product from './Product';

const App = () => {
  const isAuthenticated = localStorage.getItem('authToken');

  return (
    <Router>
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Product" element={isAuthenticated ? <Product /> : <Navigate to="/Signin" />} />
        <Route path="*" element={<Navigate to="/Signin" />} />
      </Routes>
    </Router>
  );
};

export default App;