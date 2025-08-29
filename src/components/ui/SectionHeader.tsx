import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClass?: string;
  subtitleClass?: string;
  descriptionClass?: string;
  children?: ReactNode;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
  titleClass = '',
  subtitleClass = '',
  descriptionClass = '',
  children,
}: SectionHeaderProps) => {
  // Alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  // Max width for better readability
  const maxWidthClass = 'max-w-3xl';

  return (
    <div className={`${alignmentClasses[align]} ${maxWidthClass} ${className}`}>
      {subtitle && (
        <p className={`text-sm font-semibold tracking-wider text-primary uppercase ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
      
      <h2 className={`mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      
      {description && (
        <div className={`mt-4 text-lg text-gray-600 ${descriptionClass}`}>
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default SectionHeader;
