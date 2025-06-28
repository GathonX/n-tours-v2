// Location: Replace the existing content in src/components/PopularDestinations.tsx
import React from 'react';
import { useRouter } from '../utils/router';
import type { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: 'nosy-iranja',
    title: 'Nosy Iranja - Nosy Antsohy',
    subtitle: 'Les Îles aux Tortues',
    description: 'Découvrez des plages de sable blanc immaculées reliées par un banc de sable légendaire. Observez les tortues marines dans leur habitat naturel préservé.',
    price: '80€',
    duration: 'Journée complète',
    highlights: ['Tortues marines', 'Banc de sable', 'Snorkeling', 'Phare historique'],
    includes: ['Repas', 'Boisson', 'Transport', 'Frais d\'entrée'],
    image: '/images/destinations/nosy-iranja.jpg',
    link: '/excursion/nosy-iranja',
    badge: 'Populaire'
  },
  {
    id: 'lokobe',
    title: 'Réserve de Lokobe',
    subtitle: 'Sanctuaire de Biodiversité',
    description: 'Explorez la dernière forêt primaire de Nosy-Be. Rencontrez les lémuriens noirs dans leur environnement naturel préservé depuis 1927.',
    price: '80€',
    duration: 'Journée complète',
    highlights: ['Lémuriens noirs', 'Forêt primaire', 'Trekking guidé', 'Biodiversité unique'],
    includes: ['Repas', 'Boisson', 'Transport', 'Frais d\'entrée'],
    image: '/images/destinations/lokobe.jpg',
    link: '/excursion/lokobe'
  },
  {
    id: 'tour-nosy-be',
    title: 'Tour de Nosy-Be',
    subtitle: 'L\'Île aux Parfums',
    description: 'Circuit complet pour découvrir les plantations d\'ylang-ylang, les cascades sacrées, l\'arbre millénaire et le mont Passot au coucher du soleil.',
    price: '80€',
    duration: '8-10 heures',
    highlights: ['Mont Passot', 'Cascades sacrées', 'Ylang-ylang', 'Coucher de soleil'],
    includes: ['Transport', 'Cascade', 'Arbre sacré', 'Andilana Beach'],
    image: '/images/destinations/tour-nosy-be.jpg',
    link: '/excursion/tour-nosy-be'
  },
  {
    id: 'nosy-komba',
    title: 'Nosy Komba & Tanikely',
    subtitle: 'Aquarium Naturel',
    description: 'Plongée avec masque et tuba dans des eaux cristallines. Rencontrez les lémuriens de Nosy Komba et explorez l\'aquarium naturel de Tanikely.',
    price: '80€',
    duration: 'Journée complète',
    highlights: ['Snorkeling premium', 'Lémuriens Komba', 'Coraux préservés', 'Artisanat local'],
    includes: ['Repas', 'Boisson', 'Transport', 'Frais d\'entrée'],
    image: '/images/destinations/nosy-komba.jpg',
    link: '/excursion/nosy-komba'
  },
  {
    id: 'ambajaha',
    title: 'Tours Ambajaha',
    subtitle: 'Cacao & Baobabs Géants',
    description: 'Immersion dans les plantations de cacao utilisées par les plus grands chocolatiers. Découvrez les baobabs millénaires et le pont Sambirano.',
    price: '150€',
    duration: '3-4 jours',
    highlights: ['Plantation cacao', 'Baobabs 800 ans', 'Pont Sambirano', 'Agriculture bio'],
    includes: ['Repas', 'Boisson', 'Transport', 'Frais d\'entrée'],
    image: '/images/destinations/ambajaha.jpg',
    link: '/excursion/ambajaha',
    badge: 'Exclusif'
  },
  {
    id: 'nosy-sakatia',
    title: 'Nosy Sakatia & Fanihy',
    subtitle: 'Îles aux Orchidées',
    description: 'Paradis botanique avec 1000+ espèces d\'orchidées endémiques. Plages privées, plongée exceptionnelle et écosystème préservé du tourisme de masse.',
    price: '80€',
    duration: 'Modulable',
    highlights: ['Orchidées rares', 'Plages privées', 'Plongée premium', 'Requins-baleines'],
    includes: ['Repas', 'Boisson', 'Transport'],
    image: '/images/destinations/nosy-sakatia.jpg',
    link: '/excursion/nosy-sakatia'
  }
];

export default function PopularDestinations() {
  const { navigate } = useRouter();

  const handleDestinationClick = (link: string) => {
    if (navigate) {
      navigate(link); // Utilise la fonction de navigation fournie par useRouter
    } else {
      console.error('Navigation failed: navigate is not defined');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-background-alt">
      <div className="container mx-auto px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 rounded-full px-6 py-2 mb-6">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Destinations Exceptionnelles
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            Nos Excursions les Plus
            <span className="text-primary block">Recherchées à Madagascar</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Découvrez les merveilles de Nosy-Be et ses îles environnantes avec nos circuits authentiques. 
            Des expériences uniques dans des écosystèmes préservés, guidées par nos experts locaux.
          </p>
        </div>

        {/* Grille des destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleDestinationClick(destination.link)}
            >
              {/* Badge */}
              {destination.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {destination.badge}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Prix flottant */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-primary font-bold text-lg">{destination.price}</span>
                  <span className="text-text-secondary text-sm block">{destination.duration}</span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
                    {destination.title}
                  </h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-wide">
                    {destination.subtitle}
                  </p>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-4 text-sm">
                  {destination.description}
                </p>

                {/* Inclus dans le prix */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Inclus dans le prix :</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.includes.map((item, index) => (
                      <span 
                        key={index}
                        className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-200"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Points forts */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Points forts :</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-background-alt text-text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                  Découvrir l'excursion
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section globale */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Plus de 10 ans d'expérience dans l'écotourisme malgache
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nos guides locaux certifiés vous garantissent des expériences authentiques 
              dans le respect des écosystèmes et des communautés locales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleDestinationClick('/excursion/nosy-iranja')}
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Voir toutes nos excursions
              </button>
              <button 
                onClick={() => handleDestinationClick('/contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Demander un devis personnalisé
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}