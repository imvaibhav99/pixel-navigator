
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Landing1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 px-6 md:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-1.5 mb-6 bg-brand-lightpurple rounded-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <p className="text-xs font-medium text-brand-purple uppercase tracking-wider">
                    DELIVER YOUR IDEAS FASTER
                  </p>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Supercharge your productivity with 
                  <span className="text-brand-purple"> AI image tools</span>
                </h1>
                
                <p className="text-gray-600 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Say goodbye to tedious and time consuming photo editing tasks 
                  and embrace a high-productivity workflow with an AI assisted 
                  toolset.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <Link to="/landing2" className="btn-primary text-center">
                    TRY IT NOW
                  </Link>
                  <Link to="/dashboard" className="btn-secondary text-center">
                    Learn more
                  </Link>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-brand-teal/20 rounded-[40px] blur-3xl -z-10 opacity-70"></div>
                <div className="bg-brand-lightpurple p-4 rounded-[40px] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Productivity" 
                    className="rounded-[32px] w-full h-auto object-cover aspect-square md:aspect-[4/3]"
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute top-1/4 -left-6 w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center rotate-12 animate-float">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M12 8v8m-4-4h8" />
                    </svg>
                  </div>
                  
                  <div className="absolute top-2/3 -right-6 w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-1/4 -left-4 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center rotate-45 animate-float" style={{ animationDelay: '0.5s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9z" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                  
                  <div className="absolute top-1/3 -right-4 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center -rotate-12 animate-float" style={{ animationDelay: '1.5s' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
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

export default Landing1;
