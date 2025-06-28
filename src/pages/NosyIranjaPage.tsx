import React from 'react';
import  Layout  from '../components/Layout';
import ContactSection from '../components/ContactSection';

const NosyIranjaPage = () => {
  return (
    <Layout showHero={false}>
      <section className="w-full py-12 bg-background-alt">
        <div className="container mx-auto px-4 lg:px-8">
          {/* En-tête de la section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-sans">
              Nosy Iranja - Nosy Antsohy : Les Îles aux Tortues
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
              Découvrez des plages de sable blanc immaculées reliées par un banc de sable légendaire. Observez les tortues marines dans leur habitat naturel préservé.
            </p>
          </div>

          {/* Image principale (placeholder) */}
          <div className="w-full h-64 lg:h-96 mb-12 overflow-hidden rounded-xl border border-border">
            <div
              className="w-full h-full bg-primary-light"
              style={{ backgroundImage: `url("")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>

          {/* Détails géographiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Géographie et Formation Unique</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Nosy Iranja se compose de deux îlots distincts - Nosy Iranja Be (2 km², habitée) et Nosy Iranja Kely (0,13 km², site de ponte privilégié) - reliés par un banc de sable légendaire de 1,2 à 2 km accessible uniquement à marée basse. Situées à 47 km au sud-ouest de Nosy-Be, ces îles forment l'un des paysages les plus iconiques de Madagascar. Le phare historique, construit en 1909 par les ateliers Gustave Eiffel, domine le paysage depuis ses 20 mètres de hauteur et offre une vue panoramique à 360° sur l'archipel Radama.
            </p>
          </div>

          {/* Biodiversité marine */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Biodiversité Marine Exceptionnelle</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Tortues marines (présentes toute l'année):</strong> Tortue Verte (jusqu'à 1,5m et 300kg, ponte juin-octobre) et Tortue Imbriquée (espèce critiquement menacée, ponte octobre-février). <br />
              <strong className="text-primary-DEFAULT">Mégafaune marine saisonnière:</strong> Baleines à Bosse (juillet-septembre), Requins-Baleines (octobre-décembre), Dauphins (3 espèces toute l'année). <br />
              L'écosystème marin compte plus de 400 espèces de coraux et 16+ spots de plongée, dont le "Plateau des Requins" (23-30m) avec une visibilité de 15-30 mètres.
            </p>
          </div>

          {/* Activités et expériences */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Activités et Expériences</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Snorkeling:</strong> Sites privilégiés autour des deux îles (2-12m, tous niveaux). <br />
              <strong className="text-primary-DEFAULT">Plongée sous-marine:</strong> "Pinacle de Jean Gabriel" (23-50m) avec requins et gorgones. <br />
              <strong className="text-primary-DEFAULT">Activités terrestres:</strong> Marche sur le banc de sable, ascension du phare, visite du village de pêcheurs, randonnée nature.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Informations Pratiques</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Meilleure période:</strong> Mai-octobre (saison sèche), avec spécificités par faune. <br />
              <strong className="text-primary-DEFAULT">Durée recommandée:</strong> Excursion journée (8h30-16h00) ou bivouac 2 jours/1 nuit. <br />
              <strong className="text-primary-DEFAULT">Équipement essentiel:</strong> Crème solaire respectueuse des coraux, équipement snorkeling, aquashoes, vêtements séchage rapide, sac étanche. <br />
              <strong className="text-primary-DEFAULT">Tarifs:</strong> 60-90€/personne pour excursion journée complète.
            </p>
          </div>

          {/* Conservation et écotourisme */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Conservation et Écotourisme Responsable</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Règles strictes : interdiction de toucher les tortues (distance 3m minimum), pas de prélèvement, zéro déchet. L'écotourisme génère des revenus pour les communautés locales et finance la protection contre le braconnage.
            </p>
          </div>
        </div>


<ContactSection />

      </section>
    </Layout>
  );
};

export default NosyIranjaPage;