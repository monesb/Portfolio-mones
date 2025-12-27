import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// IMPORT IMAGES CHEYSSOI
import cheyssoiHome from '../assets/projects/cheyssoi-home.png';
import cheyssoiEbook from '../assets/projects/cheyssoi-ebook.png';
import cheyssoiFormulaire from '../assets/projects/cheyssoi-formulaire.png';
import cheyssoiResponsive from '../assets/projects/cheyssoi-galerie.png';

// IMPORT IMAGES GEEKORIUM
import geekoriumHome from '../assets/projects/geekorium-home.png';
import geekoriumProducts from '../assets/projects/geekorium-client.png';
import geekoriumCart from '../assets/projects/geekorium-détail.png';
import geekoriumProfile from '../assets/projects/geekorium-panier.png';

// IMPORT IMAGES REACT NATIVE
import reactNativeHome from '../assets/projects/reactN-home.png';
import reactNativeCatalog from '../assets/projects/reactN-catalogue.png';
import reactNativeCart from '../assets/projects/reactN-détail.png';
import reactNativeAuth from '../assets/projects/reactN-panier.png';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Cheyssoi Paris",
      subtitle: "Application Full Stack React/Node.js",
      description: "Développement full-stack d'une application web pour une agence d'architecture d'intérieur éco-responsable. Création d'un formulaire intelligent avec backend Node.js/Express, base de données MongoDB et système d'envoi d'emails automatiques.",
      role: "Développeur Full Stack - Stage",
      period: "2024",
      features: [
        "Architecture complète frontend (React) + backend (Node.js/Express)",
        "Formulaire intelligent avec logique métier (3 formules selon besoins)",
        "Base de données MongoDB pour stockage et gestion des leads clients",
        "Système d'envoi d'emails automatiques avec Nodemailer",
        "Dashboard admin sécurisé pour visualisation des données",
        "API REST complète avec validation et gestion d'erreurs",
        "Animations fluides avec Framer Motion",
        "Design responsive et optimisé SEO"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "REST API", "Nodemailer"],
      images: [cheyssoiHome, cheyssoiEbook, cheyssoiFormulaire, cheyssoiResponsive],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Geekorium",
      subtitle: "E-commerce Full Stack PHP/MySQL",
      description: "Site e-commerce complet développé pour mon projet de BTS avec système d'authentification, panier, commandes, favoris et récupération de mot de passe par email. Architecture traditionnelle LAMP (Linux, Apache, MySQL, PHP).",
      role: "Développeur Full Stack - Projet BTS",
      period: "2023",
      features: [
        "Système d'authentification utilisateur sécurisé avec sessions PHP",
        "Panier d'achat persistant avec gestion des quantités et prix",
        "Fonctionnalité 'Favoris' pour sauvegarder les produits préférés",
        "Récupération de mot de passe par email avec PHPMailer",
        "Backoffice administrateur complet avec PHPMyAdmin",
        "Catalogue produits avec filtres par catégories (souris, claviers, écrans)",
        "Processus de commande complet (panier → validation → confirmation)",
        "Gestion de profil utilisateur avec historique des commandes",
        "Design responsive optimisé pour l'expérience gaming"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery", "PHPMailer", "Apache"],
      images: [geekoriumHome, geekoriumProducts, geekoriumCart, geekoriumProfile],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Mobile E-commerce",
      subtitle: "Application React Native Full Stack",
      description: "Application mobile cross-platform développée en Licence Informatique. Architecture full-stack avec frontend React Native, API REST pour les produits, MongoDB pour le catalogue et SQLite pour l'authentification locale des utilisateurs.",
      role: "Développeur Full Stack Mobile - Projet Universitaire",
      period: "2024",
      features: [
        "Authentification locale sécurisée avec SQLite (inscription/connexion)",
        "Catalogue produits dynamique via API REST externe",
        "Panier persistant entre les sessions de l'application",
        "Gestion complète du profil utilisateur avec données locales",
        "Navigation fluide avec React Navigation (Stack, Tab)",
        "Design natif responsive pour iOS et Android",
        "Communication avec API REST pour données produits",
        "État global géré avec Context API/Redux",
        "Stockage local des préférences utilisateur"
      ],
      technologies: ["React Native", "JavaScript", "API REST", "MongoDB", "SQLite", "React Navigation", "Context API", "Expo", "AsyncStorage"],
      images: [reactNativeHome, reactNativeCatalog, reactNativeCart, reactNativeAuth],
      liveLink: "#",
      githubLink: "#",
      isMobile: true
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Réalisations</span>
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Découvrez mes projets full-stack, du web traditionnel aux applications mobiles modernes
          </p>
          
          {/* Stats badges */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2">
              <span className="text-blue-300 font-bold">{projectsData.length} projets complets</span>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2">
              <span className="text-purple-300 font-bold">3/3 full-stack</span>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <span className="text-green-300 font-bold">Web + Mobile</span>
            </div>
          </motion.div>
        </div>

        {/* Liste des projets */}
        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* Section Stack Technique */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Stack Technique Complète</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Frontend", techs: ["React", "React Native", "JavaScript", "HTML5", "CSS3", "Tailwind"] },
              { name: "Backend", techs: ["Node.js", "Express", "PHP", "REST API"] },
              { name: "Bases de données", techs: ["MongoDB", "MySQL", "SQLite"] },
              { name: "Outils", techs: ["Git", "GitHub", "VS Code", "Figma"] },
              { name: "Déploiement", techs: ["Vercel", "Netlify", "Heroku", "Expo"] }
            ].map((category, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-3 text-sm">{category.name}</h4>
                <div className="space-y-2">
                  {category.techs.map((tech, techIdx) => (
                    <div key={techIdx} className="text-gray-300 text-xs flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Ces projets démontrent ma polyvalence et ma capacité à m'adapter à différentes stacks techniques,
            tout en développant des applications complètes et fonctionnelles.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all hover:scale-105"
          >
            <span>Vous avez un projet similaire ? Discutons-en !</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;