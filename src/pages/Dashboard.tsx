
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [uploading, setUploading] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Green Slim Example', category: "Men's Clothing", image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500' },
    { id: 2, name: 'Red Sweater Example', category: "Women's Clothing", image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500' },
    { id: 3, name: 'Brown Jacket Example', category: "Women's Clothing", image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500' },
  ]);

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
    }, 2000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Handle file drop here
    handleUpload();
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center justify-center md:justify-start px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-brand-darkblue hidden md:block">Pixel</span>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-2 md:px-4">
          <ul className="space-y-1">
            {[
              { icon: "home", label: "Home", active: false },
              { icon: "box", label: "My Products", active: true },
              { icon: "star", label: "Favorites", active: false },
              { icon: "settings", label: "Settings", active: false },
              { icon: "help-circle", label: "Help", active: false },
            ].map((item) => (
              <li key={item.label}>
                <a 
                  href="#" 
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg ${item.active ? 'bg-brand-purple text-white' : 'hover:bg-gray-100'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon === "home" && (
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    )}
                    {item.icon === "box" && (
                      <>
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </>
                    )}
                    {item.icon === "star" && (
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    )}
                    {item.icon === "settings" && (
                      <>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </>
                    )}
                    {item.icon === "help-circle" && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </>
                    )}
                  </svg>
                  <span className="hidden md:block font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-auto p-4 border-t border-gray-200">
          <button className="hidden md:flex items-center gap-2 w-full text-left text-sm font-medium text-gray-700 hover:text-brand-purple">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces" 
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
            <div>
              <span className="block text-sm font-medium">John Doe</span>
              <span className="block text-xs text-gray-500">john@example.com</span>
            </div>
          </button>
          <button className="md:hidden flex items-center justify-center w-full">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces" 
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
              <p className="text-gray-600">Upload your product photos for editing</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="btn-accent flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span>New Product</span>
              </button>
              <button className="btn-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span>Upgrade to Pro</span>
              </button>
            </div>
          </div>
          
          {/* Upload area */}
          <div 
            className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-10 mb-8 flex flex-col items-center justify-center cursor-pointer hover:border-brand-purple transition-colors"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleUpload}
          >
            <div className="w-20 h-20 mb-6 bg-brand-lightpurple rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Start Uploading</h3>
            <p className="text-gray-500 text-center max-w-md mb-6">Drag & drop anywhere to start uploading your photos or files</p>
            
            <button 
              className="btn-primary px-8 py-3 text-lg" 
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Select Files'}
            </button>
          </div>
          
          {/* Products list */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold">My Products</h2>
              <div className="flex items-center gap-2">
                <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-brand-purple rounded-full"></div>
                </div>
                <p className="text-sm text-gray-500">Monthly Product Limit (3/10)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden card-hover">
                  <div className="aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.category}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-purple"></div>
                        <span className="text-xs font-medium text-gray-600">Product</span>
                      </div>
                      
                      <button className="text-brand-purple hover:text-brand-violet">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
