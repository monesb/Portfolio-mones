import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowLeft, FaArrowRight, FaExpand } from 'react-icons/fa';

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  // Gère le overflow du body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Empêche le scroll avec la roue de la souris
  useEffect(() => {
    const preventScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleThumbnailClick = (idx) => {
    if (idx < currentIndex) {
      const steps = currentIndex - idx;
      for (let i = 0; i < steps; i++) {
        onPrev();
      }
    } else if (idx > currentIndex) {
      const steps = idx - currentIndex;
      for (let i = 0; i < steps; i++) {
        onNext();
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl p-2 hover:bg-white/20 rounded-full z-10 transition-colors"
            aria-label="Fermer"
          >
            <FaTimes />
          </button>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-4 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Image précédente"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-4 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Image suivante"
              >
                <FaArrowRight />
              </button>
            </>
          )}

          {/* Image principale */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Vue ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x600/1a1a2e/00d4ff?text=Image+non+chargée";
              }}
            />
            
            {/* Indicateur */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              <FaExpand className="mr-2" />
              <span>{currentIndex + 1} / {images.length}</span>
            </div>
          </motion.div>

          {/* Miniatures en bas */}
          {images.length > 1 && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-4xl px-4 py-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleThumbnailClick(idx);
                  }}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    idx === currentIndex 
                      ? 'border-blue-500 scale-110 shadow-lg' 
                      : 'border-transparent hover:border-white/50'
                  }`}
                  aria-label={`Voir l'image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Miniature ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/64x48/1a1a2e/00d4ff?text=Err";
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
            <p>Cliquez en dehors ou appuyez sur Échap pour fermer</p>
          </div>

          {/* Gestion de la touche Échap */}
          {isOpen && (
            <div className="sr-only">
              <button onClick={onClose} aria-label="Fermer avec la touche Échap">
                Échap
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;