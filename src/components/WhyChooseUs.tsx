import React from 'react';

const features = [
  {
    id: 1,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: 'Expérience Locale Authentique',
    description: 'Notre équipe locale vous fait découvrir les trésors cachés de Madagascar avec une connaissance approfondie du terrain.',
  },
  {
    id: 2,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Qualité Premium',
    description: 'Des services haut de gamme incluant repas, boissons, transport et frais d\'entrée pour un confort optimal.',
  },
  {
    id: 3,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    title: 'Prix Transparents',
    description: 'Tarifs compétitifs tout inclus sans frais cachés. 80€ pour la plupart de nos excursions journée complète.',
  },
  {
    id: 4,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
      </svg>
    ),
    title: 'Support 24/7',
    description: 'Une équipe de guides expérimentés disponible à tout moment pour vous accompagner durant votre séjour.',
  },
  {
    id: 5,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: 'Tout Inclus',
    description: 'Repas, boissons rafraîchissantes, eau vive, transport et frais d\'entrée inclus dans chaque excursion.',
  },
  {
    id: 6,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Biodiversité Unique',
    description: 'Découvrez la faune et flore endémiques de Madagascar avec nos guides spécialisés en écotourisme.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Pourquoi Choisir NORTINE TOURS
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Découvrez ce qui fait de NORTINE TOURS votre meilleur choix pour explorer Madagascar et vivre des expériences inoubliables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors" />
                <div className="absolute inset-3 text-primary group-hover:text-primary-dark transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Notre Engagement Qualité
            </h3>
            <p className="text-text-secondary mb-6">
              Chez NORTINE TOURS, nous sommes fiers d'offrir une gamme diversifiée de services de haute qualité 
              conçus pour vous fournir une expérience inoubliable à Madagascar. Notre équipe dévouée de guides 
              et de personnel expérimentés est là pour garantir que votre voyage soit fluide, agréable et enrichi 
              de découvertes uniques.
            </p>
            <a
              href="/about"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              En savoir plus sur nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}