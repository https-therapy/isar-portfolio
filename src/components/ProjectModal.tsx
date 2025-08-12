import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    images: Array<{
      url: string;
      caption: string;
    }>;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Focus management and keyboard handling
  useEffect(() => {
    if (isOpen) {
      // Store the element that was focused before opening modal
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      // Return focus to the element that triggered the modal
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  // Handle escape key and focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      // Focus trapping
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  };

  if (!isOpen && !isClosing) return null;

  const CollageLayout = ({ images }: { images: Array<{ url: string; caption: string }> }) => {
    // Dynamic collage layouts based on image count
    const getLayoutClasses = (index: number, total: number) => {
      if (total === 4) {
        const layouts = [
          "col-span-2 row-span-2", // Large featured image
          "col-span-1 row-span-1", 
          "col-span-1 row-span-1",
          "col-span-2 row-span-1"  // Wide bottom image
        ];
        return layouts[index] || "col-span-1 row-span-1";
      }
      if (total === 5) {
        const layouts = [
          "col-span-2 row-span-2", // Large featured image
          "col-span-1 row-span-1",
          "col-span-1 row-span-1", 
          "col-span-1 row-span-1",
          "col-span-1 row-span-1"
        ];
        return layouts[index] || "col-span-1 row-span-1";
      }
      return "col-span-1 row-span-1";
    };

    return (
      <div className="flex items-center justify-center min-h-[50vh] p-4 sm:p-8">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-2xl lg:max-w-4xl h-[400px] sm:h-[500px] lg:h-[600px] collage-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-xl cursor-pointer group",
                "image-card transition-all duration-700 ease-out",
                getLayoutClasses(index, images.length)
              )}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative w-full h-full transform transition-all duration-700 group-hover:scale-105">
                <img
                  src={image.url}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700
                           group-hover:scale-110 group-hover:brightness-110
                           group-hover:contrast-105"
                />
                
                {/* Glow overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Border glow effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40
                              rounded-xl transition-all duration-500 group-hover:shadow-glow-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Parallax Background with blur effect */}
      <div
        className={cn(
          "fixed inset-0 z-40 backdrop-parallax",
          isClosing ? "animate-modal-exit" : "animate-modal-enter"
        )}
        onClick={handleClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </div>
      
      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <div
          ref={modalRef}
          className={cn(
            "relative bg-background/95 backdrop-blur-xl rounded-3xl",
            "w-full max-w-[95vw] sm:max-w-4xl lg:max-w-6xl",
            "max-h-[80vh] flex flex-col",
            "shadow-2xl shadow-primary/30 border border-primary/20",
            "modal-content",
            isClosing ? "animate-modal-content-exit" : "animate-modal-content-enter"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animated Close Button */}
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 z-[60] p-3 rounded-full 
                     bg-background/80 backdrop-blur-sm border border-primary/20
                     hover:bg-primary/20 hover:border-primary/40 
                     focus:bg-primary/20 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50
                     transition-all duration-300 group close-button animate-close-button-enter
                     active:scale-95 active:rotate-45"
          >
            <X className="h-5 w-5 text-foreground group-hover:text-primary group-focus:text-primary
                         transition-all duration-300 group-active:rotate-45" />
          </button>

          {/* Header */}
          <div className="relative z-10 p-4 sm:p-8 pb-2 sm:pb-4 flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent text-center
                         animate-title-entrance">
              {project.title}
            </h2>
          </div>

          {/* Images Collage - Scrollable */}
          <div className="relative flex-1 overflow-y-auto">
            <CollageLayout images={project.images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;