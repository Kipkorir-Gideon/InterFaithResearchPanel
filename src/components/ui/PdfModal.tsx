import { useEffect, useRef, useState } from 'react';
// no icon import; we'll draw the close glyph using CSS for guaranteed visibility

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  pdfUrl?: string;
  children?: React.ReactNode;
}

const PdfModal = ({ isOpen, onClose, pdfUrl, title = 'Flyer', children }: PdfModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [animateIn, setAnimateIn] = useState(false);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
      // trigger animation
      const t = setTimeout(() => setAnimateIn(true), 10);
      return () => clearTimeout(t);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className={`bg-white/95 backdrop-saturate-150 border border-black/5 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col transition-all duration-200 ${animateIn ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}
      >
        <div className="relative">
          <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary rounded-t-2xl" />
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm hover:bg-gray-50"
              aria-label="Close modal"
              title="Close"
            >
              <span className="block text-2xl leading-none font-extrabold text-black" aria-hidden="true">✕</span>
            </button>
          </div>
          <div className="border-t border-gray-100" />
        </div>
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {children ? (
            <div className="prose max-w-none">
              {children}
            </div>
          ) : pdfUrl ? (
            <iframe 
              src={`${pdfUrl}#view=fitH`} 
              className="w-full h-[70vh]"
              title={title}
            />
          ) : (
            <div className="text-gray-600">No content available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
