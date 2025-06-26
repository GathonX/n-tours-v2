
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Claire Moreau',
    role: 'Professeure de biologie, France',
    country: 'France',
    image: '/images/testimonials/avatar1.jpg',
    quote: 'En juin 2025, j\'ai visité Nosy Iranja avec NORTINE TOURS. Observer les tortues vertes pendant leur ponte a été un moment scientifique et émouvant. Les guides ont partagé des détails fascinants sur l\'écosystème, et l\'excursion était parfaitement organisée.',
    rating: 5,
    tour: 'Nosy Iranja - Nosy Antsohy'
  },
  {
    id: 2,
    name: 'Thomas Becker',
    role: 'Photographe professionnel, Allemagne',
    country: 'Allemagne',
    image: '/images/testimonials/avatar2.jpg',
    quote: 'En mai 2025, la réserve de Lokobe m\'a offert des opportunités uniques pour photographier les lémuriens noirs et les caméléons. Les guides de NORTINE TOURS étaient experts et m\'ont conduit aux meilleurs spots. Une expérience à recommander !',
    rating: 5,
    tour: 'Réserve Lokobe'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Famille avec enfants, États-Unis',
    country: 'USA',
    image: '/images/testimonials/avatar3.jpg',
    quote: 'En avril 2025, le tour de Nosy-Be a été parfait pour notre famille. Les cascades sacrées et le coucher de soleil au mont Passot ont enchanté nos enfants. L\'équipe a été attentive et a adapté le rythme pour nous. Merci !',
    rating: 5,
    tour: 'Tour de Nosy-Be'
  },
  {
    id: 4,
    name: 'Giorgio Lombardi',
    role: 'Retraité, Italie',
    country: 'Italie',
    image: '/images/testimonials/avatar4.jpg',
    quote: 'En juillet 2025, j\'ai exploré Ambajaha avec NORTINE TOURS. La visite des plantations de cacao et des baobabs de 800 ans était fascinante. Les guides ont pris soin de moi malgré mon âge, et les repas locaux étaient délicieux.',
    rating: 5,
    tour: 'Tours Ambajaha'
  },
  {
    id: 5,
    name: 'Lucie Tremblay',
    role: 'Journaliste voyage, Canada',
    country: 'Canada',
    image: '/images/testimonials/avatar5.jpg',
    quote: 'En octobre 2024, Nosy Komba et Tanikely m\'ont émerveillée avec leurs récifs et lémuriens. NORTINE TOURS a assuré une plongée sûre et une rencontre culturelle authentique avec les artisans locaux. Un voyage à couper le souffle !',
    rating: 5,
    tour: 'Nosy Komba & Tanikely'
  },
  {
    id: 6,
    name: 'Hans Schmidt',
    role: 'Écologiste, Suisse',
    country: 'Suisse',
    image: '/images/testimonials/avatar6.jpg',
    quote: 'En septembre 2025, Nosy Sakatia m\'a permis d\'observer des requins-baleines et des orchidées rares. L\'approche écotouristique de NORTINE TOURS, avec des guides locaux, a été exemplaire pour la conservation. Très impressionnant !',
    rating: 5,
    tour: 'Nosy Sakatia & Fanihy'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-primary' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Découvrez les expériences vécues par nos voyageurs à Madagascar avec NORTINE TOURS
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Témoignage actif */}
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <div className="w-20 h-20 relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full" />
                  <div className="absolute inset-2 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>

                {/* Étoiles */}
                <div className="flex mb-4">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>

                {/* Citation */}
                <blockquote className="text-xl text-text-primary text-center mb-6 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Informations client */}
                <div className="text-center">
                  <cite className="font-semibold text-lg text-text-primary not-italic">
                    {testimonials[activeIndex].name}
                  </cite>
                  <p className="text-text-secondary">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].country}
                  </p>
                  <span className="inline-block mt-2 bg-secondary-light text-secondary-dark px-3 py-1 rounded-full text-sm">
                    Excursion : {testimonials[activeIndex].tour}
                  </span>
                </div>
              </div>
            </div>

            {/* Boutons de navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
              <div className="flex justify-between">
                <button
                  onClick={previousTestimonial}
                  className="bg-white/90 hover:bg-white text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center -translate-x-6 transition-all hover:scale-110"
                  aria-label="Témoignage précédent"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-white/90 hover:bg-white text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center translate-x-6 transition-all hover:scale-110"
                  aria-label="Témoignage suivant"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-primary scale-110'
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-text-secondary">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-text-secondary">Excursions organisées</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5★</div>
            <div className="text-text-secondary">Note moyenne</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-text-secondary">Années d'expérience</div>
          </div>
        </div>
      </div>
    </section>
  );
}