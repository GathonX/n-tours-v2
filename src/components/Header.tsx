// Location: Replace the existing content in src/components/Header.tsx
import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Icônes réelles
import { BsGlobe } from 'react-icons/bs'; // Icône pour les langues
import { useTranslation } from 'react-i18next'; // Pour gérer les traductions

export default function Header() {
  const { i18n } = useTranslation(); // Hook pour changer la langue
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
  ];

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: 'mailto:contact@nortine-tours.mg',
      label: 'Email',
      color: '#007BFF', // Bleu sophistiqué
    },
    {
      icon: FaPhoneAlt,
      href: 'tel:+261326687543',
      label: 'Téléphone',
      color: '#28A745', // Vert élégant
    },
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/NortineTours',
      label: 'Facebook',
      color: '#3B5998', // Bleu Facebook
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/261326687543',
      label: 'WhatsApp',
      color: '#25D366', // Vert WhatsApp
    },
  ];

  const languageLinks = [
    { code: 'fr', name: 'Français', flagColor: '#002395', icon: BsGlobe },
    { code: 'en', name: 'English', flagColor: '#CF142B', icon: BsGlobe },
    { code: 'it', name: 'Italiano', flagColor: '#009246', icon: BsGlobe },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-lg shadow-md z-50 border-b border-gray-100">
      {/* Language Selector above Navbar */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 flex flex-wrap justify-end items-center gap-4 py-2 text-sm text-gray-600">
          {languageLinks.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
            >
              <lang.icon size={14} style={{ color: lang.flagColor }} />
              <span className="hidden md:inline">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sub-Header */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4 py-2 text-sm text-gray-600">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
              >
                <Icon size={14} style={{ color }} />
                <span className="hidden md:inline">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl font-extrabold text-blue-900 hover:text-primary transition-colors">
              NORTINE <span className="text-primary hover:text-gray-900 transition-colors">TOURS</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="px-1 font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-full shadow-lg hover:bg-primary-dark transition-all transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-white backdrop-blur-lg z-40">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <a href="/" className="text-2xl font-extrabold text-gray-900">
              NORTINE TOURS
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 hover:bg-gray-100 rounded transition-colors text-2xl text-gray-700"
            >
              ✕
            </button>
          </div>

          <nav className="mt-6 space-y-6 px-6 text-center">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </div>
            ))}
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block mt-4 bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}