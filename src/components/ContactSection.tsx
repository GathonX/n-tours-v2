// Location: Replace the existing content in src/components/ContactSection.tsx
import React from 'react';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faComments, faClock } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background-alt" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            {t('plan-adventure')}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t('plan-adventure-subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                {t('contact-details')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{t('address')}</h4>
                    <p className="text-text-secondary">
                      Hell-Ville, Nosy Be<br />
                      Madagascar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{t('email')}</h4>
                    <a
                      href="mailto:contact@nortine-tours.mg"
                      className="text-secondary hover:text-secondary-dark transition-colors"
                    >
                      contact@nortine-tours.mg
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg text-green-600">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{t('phone')}</h4>
                    <a
                      href="tel:+261326687543"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +261 32 66 87 543
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg text-green-500">
                    <FontAwesomeIcon icon={faComments} size="lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{t('whatsapp')}</h4>
                    <a
                      href="https://wa.me/261326687543"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                    >
                      {t('whatsapp')} 24h/7j
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg text-accent">
                    <FontAwesomeIcon icon={faClock} size="lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{t('hours')}</h4>
                    <p className="text-text-secondary">
                      Lun - Dim : 7h00 - 19h00<br />
                      <span className="text-sm">{t('whatsapp')} 24h/7j</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {t('why-contact')}
              </h3>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>{t('free-quote')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>{t('expert-advice')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>{t('quick-response')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>{t('french-support')}</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {t('immediate-response')}
                </h4>
                <a
                  href="https://wa.me/261326687543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition-all"
                >
                  {t('whatsapp-direct')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}