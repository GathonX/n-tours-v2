import React from 'react';
import  Layout  from '../components/Layout';
import ContactSection from '../components/ContactSection';

const TourNosyBePage = () => {
  return (
    <Layout showHero={false}>
      <section className="w-full py-12 bg-background-alt">
        <div className="container mx-auto px-4 lg:px-8">
          {/* En-tête de la section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-sans">
              Tour de Nosy-Be : L'Île aux Parfums
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
              Découvrez les merveilles de Nosy-Be à travers un circuit complet : plantations d'ylang-ylang, cascades sacrées et coucher de soleil au mont Passot.
            </p>
          </div>

          {/* Image principale (placeholder) */}
          <div className="w-full h-64 lg:h-96 mb-12 overflow-hidden rounded-xl border border-border">
            <div
              className="w-full h-full bg-primary-light"
              style={{ backgroundImage: `url("../public/images/Tours-ile-de-nosy-be/mont-passot/mp2.png")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>

          {/* Détails géographiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Géographie et Diversité Paysagère</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Nosy-Be, surnommée l'Île aux Parfums, s'étend sur 320 km² et est entourée de petites îles comme Nosy Komba et Nosy Tanikely. Le tour inclut des paysages variés : plantations verdoyantes, collines du mont Passot (329 m), et plages isolées comme Andilana. Accessible par route ou bateau, ce circuit offre une vue d'ensemble de l'île.
            </p>
          </div>

          {/* Attractions principales */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Attractions Principales</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Plantations d'ylang-ylang:</strong> Visite des distilleries artisanales et découverte de l'extraction d'huile essentielle. <br />
              <strong className="text-primary-DEFAULT">Cascades sacrées:</strong> Baignade dans les bassins naturels entourés de végétation luxuriante. <br />
              <strong className="text-primary-DEFAULT">Mont Passot:</strong> Point culminant avec un panorama à 360° et un coucher de soleil spectaculaire.
            </p>
          </div>

          {/* Activités et expériences */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Activités et Expériences</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Visite culturelle:</strong> Découverte des villages et de l'artisanat local. <br />
              <strong className="text-primary-DEFAULT">Randonnée:</strong> Ascension du mont Passot ou promenade dans les plantations. <br />
              <strong className="text-primary-DEFAULT">Plage:</strong> Temps libre à Andilana Beach pour se détendre.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Informations Pratiques</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Meilleure période:</strong> Mai à octobre (saison sèche). <br />
              <strong className="text-primary-DEFAULT">Durée recommandée:</strong> 8-10 heures pour un tour complet. <br />
              <strong className="text-primary-DEFAULT">Équipement essentiel:</strong> Chapeau, crème solaire, chaussures confortables, appareil photo. <br />
              <strong className="text-primary-DEFAULT">Tarifs:</strong> 50-80€/personne, incluant transport et guide.
            </p>
          </div>

          {/* Conservation et écotourisme */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Conservation et Écotourisme Responsable</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Soutenez les initiatives locales en respectant les cultures et en évitant les déchets. Une partie des revenus contribue à la préservation des écosystèmes de Nosy-Be.
            </p>
          </div>
        </div>


<ContactSection />

      </section>
    </Layout>
  );
};

export default TourNosyBePage;