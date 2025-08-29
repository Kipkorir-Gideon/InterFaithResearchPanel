import { ButtonHTMLAttributes, ReactNode } from 'react';
import { FiArrowRight, FiLoader } from 'react-icons/fi';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  rightIcon,
  leftIcon,
  fullWidth = false,
  className = '',
  as: Component = 'button',
  ...props
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  // Variant styles
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-primary/50',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-primary/50',
    link: 'bg-transparent text-primary hover:underline hover:bg-transparent p-0 h-auto',
  };
  
  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`;
  
  // Loading state
  const loadingStyles = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  
  // Icon sizes
  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
  
  // Render the button
  return (
    <Component
      className={`${buttonStyles} ${loadingStyles} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <FiLoader className={`animate-spin -ml-1 mr-2 ${iconSizes[size]}`} />
      )}
      {!isLoading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
      {variant === 'link' && !rightIcon && !isLoading && (
        <FiArrowRight className={`ml-1 ${iconSizes[size]}`} />
      )}
    </Component>
  );
};

export default Button;
