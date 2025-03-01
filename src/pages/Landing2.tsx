
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
              <div className="relative order-2 lg:order-1">
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
                <div className="bg-brand-purple rounded-full px-4 py-2 max-w-xs mx-auto mt-8 flex items-center justify-between">
                  <div className="text-white text-lg font-medium ml-1">p</div>
                  
                  <div className="hidden sm:flex space-x-3">
                    <span className="text-[10px] text-white opacity-80">Pricing</span>
                    <span className="text-[10px] text-white opacity-80">Works</span>
                    <span className="text-[10px] text-white opacity-80">Blog</span>
                    <span className="text-[10px] text-white opacity-80">Contact</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-[10px] text-white opacity-80">Log in/ <br />Sign up</span>
                  </div>
                </div>
                
                <div className="flex justify-between max-w-xs mx-auto mt-4 space-x-2">
                  <button className="bg-white text-gray-800 border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium shadow-sm">
                    Book 1:1 demo
                  </button>
                  <button className="bg-gray-900 text-white rounded-lg px-4 py-2 text-xs font-medium shadow-sm">
                    Get Started
                  </button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Ready When <br />You Are
                </h1>
                
                <p className="text-gray-600 text-lg mb-8 max-w-lg">
                  Jump right in and start exploring. Whether you're here to create, manage, or discover, our app is ready to go whenever you are!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
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
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive suite of tools designed to enhance your productivity and creativity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Intuitive Interface",
                  description: "Our platform is designed to be easy to use, with a clean and intuitive interface.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  )
                },
                {
                  title: "Advanced AI",
                  description: "Powered by cutting-edge AI technology to deliver exceptional results.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                      <circle cx="7.5" cy="14.5" r="1.5" />
                      <circle cx="16.5" cy="14.5" r="1.5" />
                    </svg>
                  )
                },
                {
                  title: "Real-Time Results",
                  description: "Get instant results as you work, with real-time updates and previews.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )
                },
                {
                  title: "Secure Platform",
                  description: "Your data is secure with our enterprise-grade security measures.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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

export default Landing2;
