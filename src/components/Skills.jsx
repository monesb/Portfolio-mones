import { useState } from 'react';
import { FaReact, FaPhp, FaJs, FaPython, FaDatabase, FaGitAlt, FaBootstrap, FaWordpress, FaCode, FaMobile } from 'react-icons/fa';
import { SiMongodb, SiFlutter, SiSqlite } from 'react-icons/si';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = {
    frontend: [
      { name: "HTML", icon: <FaCode />, color: "from-orange-500 to-red-500" },
      { name: "CSS", icon: <FaCode />, color: "from-blue-500 to-indigo-500" },
      { name: "React.js", icon: <FaReact />, color: "from-cyan-400 to-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "from-yellow-400 to-yellow-600" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "from-purple-500 to-pink-500" },
    ],
    backend: [
      { name: "PHP", icon: <FaPhp />, color: "from-blue-400 to-indigo-500" },
      { name: "C#", icon: <FaCode />, color: "from-green-500 to-emerald-600" },
      { name: "Python", icon: <FaPython />, color: "from-blue-500 to-indigo-600" },
    ],
    mobile: [
      { name: "React Native", icon: <FaMobile />, color: "from-cyan-500 to-blue-600" },
      { name: "Flutter", icon: <SiFlutter />, color: "from-blue-400 to-cyan-500" },
    ],
    database: [
      { name: "SQL", icon: <FaDatabase />, color: "from-orange-400 to-red-500" },
      { name: "MySQL", icon: <FaDatabase />, color: "from-blue-500 to-cyan-500" },
      { name: "MongoDB", icon: <SiMongodb />, color: "from-green-500 to-emerald-600" },
      { name: "SQLite", icon: <SiSqlite />, color: "from-blue-400 to-indigo-500" },
    ],
    outils: [
      { name: "Git", icon: <FaGitAlt />, color: "from-orange-500 to-red-600" },
      { name: "GitHub", icon: <FaGitAlt />, color: "from-gray-700 to-gray-900" },
      { name: "WordPress", icon: <FaWordpress />, color: "from-blue-600 to-gray-700" },
    ]
  };

  const categories = [
    { id: 'all', name: 'Toutes', count: Object.values(skillsData).flat().length },
    { id: 'frontend', name: 'Frontend', count: skillsData.frontend.length },
    { id: 'backend', name: 'Backend', count: skillsData.backend.length },
    { id: 'mobile', name: 'Mobile', count: skillsData.mobile.length },
    { id: 'database', name: 'Bases de données', count: skillsData.database.length },
    { id: 'outils', name: 'Outils', count: skillsData.outils.length },
  ];

  const getSkillsToShow = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeCategory] || [];
  };

  return (
    <section id="competences" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Technologies</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Technologies et outils que j'utilise pour développer des applications
            </p>
          </div>
        </AnimatedSection>

        {/* Filtres par catégorie */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grille de compétences simplifiée */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {getSkillsToShow().map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center"
              >
                <div className={`text-4xl p-4 rounded-2xl bg-gradient-to-r ${skill.color} text-white mb-4`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Méthodes et compétences transverses */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Méthodes & Compétences Transverses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Méthode Agile (Scrum)", icon: "🔄" },
                { name: "UML / MCD / MLD", icon: "📊" },
                { name: "Gestion de Projet", icon: "📈" },
                { name: "GitFlow", icon: "🌿" },
              ].map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl text-center shadow hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <div className="text-blue-600 font-semibold">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;