import React from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Planifions Votre Aventure
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Prêt à découvrir Madagascar ? Contactez-nous pour organiser votre voyage sur mesure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <div>
            <ContactForm />
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Nos Coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Adresse</h4>
                    <p className="text-text-secondary">
                      Hell-Ville, Nosy Be<br />
                      Madagascar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                    <a 
                      href="mailto:contact@nortine-tours.mg"
                      className="text-secondary hover:text-secondary-dark transition-colors"
                    >
                      contact@nortine-tours.mg
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Téléphone</h4>
                    <a 
                      href="tel:+261326687543"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +261 32 66 87 543
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/261326687543"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600 transition-colors"
                    >
                      Chat disponible 24h/7j
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <span className="text-2xl">🕐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Horaires</h4>
                    <p className="text-text-secondary">
                      Lun - Dim : 7h00 - 19h00<br />
                      <span className="text-sm">Support WhatsApp 24h/7j</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Pourquoi Nous Contacter ?
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Devis personnalisé gratuit
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Conseils d'experts locaux
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Réponse rapide garantie
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Support en français
                </li>
              </ul>
            </div>

            {/* Appel à l'action rapide */}
            <div className="text-center">
              <p className="text-text-secondary mb-4">Besoin d'une réponse immédiate ?</p>
              <a
                href="https://wa.me/261326687543"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="text-xl mr-2">💬</span>
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}