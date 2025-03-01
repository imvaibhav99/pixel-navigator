
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [uploading, setUploading] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Green Shirt Example', category: "Men's Clothing", subcategory: "Polo Shirt", image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500' },
    { id: 2, name: 'Red Sweater Example', category: "Women's Clothing", subcategory: "Sweater (Pullover)", image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500' },
    { id: 3, name: 'Brown Jumper Example', category: "Women's Clothing", subcategory: "Sweater (Pullover)", image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500' },
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
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r border-gray-100 flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-gray-100">
          <Link to="/" className="flex items-center justify-center">
            <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-medium">p</span>
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 py-6 flex flex-col items-center">
          <div className="space-y-6">
            <button className="w-12 h-12 flex flex-col items-center justify-center rounded-lg hover:bg-gray-50 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <span className="text-xs text-gray-400 group-hover:text-brand-purple mt-1">Create</span>
            </button>
            
            <button className="w-12 h-12 flex flex-col items-center justify-center rounded-lg bg-brand-purple/10 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <rect x="7" y="7" width="3" height="9" />
                <rect x="14" y="7" width="3" height="5" />
              </svg>
              <span className="text-xs text-brand-purple mt-1">My Products</span>
            </button>
            
            <div className="relative w-12 h-12 flex flex-col items-center justify-center rounded-lg hover:bg-gray-50 group">
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-purple text-white rounded-full text-[10px] flex items-center justify-center">
                2
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-xs text-gray-400 group-hover:text-brand-purple mt-1">Fashion Generator</span>
            </div>
            
            <button className="w-12 h-12 flex flex-col items-center justify-center rounded-lg hover:bg-gray-50 group">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-brand-purple text-[10px] text-white px-1 rounded-full">Pro</span>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-brand-purple mt-1">SEO Keywords</span>
            </button>
            
            <button className="w-12 h-12 flex flex-col items-center justify-center rounded-lg hover:bg-gray-50 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              <span className="text-xs text-gray-400 group-hover:text-brand-purple mt-1">Clean Up</span>
            </button>
            
            <button className="w-12 h-12 flex flex-col items-center justify-center rounded-lg hover:bg-gray-50 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              <span className="text-xs text-gray-400 group-hover:text-brand-purple mt-1">Upscaler</span>
            </button>
            
            <button className="w-12 h-12 flex flex-col items-center justify-center rounded-lg hover:bg-gray-50 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-brand-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <span className="text-xs text-gray-400 group-hover:text-brand-purple mt-1">Remove Background</span>
            </button>
          </div>
        </nav>
        
        <div className="mt-auto pb-6 flex flex-col items-center space-y-6">
          <button className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 text-white font-medium">
            $
          </button>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="container px-6 py-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-2xl font-semibold text-gray-900">Add New Product</h1>
            
            <div className="flex items-center gap-4">
              <button className="py-2 px-4 rounded-full border border-gray-200 hover:bg-gray-50 text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                New Product
              </button>
              <button className="bg-brand-purple text-white py-2 px-5 rounded-full hover:bg-brand-violet text-sm font-medium">
                Upgrade to Pro
              </button>
            </div>
          </div>
          
          {/* Upload area */}
          <div 
            className="bg-white border border-dashed border-gray-200 rounded-xl p-20 mb-8 flex flex-col items-center justify-center cursor-pointer hover:border-brand-purple transition-colors shadow-sm"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleUpload}
          >
            {uploading ? (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-brand-purple/30 border-t-brand-purple rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500">Uploading your product...</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <button className="bg-brand-purple text-white rounded-full p-4 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-xl font-medium text-gray-800 mb-2">Start Uploading</h3>
                <p className="text-gray-500 text-center mb-4 max-w-md">
                  Upload an image of your product or drag & drop here. Supported formats: JPG, PNG, WebP
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">Max 5MB</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">Aspect ratio 1:1</span>
                </div>
              </>
            )}
          </div>
          
          {/* Products list */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">My Products</h2>
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-500">Monthly Product Limit</div>
                <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-brand-purple rounded-full"></div>
                </div>
                <div className="text-sm font-medium">1/3</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        Example product
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-brand-purple/10 rounded-full flex items-center justify-center text-xs">
                          <span className="text-brand-purple">👕</span>
                        </div>
                        <span className="text-sm text-gray-600">{product.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                          <span className="text-gray-500">👕</span>
                        </div>
                        <span className="text-sm text-gray-600">{product.subcategory}</span>
                      </div>
                    </div>
                    <div className="flex mt-4 pt-4 border-t border-gray-100 justify-between">
                      <button className="text-sm text-gray-500 hover:text-brand-purple">Details</button>
                      <button className="text-sm text-gray-500 hover:text-brand-purple">Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-brand-purple text-white flex items-center justify-center shadow-lg hover:bg-brand-violet transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
