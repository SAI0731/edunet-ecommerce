import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = () => {
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('authToken', 'dummy-token');
      navigate('/Product');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 border rounded shadow-md">
        <h2 className="mb-4 text-xl">Sign In</h2>
        <input className="mb-2 p-2 border w-full" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="mb-4 p-2 border w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSignin}>Sign In</button>
        <p className="mt-4">Don't have an account? <Link to="/Signup" className="text-blue-500">Sign Up here</Link></p>
      </div>
    </div>
  );
};

export default Signin;
