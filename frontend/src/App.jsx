import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-forest text-parchment p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-display font-bold text-turmeric">
            Virtual Herbal Garden
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-sage transition font-semibold">Home</Link>
            {user ? (
              <>
                <span className="text-sm italic text-sage mr-2">Welcome, {user.name}</span>
                <button onClick={logout} className="hover:text-turmeric transition font-semibold">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-sage transition font-semibold">Login</Link>
                <Link to="/register" className="hover:text-sage transition font-semibold">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer className="bg-forest text-parchment text-center p-4 mt-8">
        <p>&copy; 2026 Virtual Herbal Garden</p>
      </footer>
    </div>
  );
}

export default App;