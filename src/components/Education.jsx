import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaBook, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Education = () => {
  const formations = [
    {
      id: 1,
      degree: "Licence 3 Informatique Général",
      school: "Lycée Charles de Foucauld - CNAM",
      period: "2025 – 2026",
      location: "Paris",
      status: "En cours",
      color: "from-blue-500 to-cyan-500",
      description: "Formation en alternance (2 jours école, 3 jours entreprise). Acquisition de compétences avancées en développement logiciel, architecture des systèmes et gestion de projet.",
      courses: ["Algorithmique avancée", "Bases de données", "Développement web", "Gestion de projet", "Sécurité informatique"],
      highlight: true
    },
    {
      id: 2,
      degree: "BTS Services Informatiques aux Organisations",
      school: "CFA Insta",
      period: "2023 – 2025",
      location: "Paris",
      status: "Diplômé",
      color: "from-purple-500 to-pink-500",
      description: "Option SLAM (Solutions Logicielles et Applications Métiers). Formation axée sur le développement d'applications et la gestion de parc informatique.",
      courses: ["Développement web", "Programmation orientée objet", "Réseaux", "Cybersécurité", "Gestion de projet"],
      highlight: false
    },
    {
      id: 3,
      degree: "Baccalauréat Général",
      school: "Lycée Germaine Tillion",
      period: "2020 – 2023",
      location: "Le Bourget",
      status: "Diplômé",
      color: "from-green-500 to-emerald-500",
      description: "Spécialités Mathématiques et Sciences Économiques et Sociales. Mention Assez Bien.",
      courses: ["Mathématiques", "SES", "Histoire-Géographie", "Philosophie", "Anglais"],
      highlight: false
    }
  ];

  return (
    <section id="formation" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Parcours Académique</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un parcours académique solide qui combine théorie et pratique
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2"></div>

          {formations.map((formation, index) => (
            <AnimatedSection key={formation.id} delay={index * 0.2}>
              <div className={`flex flex-col lg:flex-row items-center mb-12 lg:mb-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Carte de formation */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} ${index % 2 === 0 ? 'lg:text-right' : ''}`}
                >
                  <div className={`bg-white rounded-2xl shadow-xl p-8 border-t-4 ${
                    formation.highlight 
                      ? 'border-blue-500 relative overflow-hidden' 
                      : 'border-gray-200'
                  }`}>
                    {formation.highlight && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                        Actuel
                      </div>
                    )}
                    
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${formation.color} text-white text-2xl mb-6`}>
                      <FaGraduationCap />
                    </div>
                    
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${
                      formation.status === 'En cours' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {formation.status}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{formation.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{formation.school}</p>
                    
                    <div className="flex items-center gap-4 text-gray-600 mb-6">
                      <span className="flex items-center">
                        <FaCalendar className="mr-2" />
                        {formation.period}
                      </span>
                      <span className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        {formation.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{formation.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <FaBook className="mr-2 text-blue-500" />
                        Principaux enseignements
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {formation.courses.map((course, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Point sur la timeline */}
                <div className="hidden lg:flex items-center justify-center w-1/6">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-12 h-12 rounded-full border-4 border-white shadow-lg bg-gradient-to-r ${formation.color}`}
                  />
                </div>

                {/* Année */}
                <div className={`lg:w-1/3 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} mt-6 lg:mt-0`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`text-center p-6 rounded-2xl bg-gradient-to-r ${formation.color} text-white shadow-lg`}
                  >
                    <FaCalendar className="text-4xl mx-auto mb-4" />
                    <div className="text-3xl font-bold">{formation.period.split(' – ')[0]}</div>
                    <div className="text-lg opacity-90">→ {formation.period.split(' – ')[1]}</div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Section certificats */}
        <AnimatedSection delay={0.6}>
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Certifications & Récompenses</h3>
                <p className="text-gray-600">Formations complémentaires et reconnaissances</p>
              </div>
              <FaAward className="text-4xl text-blue-500" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Méthodes Agiles", org: "CFA Insta", year: "2024" },
                { title: "Développement Web Avancé", org: "OpenClassrooms", year: "2023" },
                { title: "Git & GitHub", org: "Udemy", year: "2023" }
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold">{cert.year}</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <p className="text-gray-600">{cert.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Education;