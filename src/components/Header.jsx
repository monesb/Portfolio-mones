import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', id: 'accueil' },
    { name: 'Compétences', id: 'competences' },
    { name: 'Projets', id: 'projects' },
    { name: 'Expériences', id: 'experiences' },
    { name: 'Formation', id: 'formation' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setNav(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo animé */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer"
          onClick={() => handleClick('accueil')}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
            <FaCode className="text-white text-xl" />
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Mones <span className="text-blue-500">Boubahri</span>
            </h1>
            <p className={`text-sm ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}>
              Développeur Full Stack
            </p>
          </div>
        </motion.div>
        
        {/* Navigation Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleClick(item.id)}
                  className={`font-medium transition-all ${
                    scrolled 
                      ? 'text-gray-700 hover:text-blue-500' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Menu Mobile */}
        <button 
          onClick={() => setNav(!nav)} 
          className={`md:hidden text-2xl ${scrolled ? 'text-gray-800' : 'text-white'}`}
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Mobile */}
      {nav && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className="w-full text-left px-6 py-4 hover:bg-gray-50 text-gray-800 font-medium"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;