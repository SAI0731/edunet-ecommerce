import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    alert('Account created successfully!');
    navigate('/Signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 border rounded shadow-md">
        <h2 className="mb-4 text-xl">Sign Up</h2>
        <input className="mb-2 p-2 border w-full" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="mb-4 p-2 border w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-green-500 text-white px-4 py-2" onClick={handleSignup}>Sign Up</button>
        <p className="mt-4">Already have an account? <Link to="/Signin" className="text-blue-500">Sign In here</Link></p>
      </div>
    </div>
  );
};

export default Signup;
