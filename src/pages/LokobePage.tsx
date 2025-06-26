import React from 'react';
import  Layout  from '../components/Layout';

const LokobePage = () => {
  return (
    <Layout showHero={false}>
      <section className="w-full py-12 bg-background-alt">
        <div className="container mx-auto px-4 lg:px-8">
          {/* En-tête de la section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 font-sans">
              Réserve de Lokobe : Sanctuaire de Biodiversité
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
              Explorez la dernière forêt primaire de Nosy-Be, un refuge préservé abritant des lémuriens noirs et une flore endémique unique.
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
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Géographie et Patrimoine Naturel</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              La Réserve de Lokobe, située à l'est de Nosy-Be, couvre 740 hectares de forêt tropicale humide protégée depuis 1927. Cette réserve est l'une des dernières forêts primaires de l'île, caractérisée par une canopée dense et un sol riche en biodiversité. Accessible uniquement par bateau ou à pied depuis Ambatoloaka, elle offre un paysage sauvage préservé.
            </p>
          </div>

          {/* Biodiversité terrestre */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Biodiversité Terrestre Exceptionnelle</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Lémuriens (présents toute l'année):</strong> Lémur noir (Eulemur macaco), espèce endémique de Nosy-Be, et lémur couronné. <br />
              <strong className="text-primary-DEFAULT">Faune diversifiée:</strong> Boa de Madagascar, caméléons panthères, oiseaux comme le drongo de Madagascar. <br />
              La flore inclut des arbres précieux comme l'ébène et le bois de rose, ainsi que des plantes médicinales utilisées par les communautés locales.
            </p>
          </div>

          {/* Activités et expériences */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Activités et Expériences</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Trekking guidé:</strong> Parcours de 2 à 4 heures à travers la forêt (tous niveaux). <br />
              <strong className="text-primary-DEFAULT">Observation animale:</strong> Randonnées pour repérer les lémuriens et reptiles avec des guides locaux. <br />
              <strong className="text-primary-DEFAULT">Découverte culturelle:</strong> Visite des villages voisins et initiation aux plantes médicinales.
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Informations Pratiques</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              <strong className="text-primary-DEFAULT">Meilleure période:</strong> Mai à novembre (saison sèche). <br />
              <strong className="text-primary-DEFAULT">Durée recommandée:</strong> Demi-journée (3-4h) ou journée complète avec pique-nique. <br />
              <strong className="text-primary-DEFAULT">Équipement essentiel:</strong> Chaussures de randonnée, vêtements longs, répulsif anti-moustiques, eau. <br />
              <strong className="text-primary-DEFAULT">Tarifs:</strong> 40-60€/personne, incluant guide et frais d'entrée.
            </p>
          </div>

          {/* Conservation et écotourisme */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-6 font-sans">Conservation et Écotourisme Responsable</h2>
            <p className="text-text-secondary leading-relaxed font-sans">
              La réserve est protégée par des lois strictes : interdiction de cueillir des plantes ou de perturber la faune. Les revenus du tourisme soutiennent les efforts contre le déboisement et le braconnage, en collaboration avec les communautés locales.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LokobePage;