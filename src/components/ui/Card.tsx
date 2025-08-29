import type { JSX, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  border?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  as?: keyof JSX.IntrinsicElements;
  [key: string]: unknown;
}

const Card = ({
  children,
  className = '',
  hoverEffect = false,
  shadow = 'md',
  rounded = 'lg',
  border = true,
  padding = 'md',
  as: Component = 'div',
  ...props
}: CardProps) => {
  // Shadow classes
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  // Padding classes
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  // Border classes
  const borderClasses = border ? 'border border-gray-200' : 'border-0';
  
  // Hover effect
  const hoverClasses = hoverEffect 
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-lg' 
    : '';

  // Combine all classes
  const cardClasses = `
    bg-white 
    ${roundedClasses[rounded]} 
    ${shadow !== 'none' ? shadowClasses[shadow] : ''} 
    ${borderClasses} 
    ${paddingClasses[padding]} 
    ${hoverClasses} 
    ${className}
  `;

  return (
    <Component className={cardClasses} {...props}>
      {children}
    </Component>
  );
};

// Card Header Component
const CardHeader = ({ 
  children, 
  className = '',
  withBorder = false 
}: { 
  children: ReactNode; 
  className?: string; 
  withBorder?: boolean;
}) => (
  <div className={`${withBorder ? 'border-b border-gray-200 pb-4' : ''} ${className}`}>
    {children}
  </div>
);

// Card Title Component
const CardTitle = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

// Card Subtitle Component
const CardSubtitle = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <p className={`text-sm text-gray-500 mt-1 ${className}`}>
    {children}
  </p>
);

// Card Content Component
const CardContent = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <div className={`mt-4 ${className}`}>
    {children}
  </div>
);

// Card Footer Component
const CardFooter = ({ 
  children, 
  className = '',
  withBorder = false 
}: { 
  children: ReactNode; 
  className?: string;
  withBorder?: boolean;
}) => (
  <div className={`mt-6 pt-4 ${withBorder ? 'border-t border-gray-200' : ''} ${className}`}>
    {children}
  </div>
);

// Attach subcomponents to Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
