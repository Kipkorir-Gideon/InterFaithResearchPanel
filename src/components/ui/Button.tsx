import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';
import { FiArrowRight, FiLoader } from 'react-icons/fi';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

// Base props every Button should have
type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
};

// Polymorphic prop type helper
type PolymorphicProps<T extends ElementType, Props> = Props & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof Props | 'as'>;

type ButtonProps<T extends ElementType = 'button'> = PolymorphicProps<
  T,
  BaseButtonProps
>;

const Button = <T extends ElementType = 'button'>({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  rightIcon,
  leftIcon,
  fullWidth = false,
  className = '',
  as,
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button';

  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50',
    secondary:
      'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50',
    outline:
      'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-primary/50',
    ghost:
      'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-primary/50',
    link: 'bg-transparent text-primary hover:underline hover:bg-transparent p-0 h-auto',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles}`;
  const loadingStyles = isLoading ? 'opacity-70 cursor-not-allowed' : '';

  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <Component
      className={`${buttonStyles} ${loadingStyles} ${className}`}
      disabled={Component === 'button' ? isLoading : undefined}
      {...props}
    >
      {isLoading && (
        <FiLoader className={`animate-spin -ml-1 mr-2 ${iconSizes[size]}`} />
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      {variant === 'link' && !rightIcon && !isLoading && (
        <FiArrowRight className={`ml-1 ${iconSizes[size]}`} />
      )}
    </Component>
  );
};

export default Button;
