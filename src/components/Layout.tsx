import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noFooter?: boolean;
  headerTransparent?: boolean;
  showHero?: boolean; // Nouvelle prop pour activer/désactiver le Hero
}

const Layout:React.FC <LayoutProps> = ({ 
  children, 
  className = '', 
  fullWidth = false,
  noFooter = false,
  headerTransparent = false,
  showHero = false // Par défaut, le Hero est désactivé
})=> {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header fixe en haut */}
      <Header />
      
      {/* Hero conditionnel */}
      {showHero && <Hero />}
      
      {/* Zone principale avec espacement pour le header fixe */}
      <main 
        className={`
          flex-grow 
          ${headerTransparent ? 'pt-0' : 'pt-20 md:pt-24'} 
          ${fullWidth ? '' : 'px-4 sm:px-6 max-w-7xl mx-auto lg:px-8'} 
          ${className}
        `}
      >
        {children}
      </main>
      
      {/* Footer conditionnel */}
      {!noFooter && <Footer />}
    </div>
  );
}

export default Layout;