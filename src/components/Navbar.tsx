
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 shadow-sm backdrop-blur-md' : 'py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold text-brand-darkblue">Pixel</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Tools', path: '#tools' },
            { name: 'Explore', path: '#explore' },
            { name: 'Stack', path: '#stack' },
            { name: 'Pricing', path: '#pricing' },
            { name: 'Blog', path: '#blog' },
            { name: 'Contact', path: '#contact' },
          ].map((item, index) => (
            <a 
              key={item.name}
              href={item.path}
              className="nav-link text-sm font-medium animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/login" 
            className="text-sm font-medium hover:text-brand-purple transition-colors animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="btn-primary text-sm animate-fade-in"
            style={{ animationDelay: '0.45s' }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
