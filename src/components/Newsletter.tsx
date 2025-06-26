import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<null | 'loading' | 'success' | 'error'>(null);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // Validation basique
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Veuillez entrer une adresse email valide');
      return;
    }

    try {
      // Simulation d'appel API (remplacer par votre endpoint réel)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulation de succès (90% de chance de succès)
      if (Math.random() > 0.1) {
        setStatus('success');
        setMessage('Merci ! Vous êtes maintenant inscrit à notre newsletter.');
        setEmail('');
      } else {
        throw new Error('Erreur de serveur');
      }
    } catch {
      setStatus('error');
      setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <section className="py-20 bg-primary-light relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* En-tête */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              Restez Informé de Nos Aventures
            </h2>
            <p className="text-text-secondary text-lg mb-2">
              Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres exclusives, 
              découvrir de nouveaux circuits et être les premiers informés de nos promotions.
            </p>
            <p className="text-text-secondary">
              🌴 Offres spéciales • 📸 Photos exclusives • 🗞️ Nouveautés Madagascar
            </p>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="votre.email@exemple.com"
                className="w-full px-6 py-4 rounded-full border-2 border-primary/20 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-text-primary placeholder-text-secondary/60"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
              />
              {status === 'loading' && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || !email}
              className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-4 rounded-full transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {status === 'loading' ? 'Inscription...' : "S'inscrire Maintenant"}
            </button>
          </form>

          {/* Messages de statut */}
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg max-w-xl mx-auto ${
                status === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}
            >
              <div className="flex items-center justify-center">
                {status === 'success' ? (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                {message}
              </div>
            </div>
          )}

          {/* Avantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 hover:bg-white/70 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Offres Exclusives</h3>
              <p className="text-text-secondary text-sm">Réductions jusqu'à 20% réservées aux abonnés</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 hover:bg-white/70 transition-all">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Nouveautés</h3>
              <p className="text-text-secondary text-sm">Soyez les premiers informés des nouveaux circuits</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 hover:bg-white/70 transition-all">
              <div className="w-12 h-12 bg-accent/40 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Conseils Voyage</h3>
              <p className="text-text-secondary text-sm">Tips et guides gratuits pour votre séjour</p>
            </div>
          </div>

          {/* Note de confidentialité */}
          <p className="text-sm text-text-secondary mt-8 max-w-2xl mx-auto">
            🔒 En vous inscrivant, vous acceptez de recevoir nos newsletters. Vous pouvez vous désinscrire à tout moment. 
            Vos données sont protégées et ne seront jamais partagées avec des tiers.
          </p>
        </div>
      </div>
    </section>
  );
}