import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import SocialIcons from '../ui/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', path: '/', description: 'Back to the homepage' },
    { name: 'About Us', path: '/about', description: 'Learn about our mission and vision' },
    { name: 'Projects & Events', path: '/events', description: 'Explore our initiatives' },
    { name: 'Our Team', path: '/team', description: 'Meet our experts' },
    { name: 'Join Us', path: '/join', description: 'Become a member' },
    { name: 'Contact Us', path: '/contact', description: 'Get in touch' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'News & Media', path: '/news' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Accessibility', path: '/accessibility' },
  ];

  const contactInfo = {
    email: 'info@interfaithresearchpanel.org',
    phone: '+254 703 825 533',
    address: 'Nairobi, Kenya',
  };

  return (
    <footer className="bg-gray-900 text-white w-full mt-auto">
      <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center">
                <img 
                  src="/assets/logo-photo.png" 
                  alt="IReP Logo" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/assets/placeholder-logo.png';
                  }}
                />
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  IReP
                </span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Interfaith Research Panel (IReP) is a panel of experts 
              spearheading evidence-based solutions to address current planetary and human challenges.
            </p>
            <div className="pt-2">
              <SocialIcons variant="dark" size="sm" className="justify-start" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-start group"
                    title={link.description}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 mr-2 flex-shrink-0 group-hover:bg-primary"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-start group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 mr-2 flex-shrink-0 group-hover:bg-primary"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="ml-3 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a 
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="ml-3 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-400">
                  {contactInfo.address}
                </p>
              </div>
              
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-center"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Interfaith Research Panel. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-primary text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <span className="text-gray-600 text-xs">v1.0.0</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Made with ❤️ for a better planet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
