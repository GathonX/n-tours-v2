import React from 'react';
import  Layout  from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout showHero={false}>
      <section className="w-full py-12 bg-background-alt">
        <div className="container mx-auto px-4 lg:px-8">
          {/* En-tête de la section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-sans">
              À Propos de NORTINE TOURS
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
              Découvrez notre passion pour l'écotourisme et notre engagement envers Madagascar.
            </p>
          </div>

          {/* Notre histoire */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Notre Histoire</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Fondée en 2015, NORTINE TOURS est née de l'amour des habitants de Nosy-Be pour leur île et sa biodiversité unique. Avec plus de 10 ans d'expérience, nous avons développé des excursions qui allient authenticité, respect de l'environnement et découverte culturelle, en collaboration avec les communautés locales.
            </p>
          </div>

          {/* Notre mission */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Notre Mission</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Nous nous engageons à offrir des expériences écotouristiques durables, en préservant les écosystèmes malgaches et en soutenant les initiatives locales. Chaque voyage avec nous contribue à la protection de la faune, de la flore et des traditions.
            </p>
          </div>

          {/* Notre équipe */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Notre Équipe</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Notre équipe est composée de guides locaux certifiés, passionnés par leur région. Ils vous accompagnent avec expertise pour vous faire découvrir les trésors cachés de Nosy-Be et ses environs, tout en partageant leurs connaissances uniques.
            </p>
          </div>

          {/* Valeurs */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Nos Valeurs</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text-secondary font-sans">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                <span>Respect de l'environnement</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                <span>Authenticité culturelle</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                <span>Qualité et sécurité</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                <span>Soutien communautaire</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;