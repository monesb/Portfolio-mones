import { useState } from 'react';
import { FaBuilding, FaCalendarAlt, FaCode, FaUsers, FaTools, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      id: 1,
      title: "Développeur Web (Stage)",
      company: "CHEYSSOI PARIS",
      period: "06/10/2024 - 03/01/2025",
      location: "Paris",
      type: "Stage",
      color: "from-blue-500 to-cyan-500",
      icon: <FaCode />,
      highlights: [
        "Développement front-end responsive avec React.js, HTML5, CSS3",
        "Optimisation des performances et réduction de l'impact environnemental",
        "Mise en place de l'architecture back-end en PHP et C#",
        "Création et optimisation de bases de données SQL",
        "Collaboration avec architectes, commerciaux et directeur artistique"
      ],
      technologies: ["React.js", "JavaScript", "PHP", "C#", "SQL", "Git"]
    },
    {
      id: 2,
      title: "Développeur Web (Stage)",
      company: "CFA Insta",
      period: "22/05/2024 - 15/07/2024",
      location: "Paris",
      type: "Stage",
      color: "from-purple-500 to-pink-500",
      icon: <FaTools />,
      highlights: [
        "Refonte complète de l'interface utilisateur avec Bootstrap",
        "Développement de fonctionnalités back-end en PHP",
        "Maintenance et optimisation des bases de données MySQL",
        "Gestion de l'administration avec phpMyAdmin",
        "Tests et débogage d'applications web"
      ],
      technologies: ["PHP", "Bootstrap", "JavaScript", "MySQL", "phpMyAdmin"]
    },
    {
      id: 3,
      title: "Employé Polyvalent",
      company: "McDonald's",
      period: "11/2023 - 08/2024",
      location: "Paris",
      type: "Job étudiant",
      color: "from-yellow-500 to-orange-500",
      icon: <FaUsers />,
      highlights: [
        "Service client et gestion des commandes",
        "Préparation et contrôle qualité des produits",
        "Gestion des stocks et approvisionnement",
        "Respect strict des procédures HACCP",
        "Travail en équipe et coordination d'équipe"
      ],
      skills: ["Service client", "Travail d'équipe", "Gestion du stress", "Organisation"]
    },
    {
      id: 4,
      title: "Employé Polyvalent",
      company: "OTacos",
      period: "01/2025 - 05/2025",
      location: "Paris",
      type: "Job étudiant",
      color: "from-red-500 to-pink-500",
      icon: <FaChartLine />,
      highlights: [
        "Préparation et réalisation des recettes OTacos",
        "Gestion de la chaîne de production en cuisine rapide",
        "Contrôle qualité et respect des normes sanitaires",
        "Collaboration avec l'équipe de service",
        "Optimisation des processus de production"
      ],
      skills: ["Rapidité", "Précision", "Travail en équipe", "Respect des procédures"]
    }
  ];

  const activeExperience = experiences[activeExp];

  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Parcours Professionnel</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des expériences variées qui ont forgé mes compétences techniques et humaines
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline verticale */}
          <AnimatedSection delay={0.1} className="lg:w-2/5">
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative pl-16 py-6 cursor-pointer transition-all ${
                    activeExp === index ? 'scale-[1.02]' : ''
                  }`}
                  onClick={() => setActiveExp(index)}
                >
                  {/* Point sur la timeline */}
                  <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white ${
                    activeExp === index 
                      ? `bg-gradient-to-r ${exp.color} shadow-lg` 
                      : 'bg-gray-300'
                  }`}></div>
                  
                  <div className={`p-6 rounded-2xl transition-all ${
                    activeExp === index
                      ? 'bg-white shadow-xl border-l-4 border-blue-500'
                      : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-lg ${activeExp === index ? 'text-blue-600' : 'text-gray-500'}`}>
                        {exp.icon}
                      </span>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        exp.type === 'Stage' 
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className={`text-lg font-bold mb-1 ${
                      activeExp === index ? 'text-gray-800' : 'text-gray-700'
                    }`}>
                      {exp.title}
                    </h3>
                    
                    <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Détails de l'expérience active */}
          <AnimatedSection delay={0.2} className="lg:w-3/5">
            <motion.div
              key={activeExp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-8 h-full border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`text-2xl p-3 rounded-xl bg-gradient-to-r ${activeExperience.color} text-white`}>
                      {activeExperience.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{activeExperience.title}</h3>
                      <p className="text-xl text-gray-600">{activeExperience.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-500">
                    <span className="flex items-center">
                      <FaBuilding className="mr-2" />
                      {activeExperience.location}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      {activeExperience.period}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <span className={`inline-block px-4 py-2 rounded-full text-white font-bold bg-gradient-to-r ${activeExperience.color}`}>
                    {activeExperience.type}
                  </span>
                </div>
              </div>

              {/* Points clés */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded mr-3"></span>
                  Missions & Responsabilités
                </h4>
                <ul className="space-y-3">
                  {activeExperience.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies/Skills */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded mr-3"></span>
                  {activeExperience.technologies ? 'Technologies utilisées' : 'Compétences développées'}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {(activeExperience.technologies || activeExperience.skills).map((item, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`px-4 py-2 rounded-full font-medium ${
                        activeExperience.technologies
                          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border border-blue-200'
                          : 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200'
                      }`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Indicateur d'avancement */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">
                    Expérience {activeExp + 1} sur {experiences.length}
                  </span>
                  <div className="flex gap-2">
                    {experiences.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveExp(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeExp === idx
                            ? `bg-gradient-to-r ${activeExperience.color}`
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;