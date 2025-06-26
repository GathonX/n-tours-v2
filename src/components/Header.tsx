import React, { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Tours', href: '/tours' },
  ];

  const socialLinks = [
    {
      icon: '📧',
      href: 'mailto:contact@nortine-tours.mg',
      label: 'Email',
    },
    {
      icon: '📞',
      href: 'tel:+261326687543',
      label: 'Téléphone',
    },
    {
      icon: '📘',
      href: 'https://www.facebook.com/NortineTours',
      label: 'Facebook',
    },
    {
      icon: '💬',
      href: 'https://wa.me/261326687543',
      label: 'WhatsApp',
    },
  ];

  const languageLinks = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-lg shadow-lg z-50">
      {/* Sub-Header */}
      <div className="bg-background-alt">
        <div className="container mx-auto px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4 py-2 text-sm text-text-secondary">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
              >
                <span>{icon}</span>
                <span className="hidden md:inline">{label}</span>
              </a>
            ))}
          </div>
          <div className="flex gap-2">
            {languageLinks.map((lang) => (
              <button
                key={lang.code}
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="hidden md:inline">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl font-extrabold text-primary hover:text-primary-dark transition-colors">
              NORTINE TOURS
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="px-1 font-medium text-text-primary hover:text-secondary transition-colors"
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
              className="bg-primary text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors"
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
          <div className="flex items-center justify-between p-6 border-b border-border">
            <a href="/" className="text-2xl font-extrabold text-primary">
              NORTINE TOURS
            </a>
            <button 
              onClick={() => setMobileOpen(false)} 
              aria-label="Close menu"
              className="p-2 hover:bg-gray-100 rounded transition-colors text-2xl"
            >
              ✕
            </button>
          </div>

          <nav className="mt-6 space-y-6 px-6 text-center">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block text-lg font-medium text-text-primary hover:text-secondary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </div>
            ))}
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block mt-4 bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all"
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