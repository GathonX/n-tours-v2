// Location: Replace the existing content in src/components/WhyChooseUs.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const features = [
  {
    id: 1,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: 'authentic-local-experience',
    description: 'local-team-discover-hidden-treasures',
  },
  {
    id: 2,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'premium-quality',
    description: 'high-end-services-included',
  },
  {
    id: 3,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
    title: 'transparent-pricing',
    description: 'competitive-all-inclusive-prices',
  },
  {
    id: 4,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
      </svg>
    ),
    title: '24-7-support',
    description: 'experienced-guides-available',
  },
  {
    id: 5,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: 'all-inclusive',
    description: 'meals-drinks-transport-included',
  },
  {
    id: 6,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'unique-biodiversity',
    description: 'discover-endemic-wildlife',
  },
];

export default function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            {t('why-choose-us')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t('why-choose-us-subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors" />
                <div className="absolute inset-3 text-primary group-hover:text-primary-dark transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-secondary transition-colors">
                {t(feature.title)}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {t(feature.description)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {t('quality-commitment-title')}
            </h3>
            <p className="text-text-secondary mb-6">
              {t('quality-commitment-description')}
            </p>
            <a
              href="/about"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('learn-more')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}