import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

interface SocialIconsProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'primary';
  className?: string;
}

const SocialIcons = ({ size = 'md', variant = 'light', className = '' }: SocialIconsProps) => {
  // Define size classes
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  // Define variant classes
  const variantClasses = {
    light: 'bg-white text-gray-800 hover:bg-gray-100',
    dark: 'bg-gray-800 text-white hover:bg-gray-700',
    primary: 'bg-primary text-white hover:bg-primary/90',
  };

  const socialLinks = [
    { 
      name: 'Facebook',
      icon: FaFacebookF,
      url: 'https://facebook.com/interfaithresearchpanel',
      color: 'hover:text-blue-600',
    },
    { 
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/interfaithpanel',
      color: 'hover:text-blue-400',
    },
    { 
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://linkedin.com/company/interfaith-research-panel',
      color: 'hover:text-blue-700',
    },
    { 
      name: 'YouTube',
      icon: FaYoutube,
      url: 'https://youtube.com/channel/interfaithresearchpanel',
      color: 'hover:text-red-600',
    },
    { 
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/interfaithresearchpanel',
      color: 'hover:text-pink-600',
    },
  ];

  return (
    <div className={`flex space-x-2 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizeClasses[size]} ${variantClasses[variant]} ${social.color} rounded-full flex items-center justify-center transition-colors duration-300`}
            aria-label={social.name}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
