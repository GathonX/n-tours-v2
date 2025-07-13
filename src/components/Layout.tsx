// Location: Replace the existing content in src/components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noFooter?: boolean;
  headerTransparent?: boolean;
  showHero?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  fullWidth = false,
  noFooter = false,
  headerTransparent = false,
  showHero = false
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {showHero && <Hero />}
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
      {!noFooter && <Footer />}
    </div>
  );
};

export default Layout;