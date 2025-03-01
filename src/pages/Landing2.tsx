
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="pt-16 pb-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/30 to-brand-purple/20 rounded-full blur-3xl -z-10 opacity-70"></div>
                
                <div className="relative max-w-sm mx-auto">
                  {/* Phone mockup */}
                  <div className="relative z-10">
                    <img 
                      src="public/lovable-uploads/45dec523-7ca6-41b7-a2fb-7fb3a66a09a1.png" 
                      alt="Phone mockup" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Bottom navigation */}
                <div className="bg-brand-purple rounded-full px-6 py-3 max-w-sm mx-auto mt-10 flex items-center justify-between">
                  <div className="text-white text-lg font-medium">p</div>
                  
                  <div className="flex space-x-6">
                    <span className="text-xs text-white opacity-80">Pricing</span>
                    <span className="text-xs text-white opacity-80">How it Works</span>
                    <span className="text-xs text-white opacity-80">Blog</span>
                    <span className="text-xs text-white opacity-80">Contact</span>
                    <span className="text-xs text-white opacity-80">Affiliates</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <span className="text-xs text-white opacity-80">Log in/ <br />Sign up</span>
                  </div>
                </div>
                
                <div className="flex justify-between max-w-sm mx-auto mt-4">
                  <button className="bg-white text-gray-800 rounded-lg px-4 py-2 text-sm font-medium shadow-md">
                    Book 1:1 demo
                  </button>
                  <button className="bg-gray-900 text-white rounded-lg px-4 py-2 text-sm font-medium shadow-md">
                    Get Started
                  </button>
                </div>
              </div>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Ready When You Are
                </h1>
                
                <p className="text-gray-700 text-lg mb-8 max-w-lg">
                  Jump right in and start exploring. Whether you're here to create, manage, or discover, our app is ready to go whenever you are!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-brand-darkblue text-white flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Landing2;
