// src/hooks/useLayout.ts
// 🎯 HOOK UTILITAIRE POUR GESTION DU LAYOUT
// ✅ Compatible avec l'architecture Pixel-Rise + React hooks

import { useState, useEffect } from 'react';
import type { LayoutProps, LayoutVariantName } from '../types/layout';
import { LAYOUT_VARIANTS } from '../types/layout';

interface UseLayoutReturn {
  /** Configuration actuelle du layout */
  layoutConfig: LayoutProps;
  
  /** Appliquer une variante prédéfinie */
  applyVariant: (variant: LayoutVariantName) => void;
  
  /** Mettre à jour la configuration */
  updateConfig: (config: Partial<LayoutProps>) => void;
  
  /** Réinitialiser à la configuration par défaut */
  resetConfig: () => void;
  
  /** Nom de la variante actuelle */
  currentVariant: LayoutVariantName | null;
}

const DEFAULT_CONFIG: LayoutProps = {
  children: null,
  className: '',
  fullWidth: false,
  noFooter: false,
  headerTransparent: false
};

export function useLayout(initialVariant?: LayoutVariantName): UseLayoutReturn {
  const [layoutConfig, setLayoutConfig] = useState<LayoutProps>(DEFAULT_CONFIG);
  const [currentVariant, setCurrentVariant] = useState<LayoutVariantName | null>(
    initialVariant || null
  );

  // Appliquer une variante prédéfinie
  const applyVariant = (variant: LayoutVariantName): void => {
    const variantConfig = LAYOUT_VARIANTS[variant];
    if (variantConfig) {
      setLayoutConfig(prev => ({
        ...prev,
        ...variantConfig.config
      }));
      setCurrentVariant(variant);
    }
  };

  // Mettre à jour la configuration personnalisée
  const updateConfig = (config: Partial<LayoutProps>): void => {
    setLayoutConfig(prev => ({
      ...prev,
      ...config
    }));
    setCurrentVariant(null); // Reset variant when manually updating
  };

  // Réinitialiser à la configuration par défaut
  const resetConfig = (): void => {
    setLayoutConfig(DEFAULT_CONFIG);
    setCurrentVariant(null);
  };

  // Appliquer la variante initiale au montage
  useEffect(() => {
    if (initialVariant && LAYOUT_VARIANTS[initialVariant]) {
      applyVariant(initialVariant);
    }
  }, [initialVariant]);

  return {
    layoutConfig,
    applyVariant,
    updateConfig,
    resetConfig,
    currentVariant
  };
}

// 🎯 HOOK SPÉCIALISÉ POUR DÉTECTION DE SCROLL (bonus)
export function useHeaderTransparency(): {
  isTransparent: boolean;
  scrollY: number;
} {
  const [scrollY, setScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsTransparent(currentScrollY < 100); // Transparent si < 100px de scroll
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isTransparent, scrollY };
}

// 📱 HOOK POUR DÉTECTION RESPONSIVE (bonus)
export function useResponsive(): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
} {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = (): void => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: screenWidth < 768,
    isTablet: screenWidth >= 768 && screenWidth < 1024,
    isDesktop: screenWidth >= 1024,
    screenWidth
  };
}