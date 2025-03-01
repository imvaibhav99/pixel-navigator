
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, isLogin });
    // In a real app, you would handle authentication here
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
    // In a real app, you would implement OAuth here
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-8 animate-fade-in-scale">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-brand-darkblue">Pixel</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-bold text-center mb-6">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
          
          <button 
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 px-4 mb-4 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1711 8.36788H17.5V8.33329H10V11.6666H14.6422C13.8844 13.7285 12.0711 15.1666 10 15.1666C7.23883 15.1666 5.00003 12.9277 5.00003 10.1666C5.00003 7.40544 7.23883 5.16663 10 5.16663C11.2745 5.16663 12.4345 5.63117 13.3289 6.40213L15.7177 4.01329C14.1039 2.53117 12.1711 1.66663 10 1.66663C5.3978 1.66663 1.66669 5.39775 1.66669 9.99996C1.66669 14.6022 5.3978 18.3333 10 18.3333C14.6022 18.3333 18.3333 14.6022 18.3333 9.99996C18.3333 9.44438 18.2756 8.89771 18.1711 8.36788Z" fill="#FFC107"/>
              <path d="M2.62744 6.12104L5.36611 8.12928C6.10955 6.29482 7.90049 5.16663 9.99996 5.16663C11.2745 5.16663 12.4344 5.63117 13.3289 6.40213L15.7177 4.01329C14.1039 2.53117 12.1711 1.66663 9.99996 1.66663C6.79494 1.66663 4.02327 3.47208 2.62744 6.12104Z" fill="#FF3D00"/>
              <path d="M10 18.3333C12.1277 18.3333 14.0255 17.4976 15.6322 16.0643L13.0211 13.8428C12.1492 14.5171 11.0934 14.9448 10 14.9999C7.94015 14.9999 6.13359 13.5761 5.3681 11.5261L2.58525 13.6704C3.96468 16.3926 6.76692 18.3333 10 18.3333Z" fill="#4CAF50"/>
              <path d="M18.1712 8.36794H17.5V8.33335H10V11.6667H14.6423C14.2847 12.6483 13.6589 13.4908 12.8523 14.1017L12.8545 14.1003L15.4655 16.3218C15.2683 16.5025 18.3333 14.1667 18.3333 10.0001C18.3333 9.44449 18.2757 8.89782 18.1712 8.36794Z" fill="#1976D2"/>
            </svg>
            <span>Sign in with Google</span>
          </button>
          
          <div className="flex items-center gap-2 my-6">
            <div className="h-px bg-gray-300 flex-1"></div>
            <p className="text-sm text-gray-500">or continue with email</p>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="input-field"
                required
              />
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                {isLogin && (
                  <a href="#" className="text-xs text-brand-purple hover:underline">
                    Password forgotten?
                  </a>
                )}
              </div>
              <input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className="input-field"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-brand-teal text-brand-darkblue font-medium rounded-lg py-3 px-4 mb-4 hover:bg-brand-teallight transition-colors"
            >
              {isLogin ? 'SIGN IN' : 'SIGN UP'}
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            {isLogin ? "Do not have an account yet? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-brand-purple font-medium hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
