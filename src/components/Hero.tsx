


import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Slide {
  file: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    file: 'h2.png',
    title: 'Explorez Nosy Be',
    description: 'Plages de sable blanc et plantations d\'ylang-ylang vous attendent.',
  },
  {
    file: 'h3.png',
    title: 'Plongée sous-marine',
    description: 'Découvrez les fonds marins exceptionnels et leur biodiversité unique.',
  },
  {
    file: 'h4.png',
    title: 'Safari dans la forêt',
    description: 'Partez à la rencontre des lémuriens et admirez la faune endémique.',
  },
  {
    file: 'h5.png',
    title: 'Couchers de soleil magiques',
    description: 'Vivez l\'instant spectaculaire sur l\'Allée des Baobabs.',
  },
  {
    file: 'h6.png',
    title: 'Tours culturels',
    description: 'Imprégnez-vous des traditions locales et de l\'artisanat malgaches.',
  },
];


export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[60vh] lg:h-[90vh] mt-32 w-full">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={`/images/hero/${slide.file}`}
                alt={t(slide.title)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-secondary-dark/20" />
            </div>

            <div className="relative w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
                  {t(slide.title)}
                </h1>
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                  {t(slide.description)}
                </p>
                <a
                  href="/destinations"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('discover-excursion')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
        <div className="flex justify-between px-4">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Previous slide"
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
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Next slide"
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-primary scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}