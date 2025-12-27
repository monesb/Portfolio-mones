import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "monesboubahri@gmail.com",
      link: "mailto:monesboubahri@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhone />,
      title: "Téléphone",
      value: "07 66 54 54 48",
      link: "tel:0766545448",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Localisation",
      value: "Le Bourget, France",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/in/mones-boubahri",
      link: "https://github.com/in/mones-boubahri",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Travaillons <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Ensemble</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Actuellement à la recherche d'une alternance pour ma Licence 3 (2025-2026). 
              Discutons de votre projet ou opportunité !
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <AnimatedSection delay={0.1} className="md:col-span-2 lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  target={info.link ? "_blank" : undefined}
                  rel={info.link ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10 }}
                  className={`block p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group ${
                    !info.link && 'cursor-default'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* LinkedIn */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 10 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all group"
              >
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform">
                    <FaLinkedin />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">LinkedIn</h4>
                    <p className="text-blue-100">Connectons-nous</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </AnimatedSection>

          {/* CTA simplifié SANS BOUTONS */}
          <AnimatedSection delay={0.2} className="md:col-span-2 lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaEnvelope className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mes coordonnées</h3>
                <p className="text-gray-300 mb-6">
                  Vous pouvez me contacter par email ou téléphone aux coordonnées indiquées.
                </p>
                
                {/* Informations de contact directes */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-center justify-center">
                    <FaEnvelope className="text-blue-400 text-xl mr-3" />
                    <span className="text-white">monesboubahri@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <FaPhone className="text-purple-400 text-xl mr-3" />
                    <span className="text-white">07 66 54 54 48</span>
                  </div>
                </div>
              </div>

              {/* Statut de disponibilité */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                  <div>
                    <h4 className="text-white font-bold">Disponible pour alternance</h4>
                    <p className="text-green-300 text-sm">Recherche active - 2025/2026</p>
                    <p className="text-green-200 text-xs mt-2">Licence 3 Informatique - 2 jours école / 3 jours entreprise</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Section centres d'intérêt RETIRÉE */}
        {/* Supprimée comme demandé */}
      </div>
    </section>
  );
};

export default Contact;