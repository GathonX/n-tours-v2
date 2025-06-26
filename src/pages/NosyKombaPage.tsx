import React from 'react';
import  Layout  from '../components/Layout';

const NosyKombaPage = () => {
  return (
    <Layout showHero={false}>
      <section className="w-full py-12 bg-background-alt">
        <div className="container mx-auto px-4 lg:px-8">
          {/* En-tête de la section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-sans">
              Nosy Komba & Tanikely : Aquarium Naturel
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
              Plongez dans les eaux cristallines de Tanikely et rencontrez les lémuriens de Nosy Komba dans un cadre préservé.
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
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Géographie et Emplacement</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Nosy Komba, située à 20 minutes en bateau de Nosy-Be, est une île volcanique luxuriante de 25 km², célèbre pour ses lémuriens et son artisanat. Tanikely, une petite île voisine de 1 km², est un parc marin protégé offrant un récif corallien exceptionnel. Ces deux sites forment un duo parfait pour l'écotourisme.
            </p>
          </div>

          {/* Biodiversité marine et terrestre */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Biodiversité Marine et Terrestre</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Faune terrestre:</strong> Lémuriens macaco et lémuriens bruns, présents dans les forêts de Nosy Komba. <br />
              <strong className="text-primary-DEFAULT">Faune marine (Tanikely):</strong> Plus de 150 espèces de poissons tropicaux, tortues marines, et coraux préservés. <br />
              Tanikely est un site de plongée et snorkeling prisé, avec une visibilité de 20-30 mètres.
            </p>
          </div>

          {/* Activités et expériences */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Activités et Expériences</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Snorkeling:</strong> Exploration des récifs de Tanikely (0-12m, tous niveaux). <br />
              <strong className="text-primary-DEFAULT">Rencontre animale:</strong> Observation des lémuriens dans leur habitat naturel à Nosy Komba. <br />
              <strong className="text-primary-DEFAULT">Artisanat local:</strong> Visite du marché pour découvrir des sculptures en bois uniques.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Informations Pratiques</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Meilleure période:</strong> Avril à novembre (saison sèche). <br />
              <strong className="text-primary-DEFAULT">Durée recommandée:</strong> Journée complète (8h-16h). <br />
              <strong className="text-primary-DEFAULT">Équipement essentiel:</strong> Masque et tuba, crème solaire, serviette, argent pour les artisans. <br />
              <strong className="text-primary-DEFAULT">Tarifs:</strong> 60-80€/personne, incluant transport et guide.
            </p>
          </div>

          {/* Conservation et écotourisme */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Conservation et Écotourisme Responsable</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              Respectez les règles : pas de nourrissage des lémuriens ni de prélèvement de coraux. Les fonds touristiques soutiennent la protection marine et les artisans locaux.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NosyKombaPage;