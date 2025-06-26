import React from 'react';
import  Layout  from '../components/Layout';

const AmbanjaPage = () => {
  return (
    <Layout showHero={false}>
      <section className="w-full py-12 bg-background-alt">
        <div className="container mx-auto px-4 lg:px-8">
          {/* En-tête de la section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-sans">
              Tours Ambajaha : Cacao & Baobabs Géants
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
              Plongez dans les plantations de cacao et découvrez les baobabs millénaires lors d'une immersion unique dans la région d'Ambanja.
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
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Géographie et Contexte</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Ambanja, située dans la région du Sambirano, est réputée pour ses terres fertiles et son climat tropical idéal pour le cacao. Le tour inclut la visite du pont Sambirano et des paysages dominés par des baobabs âgés de plus de 800 ans, offrant un contraste saisissant entre culture et nature sauvage.
            </p>
          </div>

          {/* Attractions principales */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Attractions Principales</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Plantations de cacao:</strong> Découverte des processus de culture et de transformation par les plus grands chocolatiers. <br />
              <strong className="text-primary-DEFAULT">Baobabs millénaires:</strong> Exploration des arbres géants et de leur histoire culturelle. <br />
              <strong className="text-primary-DEFAULT">Pont Sambirano:</strong> Structure historique offrant une vue sur la rivière et les environs.
            </p>
          </div>

          {/* Activités et expériences */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Activités et Expériences</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Visite agricole:</strong> Atelier de fabrication de chocolat artisanal. <br />
              <strong className="text-primary-DEFAULT">Randonnée nature:</strong> Balade pour admirer les baobabs et la faune locale. <br />
              <strong className="text-primary-DEFAULT">Culture locale:</strong> Rencontre avec les communautés et dégustation de produits locaux.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Informations Pratiques</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Meilleure période:</strong> Mai à octobre (saison sèche). <br />
              <strong className="text-primary-DEFAULT">Durée recommandée:</strong> 3-4 jours pour une immersion complète. <br />
              <strong className="text-primary-DEFAULT">Équipement essentiel:</strong> Vêtements légers, chaussures de marche, appareil photo, eau. <br />
              <strong className="text-primary-DEFAULT">Tarifs:</strong> 150-200€/personne, incluant transport, guide et repas.
            </p>
          </div>

          {/* Conservation et écotourisme */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Conservation et Écotourisme Responsable</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Soutenez les agriculteurs locaux en respectant les cultures et en minimisant les déchets. Les fonds contribuent à la préservation des baobabs et des écosystèmes agricoles.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AmbanjaPage;