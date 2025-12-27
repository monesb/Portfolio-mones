import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaTag, 
  FaCalendar, 
  FaCode, 
  FaArrowLeft, 
  FaArrowRight, 
  FaExpand,
  FaMobileAlt
} from 'react-icons/fa';
import Lightbox from './Lightbox';

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const lightboxNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const lightboxPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${
          project.isMobile 
            ? 'border-purple-500/30 hover:border-purple-500/50' 
            : 'border-white/10 hover:border-white/20'
        } transition-all duration-300 relative`}
      >
        {/* Badge Mobile */}
        {project.isMobile && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full flex items-center shadow-lg">
            <FaMobileAlt className="mr-1" />
            <span>Mobile App</span>
          </div>
        )}

        <div className="md:flex">
          {/* Partie gauche : Images */}
          <div className="md:w-1/2 p-6">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Vue ${currentImageIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openLightbox(currentImageIndex)}
                onError={(e) => {
                  console.error(`Failed to load image: ${project.images[currentImageIndex]}`);
                  e.target.src = "https://via.placeholder.com/800x600/1a1a2e/00d4ff?text=Image+non+chargée";
                }}
              />
              
              {/* Bouton plein écran */}
              <button
                onClick={() => openLightbox(currentImageIndex)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                title="Voir en plein écran"
              >
                <FaExpand />
              </button>
              
              {/* Navigation images */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaArrowRight />
                  </button>
                  
                  {/* Indicateurs */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            {/* Miniatures */}
            {project.images.length > 1 && (
              <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    onDoubleClick={() => openLightbox(idx)}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer group relative transition-all duration-300 ${
                      idx === currentImageIndex 
                        ? 'border-blue-500 scale-105 shadow-lg' 
                        : 'border-transparent hover:border-white/50'
                    }`}
                    title="Clique pour sélectionner, double-clique pour plein écran"
                  >
                    <img 
                      src={img} 
                      alt={`Mini ${idx + 1}`} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/64x48/1a1a2e/00d4ff?text=Err";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <FaExpand className="text-white text-xs opacity-0 group-hover:opacity-100" />
                    </div>
                  </button>
                ))}
              </div>
            )}
            
            {/* Légende */}
            <p className="text-gray-400 text-sm mt-3 text-center opacity-70">
              <span className="hidden md:inline">Cliquez sur l'image pour voir en plein écran • </span>
              Double-cliquez sur les miniatures
            </p>
          </div>

          {/* Partie droite : Détails */}
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${
                project.isMobile 
                  ? 'bg-purple-500/20 text-purple-300' 
                  : 'bg-blue-500/20 text-blue-300'
              }`}>
                {project.role}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className={`text-lg mb-4 ${
                project.isMobile ? 'text-purple-300' : 'text-gray-300'
              }`}>
                {project.subtitle}
              </p>
            </div>

            {/* Période */}
            <div className="flex items-center text-gray-400 mb-4">
              <FaCalendar className="mr-2" />
              <span>{project.period}</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

            {/* Fonctionnalités */}
            <div className="mb-6">
              <h4 className="text-white font-bold mb-3 flex items-center">
                <FaTag className="mr-2" /> 
                <span>Fonctionnalités principales</span>
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start">
                    <span className={`mr-2 ${project.isMobile ? 'text-purple-400' : 'text-blue-400'}`}>
                      •
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-white font-bold mb-3 flex items-center">
                <FaCode className="mr-2" /> 
                <span>Stack technique</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm ${
                      project.isMobile 
                        ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' 
                        : 'bg-gray-700/50 text-gray-300 border border-gray-600/50'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Boutons */}
            <div className="flex space-x-4">
              {project.liveLink && project.liveLink !== "#" && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-3 rounded-lg text-center flex items-center justify-center transition-all hover:scale-105 ${
                    project.isMobile
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                  } text-white font-medium`}
                >
                  <FaExternalLinkAlt className="mr-2" /> 
                  <span>{project.isMobile ? "Voir la démo" : "Voir le projet"}</span>
                </a>
              )}
              {project.githubLink && project.githubLink !== "#" && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg text-center flex items-center justify-center transition-all hover:scale-105 font-medium"
                >
                  <FaGithub className="mr-2" /> Code source
                </a>
              )}
              {(project.liveLink === "#" && project.githubLink === "#") && (
                <div className="text-center w-full">
                  <span className="text-gray-400 text-sm">
                    Code disponible sur demande
                  </span>
                </div>
              )}
            </div>

            {/* Info complémentaire */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex justify-between text-sm text-gray-400">
                <span>{project.images.length} visuels</span>
                <span>{project.technologies.length} technologies</span>
                <span>{project.features.length} fonctionnalités</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        images={project.images}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={lightboxNext}
        onPrev={lightboxPrev}
      />
    </>
  );
};

export default ProjectCard;