// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface Status {
  type: string;
  message: string;
}

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<Status>({
    type: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: t('loading') });

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: t('success'),
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(data.message || t('error'));
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: t('error'),
      });
      console.error('Fetch Error:', error);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 relative">
      {/* Icônes de langue en haut à droite */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={() => changeLanguage('fr')}
          className="text-blue-500 hover:text-blue-700"
        >
          🇫🇷 FR
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className="text-blue-500 hover:text-blue-700"
        >
          🇬🇧 EN
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          {t('contact-us')}
        </h3>
        <p className="text-text-secondary">
          {t('question')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              {t('name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              placeholder={t('placeholder-name')}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              placeholder={t('placeholder-email')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2 font-sans">
              {t('destination')}
            </label>
            <select
              name="destination"
              value=""
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary font-sans"
            >
              <option value="">{t('choose-destination')}</option>
              <option value="Nosy Iranja">{t('nosy-iranja')}</option>
              <option value="Réserve de Lokobe">{t('reserve-lokobe')}</option>
              <option value="Tour de Nosy-Be">{t('tour-nosy-be')}</option>
              <option value="Nosy Komba & Tanikely">{t('nosy-komba-tanikely')}</option>
              <option value="Tours Ambajaha">{t('tours-ambajaha')}</option>
              <option value="Nosy Sakatia">{t('nosy-sakatia')}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2 font-sans">
              {t('request-type')}
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary font-sans"
            >
              <option value="">{t('select-request')}</option>
              <option value="reservation">{t('reservation')}</option>
              <option value="information">{t('information')}</option>
              <option value="devis">{t('quote')}</option>
              <option value="groupe">{t('group')}</option>
              <option value="autre">{t('other')}</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-vertical"
            placeholder={t('placeholder-message')}
          />
        </div>

        {status.message && (
          <div
            className={`p-4 rounded-lg border ${
              status.type === 'success'
                ? 'bg-green-50 text-green-800 border-green-200'
                : status.type === 'error'
                ? 'bg-red-50 text-red-800 border-red-200'
                : 'bg-blue-50 text-blue-800 border-blue-200'
            }`}
          >
            <div className="flex items-center">
              {status.type === 'success' && (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {status.type === 'error' && (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              {status.message}
            </div>
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
          >
            {status.type === 'loading' ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {t('loading')}
              </div>
            ) : (
              t('send')
            )}
          </button>
        </div>

        <div className="text-center text-sm text-text-secondary">
          <p>{t('contact-info')}</p>
        </div>
      </form>
    </div>
  );
}