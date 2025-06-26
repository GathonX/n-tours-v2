import React, { useState } from 'react';

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
    setStatus({ type: 'loading', message: 'Envoi en cours...' });

    try {
      // Simulation d'appel API (remplacer par votre endpoint réel)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulation de succès
      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.',
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Contactez-nous
        </h3>
        <p className="text-text-secondary">
          Une question ? Un projet de voyage ? Nous sommes là pour vous aider !
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              placeholder="Votre nom complet"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2 font-sans">Destination souhaitée</label>
                  <select 
                    name="destination"
                    value=""
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary font-sans"
                  >
                    <option value="">Choisir une destination</option>
                    <option value="Nosy Iranja">Nosy Iranja - 80€</option>
                    <option value="Réserve de Lokobe">Réserve de Lokobe - 80€</option>
                    <option value="Tour de Nosy-Be">Tour de Nosy-Be - 80€</option>
                    <option value="Nosy Komba & Tanikely">Nosy Komba & Tanikely - 80€</option>
                    <option value="Tours Ambajaha">Tours Ambajaha - 150€</option>
                    <option value="Nosy Sakatia">Nosy Sakatia - 60€</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2 font-sans">Type de demande *</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary font-sans"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation d'excursion</option>
                    <option value="information">Demande d'information</option>
                    <option value="devis">Demande de devis personnalisé</option>
                    <option value="groupe">Voyage de groupe</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
              </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-vertical"
            placeholder="Décrivez votre projet de voyage, vos questions ou vos besoins spécifiques..."
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
                Envoi en cours...
              </div>
            ) : (
              'Envoyer le message'
            )}
          </button>
        </div>

        <div className="text-center text-sm text-text-secondary">
          <p>
            Vous pouvez aussi nous contacter directement :<br />
            📧 contact@nortine-tours.mg • 📱 +261 32 66 87 543
          </p>
        </div>
      </form>
    </div>
  );
}