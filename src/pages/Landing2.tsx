
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Landing2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 px-6 md:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/30 to-brand-purple/20 rounded-full blur-3xl -z-10 opacity-70"></div>
                
                <div className="relative max-w-xs mx-auto">
                  {/* Phone mockup */}
                  <div className="relative z-10">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="0" width="320" height="640" rx="40" fill="#161C2C" />
                      <rect x="10" y="10" width="300" height="620" rx="32" fill="white" />
                    </svg>
                    
                    <div className="absolute top-0 left-0 right-0 flex justify-center">
                      <div className="w-40 h-6 bg-black rounded-b-xl"></div>
                    </div>
                    
                    <div className="relative z-20 pt-12 px-6 flex flex-col items-center">
                      <img src="/assets/logo.svg" alt="Logo" className="w-20 h-20 mb-4" />
                    </div>
                  </div>
                </div>
                
                {/* Bottom navigation */}
                <div className="bg-brand-purple rounded-full px-6 py-3 max-w-sm mx-auto mt-20 flex items-center justify-between animate-pulse-slow">
                  <img src="/assets/logo.svg" alt="Logo" className="w-5 h-5 invert opacity-80" />
                  
                  <div className="flex space-x-6">
                    <span className="text-xs text-white opacity-80">Pricing</span>
                    <span className="text-xs text-white opacity-80">Stack</span>
                    <span className="text-xs text-white opacity-80">Blog</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <span className="text-xs text-white opacity-80">Log in</span>
                    <span className="text-xs bg-white text-brand-purple px-2 py-1 rounded-full">Sign Up</span>
                  </div>
                </div>
                
                <div className="bg-brand-teal rounded-full px-4 py-1 max-w-xs mx-auto mt-4 flex items-center justify-center">
                  <button className="text-xs font-medium">Get Started</button>
                </div>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Ready When You Are
                </h1>
                
                <p className="text-gray-700 text-lg mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Jump right in and start exploring. Whether you're here to create, manage, or discover, our app is ready to go whenever you are!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <Link to="/login" className="btn-primary text-center">
                    SIGN IN / SIGN UP
                  </Link>
                  <Link to="/dashboard" className="btn-accent text-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="mt-20 py-8 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src="/assets/logo.svg" alt="Logo" className="w-6 h-6" />
              <span className="text-lg font-semibold text-brand-darkblue">Pixel</span>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing2;
