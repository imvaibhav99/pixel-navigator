
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="bg-white py-6 border-b border-gray-100">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-purple">p</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Pricing', path: '#pricing' },
              { name: 'How it Works', path: '#how-it-works' },
              { name: 'Blog', path: '#blog' },
              { name: 'Contact', path: '#contact' },
              { name: 'Affiliates', path: '#affiliates' },
            ].map((item) => (
              <a 
                key={item.name}
                href={item.path}
                className="text-gray-600 hover:text-brand-purple transition-colors font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-brand-purple transition-colors font-medium text-sm"
            >
              Log in / Sign up
            </Link>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="pt-16 pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 mb-6 bg-brand-lightpurple rounded-full">
                  <p className="text-xs font-medium text-brand-purple uppercase tracking-wider">
                    DELIVER YOUR IDEAS FASTER
                  </p>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Supercharge your productivity with 
                  <span className="text-brand-purple"> AI image tools</span>
                </h1>
                
                <p className="text-gray-600 mb-8 max-w-lg">
                  Say goodbye to tedious and time consuming photo editing tasks 
                  and embrace a high-productivity workflow with an AI assisted 
                  toolset.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/dashboard" className="bg-gray-900 text-white rounded-lg px-8 py-3 font-medium text-center">
                    TRY IT NOW
                  </Link>
                  <Link to="/landing2" className="border border-gray-300 text-gray-700 rounded-lg px-8 py-3 font-medium text-center">
                    VIEW DEMO
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-brand-lightpurple blur-3xl opacity-50"></div>
                
                <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-xl">
                  <img 
                    src="public/lovable-uploads/37c6afea-3b58-48c0-b9fc-a16b30d92942.png" 
                    alt="Woman with productivity tools" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-1/4 -left-6 w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center rotate-12 animate-float">
                  <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-white font-bold">
                    p
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 -right-6 w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                
                <div className="absolute top-1/3 -right-4 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center -rotate-12 animate-float" style={{ animationDelay: '1.5s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                
                <div className="absolute bottom-1/4 -left-8 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center rotate-45 animate-float" style={{ animationDelay: '0.5s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful AI Tools</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform provides cutting-edge AI tools to help you create, edit, and enhance your images in seconds.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Image Generation",
                  description: "Create stunning images from text descriptions with our advanced AI models.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  )
                },
                {
                  title: "Image Enhancement",
                  description: "Automatically enhance your photos with our AI-powered tools.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  )
                },
                {
                  title: "Background Removal",
                  description: "Remove backgrounds from your images with just one click.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
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

export default Landing1;
