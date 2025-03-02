
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="pt-8 md:pt-16">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column with Phone */}
              <div className="relative flex justify-center">
                {/* Gradient background circle */}
                <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-brand-teal/50 to-brand-purple/50 blur-xl"></div>
                
                {/* Phone image */}
                <div className="relative z-10 w-[300px]">
                  <img 
                    src="public/lovable-uploads/0691091c-5685-44ea-8235-41dd176303be.png"
                    alt="Phone mockup" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Navigation bar below phone */}
                <div className="absolute bottom-[-70px] w-[80%] max-w-[500px]">
                  <div className="bg-[#9b87f5] rounded-full px-5 py-3 flex items-center justify-between">
                    <div className="text-white text-xl font-medium">p</div>
                    
                    <div className="hidden md:flex space-x-6">
                      <span className="text-xs text-white">Pricing</span>
                      <span className="text-xs text-white">How it Works</span>
                      <span className="text-xs text-white">Blog</span>
                      <span className="text-xs text-white">Contact</span>
                      <span className="text-xs text-white">Affiliates</span>
                    </div>
                    
                    <div className="text-xs text-white">
                      Log in/<br />Sign up
                    </div>
                  </div>
                  
                  {/* Buttons below navigation */}
                  <div className="flex justify-center mt-6 space-x-4">
                    <button className="bg-white text-gray-800 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                      Book 1:1 demo
                    </button>
                    <button className="bg-gray-900 text-white rounded-full px-4 py-2 text-sm font-medium shadow-sm">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Column with Text */}
              <div className="mt-32 lg:mt-0 text-left lg:pr-12">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                  Ready When You Are
                </h1>
                
                <p className="text-lg text-gray-700 mb-8 max-w-lg">
                  Jump right in and start exploring. Whether you're here to create, manage, or discover, our app is ready to go whenever you are!
                </p>
                
                <div className="hidden lg:flex flex-col sm:flex-row gap-4">
                  <Link to="/dashboard" className="bg-gray-900 text-white rounded-lg px-8 py-3 font-medium text-center w-full sm:w-auto">
                    GET STARTED
                  </Link>
                  <Link to="/" className="border border-gray-300 text-gray-700 rounded-lg px-8 py-3 font-medium text-center w-full sm:w-auto">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-[#161C2C] text-white flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Landing2;
