import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaArrowDown, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Effet de particules */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <AnimatedSection className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full mb-6">
                <span className="text-blue-300 text-sm font-semibold">👋 Bonjour, je suis</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Mones <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Boubahri</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                <span className="relative inline-block">
                  <span className="relative z-10">Développeur Full Stack</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-500/30 -rotate-1"></span>
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 max-w-2xl">
                Étudiant en Licence 3 Informatique au CNAM, je mets mes compétences en développement 
                au service de projets innovants. Actuellement à la recherche d'une alternance pour 2025-2026.
              </p>

              {/* Technologies animées */}
              <div className="flex flex-wrap gap-4 mb-10">
                {['React.js', 'PHP', 'C#', 'JavaScript', 'SQL', 'Python'].map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Boutons CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Discutons de votre projet
                </motion.button>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#experiences"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Voir mes réalisations
                </motion.a>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex gap-6">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://github.com/in/mones-boubahri"
                  target="_blank"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-blue-500 transition-colors"
                >
                  <FaGithub />
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Illustration/Graphique animé */}
          <AnimatedSection delay={0.3} className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Cercle animé */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 md:w-80 md:h-80 border-2 border-blue-500/30 rounded-full"
              />
              
              {/* Icônes tournantes */}
              {[
                { Icon: FaCode, color: 'text-blue-400', delay: 0 },
                { Icon: FaServer, color: 'text-purple-400', delay: 1 },
                { Icon: FaDatabase, color: 'text-green-400', delay: 2 },
              ].map(({ Icon, color, delay }, idx) => (
                <motion.div
                  key={idx}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: 360,
                    x: [0, 150, 0],
                    y: [0, 0, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: delay,
                    ease: "linear"
                  }}
                >
                  <div className={`text-4xl ${color} bg-gray-900/50 p-4 rounded-full backdrop-blur-sm`}>
                    <Icon />
                  </div>
                </motion.div>
              ))}

              {/* Photo de profil (à ajouter) */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              >
                {/* Remplace par ta photo */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">MB</span>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => document.getElementById('competences').scrollIntoView({ behavior: 'smooth' })}
            className="text-white/60 hover:text-white transition-colors"
          >
            <FaArrowDown className="text-2xl" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;