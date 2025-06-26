import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Nos excursions', href: '/destinations' },
    { name: 'Réservation', href: '/booking' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const popularTours = [
    { name: 'Nosy Iranja - Nosy Antsohy', price: '80€', href: '/tours/nosy-iranja' },
    { name: 'Réserve Lokobe', price: '80€', href: '/tours/lokobe' },
    { name: 'Tour de Nosy-Be', price: '80€', href: '/tours/nosy-be' },
    { name: 'Nosy Komba/Tanikely', price: '80€', href: '/tours/nosy-komba' },
    { name: 'Tours Ambajaha', price: '150€', href: '/tours/ambajaha' }
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { name: 'Conditions générales', href: '/conditions-generales' },
    { name: 'Politique de cookies', href: '/politique-cookies' }
  ];

  return (
    <footer className="bg-secondary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos de NORTINE TOURS */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-primary">NORTINE TOURS</h3>
            <p className="mb-6 leading-relaxed">
              Votre partenaire de confiance pour découvrir les merveilles de Madagascar. 
              Des expériences authentiques et inoubliables vous attendent sur l'île aux parfums.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com/NortineTours" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-all hover:scale-110"
              >
                <span className="text-xl">📘</span>
              </a>
              <a 
                href="https://instagram.com/NortineTours" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-all hover:scale-110"
              >
                <span className="text-xl">📷</span>
              </a>
              <a 
                href="https://wa.me/261326687543" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp" 
                className="bg-white/10 hover:bg-primary/20 p-3 rounded-full transition-all hover:scale-110"
              >
                <span className="text-xl">💬</span>
              </a>
            </div>

            {/* Certifications */}
            <div className="text-sm text-gray-300">
              <p className="flex items-center mb-1">
                <span className="text-accent mr-2">🌍</span>
                Agence de voyage certifiée
              </p>
              <p className="flex items-center">
                <span className="text-accent mr-2">🕐</span>
                Plus de 10 ans d'expérience
              </p>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Excursions populaires */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Nos Excursions</h3>
            <ul className="space-y-3">
              {popularTours.map((tour) => (
                <li key={tour.name}>
                  <a
                    href={tour.href}
                    className="text-gray-300 hover:text-accent transition-colors group block"
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:translate-x-1 transition-transform">
                        {tour.name}
                      </span>
                      <span className="text-primary font-medium text-sm">
                        {tour.price}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/destinations"
              className="inline-block mt-4 text-accent hover:text-primary transition-colors font-medium"
            >
              Voir toutes nos excursions →
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-accent text-xl">📍</span>
                <div>
                  <p className="font-medium">Madagascar, Nosy Be</p>
                  <p className="text-gray-300 text-sm">Hell-Ville, Diego-Suarez</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent text-xl">📧</span>
                <a 
                  href="mailto:contact@nortine-tours.mg" 
                  className="hover:text-accent transition-colors"
                >
                  contact@nortine-tours.mg
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent text-xl">📞</span>
                <a 
                  href="tel:+261326687543" 
                  className="hover:text-accent transition-colors"
                >
                  +261 32 66 87 543
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent text-xl">💬</span>
                <a 
                  href="https://wa.me/261326687543" 
                  className="hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp 24/7
                </a>
              </li>
            </ul>

            {/* Horaires */}
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h4 className="font-medium mb-2 text-accent">Horaires d'ouverture</h4>
              <p className="text-sm text-gray-300">Lun - Dim : 7h00 - 19h00</p>
              <p className="text-sm text-gray-300">Support 24h/7j par WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © {currentYear} <span className="text-primary font-medium">NORTINE TOURS</span>. 
                Tous droits réservés.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Conçu avec ❤️ pour l'île de Madagascar
              </p>
            </div>

            {/* Liens légaux */}
            <div className="text-center md:text-right">
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-500">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Badge de confiance */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
            <span className="text-accent text-xl">✅</span>
            <span className="text-sm text-gray-300">Agence de voyage certifiée et assurée</span>
          </div>
        </div>
      </div>
    </footer>
  );
}