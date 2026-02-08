
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo et copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <FaCode className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                Mones <span className="text-blue-400">Boubahri</span>
              </h3>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} - Développeur Full Stack
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Fait avec <FaHeart className="inline text-red-500 animate-pulse" /> en React
            </p>
          </motion.div>

          {/* Liens rapides */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 md:mb-0"
          >
            <h4 className="font-bold text-lg mb-4 text-center md:text-left">Navigation</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {['Accueil', 'Compétences', 'Projets', 'Expériences', 'Formation', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 text-center md:text-left">Connectons-nous</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://github.com/in/mones-boubahri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.1, y: -3 }}
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                <FaArrowUp />
              </motion.button>
            </div>
          </motion.div>
        </div>
        

        {/* Ligne de séparation */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Mentions légales et contact */}
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            📧 <a href="mailto:monesboubahri@gmail.com" className="hover:text-white transition-colors">
              monesboubahri@gmail.com
            </a> | 📱 <a href="tel:0766545448" className="hover:text-white transition-colors">
              07 66 54 54 48
            </a>
          </p>

          <p className="mt-4 text-xs text-gray-600">
            Portfolio développé avec React.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;