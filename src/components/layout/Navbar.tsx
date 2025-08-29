import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';

interface NavLinkProps {
  name: string;
  path: string;
  submenu?: Array<{ name: string; path: string }>;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks: NavLinkProps[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      submenu: [
        { name: 'Our Mission', path: '/about#mission' },
        { name: 'Our Vision', path: '/about#vision' },
        { name: 'Our Values', path: '/about#values' },
      ]
    },
    { 
      name: 'Projects & Events', 
      path: '/events',
      submenu: [
        { name: 'Upcoming Events', path: '/events#upcoming' },
        { name: 'Past Events', path: '/events#past' },
        { name: 'Research Projects', path: '/events#projects' },
      ]
    },
    { 
      name: 'Our Team', 
      path: '/team',
      submenu: [
        { name: 'Governing Council', path: '/team#council' },
        { name: 'Themes Committee', path: '/team#themes' },
        { name: 'Management Team', path: '/team#management' },
      ]
    },
    { name: 'Join Us', path: '/join' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // const toggleSubmenu = (path: string) => (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setActiveSubmenu(activeSubmenu === path ? null : path);
  // };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logo-photo.png" 
              alt="IReP Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/assets/placeholder-logo.png';
              }}
            />
            <span className="ml-2 text-xl font-bold text-gray-800">IReP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <div className="flex items-center group">
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(link.path)
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveSubmenu(null)}
                  >
                    <div className="flex items-center">
                      <span>{link.name}</span>
                      {/* {link.submenu && (
                        <FiChevronDown 
                          className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === link.path ? 'transform rotate-180' : ''}`}
                        />
                      )} */}
                    </div>
                  </Link>
                </div>
                
                {/* Desktop Dropdown */}
                {link.submenu && (
                  <div 
                    className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-10 transition-all duration-200 transform origin-top-right ${
                      activeSubmenu === link.path ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Button 
              variant="primary" 
              size="sm" 
              className="ml-4"
              onClick={() => window.location.href = '/join'}
            >
              Join Our Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.path}>
              <div className="flex items-center justify-between">
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
                {/* {link.submenu && (
                  <button
                    onClick={toggleSubmenu(link.path)}
                    className="p-2 text-gray-500 hover:text-primary focus:outline-none"
                    aria-expanded={activeSubmenu === link.path}
                  >
                    <FiChevronDown 
                      className={`h-5 w-5 transition-transform ${activeSubmenu === link.path ? 'transform rotate-180' : ''}`} 
                    />
                  </button>
                )} */}
              </div>
              
              {/* Mobile Dropdown */}
              {link.submenu && activeSubmenu === link.path && (
                <div className="pl-4 mt-1 space-y-1">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-100 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="pt-2">
            <Button 
              variant="primary" 
              size="sm" 
              className="w-full justify-center"
              onClick={() => window.location.href = '/join'}
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
