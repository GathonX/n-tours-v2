import React from 'react';
import  Layout  from '../components/Layout';
import ContactSection from '../components/ContactSection';

const NosySakatiaPage = () => {
  return (
    <Layout showHero={false}>
      <section className="w-full py-12 bg-background-alt">
        <div className="container mx-auto px-4 lg:px-8">
          {/* En-tête de la section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-sans">
              Nosy Sakatia & Fanihy : Îles aux Orchidées
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
              Découvrez un paradis botanique avec plus de 1000 espèces d'orchidées et profitez de plages privées dans un écosystème préservé.
            </p>
          </div>

          {/* Image principale (placeholder) */}
          <div className="w-full h-64 lg:h-96 mb-12 overflow-hidden rounded-xl border border-border">
            <div
              className="w-full h-full bg-primary-light"
              style={{ backgroundImage: `url("../public/images/Nosy-sakatia/sk3.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>

          {/* Détails géographiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Géographie et Emplacement</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Nosy Sakatia, à 15 minutes en bateau de Nosy-Be, est une île de 6 km² connue pour sa riche biodiversité florale. Fanihy, une petite zone côtière adjacente, abrite des plages isolées et des récifs coralliens. Ces sites offrent un havre de paix loin du tourisme de masse.
            </p>
          </div>

          {/* Biodiversité florale et marine */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Biodiversité Florale et Marine</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Flore:</strong> Plus de 1000 espèces d'orchidées endémiques, dont certaines rares et protégées. <br />
              <strong className="text-primary-DEFAULT">Faune marine:</strong> Requins-baleines (saison octobre-décembre), tortues marines, et poissons tropicaux dans les eaux claires. <br />
              Les récifs de Fanihy sont idéaux pour la plongée avec une visibilité de 15-25 mètres.
            </p>
          </div>

          {/* Activités et expériences */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Activités et Expériences</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Plongée premium:</strong> Exploration des récifs de Fanihy (10-30m, niveaux avancés). <br />
              <strong className="text-primary-DEFAULT">Observation nature:</strong> Balade pour admirer les orchidées et les requins-baleines. <br />
              <strong className="text-primary-DEFAULT">Détente:</strong> Journée sur les plages privées avec équipements de snorkeling.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Informations Pratiques</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Meilleure période:</strong> Mai à décembre (saison sèche et saison des requins-baleines). <br />
              <strong className="text-primary-DEFAULT">Durée recommandée:</strong> Journée ou séjour modulable (1-3 jours). <br />
              <strong className="text-primary-DEFAULT">Équipement essentiel:</strong> Équipement de plongée, crème solaire, vêtements légers, caméra sous-marine. <br />
              <strong className="text-primary-DEFAULT">Tarifs:</strong> 80-120€/personne, incluant transport et guide.
            </p>
          </div>

          {/* Conservation et écotourisme */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Conservation et Écotourisme Responsable</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Respectez les écosystèmes : pas de prélèvement d'orchidées ni de perturbation des requins-baleines. Les revenus soutiennent la protection de la flore et la faune marine.
            </p>
          </div>
        </div>


<ContactSection />

      </section>
    </Layout>
  );
};

export default NosySakatiaPage;