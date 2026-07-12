import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(name, email, password);
      navigate('/'); // Redirect to home on success
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 border border-sage/30 rounded-lg shadow-lg">
      <h2 className="text-3xl text-forest text-center mb-6">Create Account</h2>
      
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center font-semibold">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-forest mb-1 font-bold">Full Name</label>
          <input 
            type="text" 
            required
            className="w-full p-2 border border-sage rounded focus:outline-none focus:ring-2 focus:ring-turmeric"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-forest mb-1 font-bold">Email</label>
          <input 
            type="email" 
            required
            className="w-full p-2 border border-sage rounded focus:outline-none focus:ring-2 focus:ring-turmeric"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-forest mb-1 font-bold">Password (Min 6 chars)</label>
          <input 
            type="password" 
            required
            minLength="6"
            className="w-full p-2 border border-sage rounded focus:outline-none focus:ring-2 focus:ring-turmeric"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-forest text-parchment py-2 rounded hover:bg-sage transition font-bold text-lg"
        >
          Sign Up
        </button>
      </form>
      
      <p className="mt-6 text-center text-sm font-semibold">
        Already have an account? <Link to="/login" className="text-turmeric hover:underline">Login here</Link>
      </p>
    </div>
  );
}