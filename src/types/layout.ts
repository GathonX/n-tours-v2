// src/types/layout.ts
// 🎯 TYPES POUR LE SYSTÈME DE LAYOUT
// ✅ Compatible avec l'architecture TypeScript stricte Pixel-Rise

export interface LayoutProps {
  /** Contenu à afficher dans le layout */
  children: React.ReactNode;
  
  /** Classes CSS personnalisées pour la section main */
  className?: string;
  
  /** Si true, utilise toute la largeur sans container */
  fullWidth?: boolean;
  
  /** Si true, masque le footer */
  noFooter?: boolean;
  
  /** Si true, retire le padding-top pour header transparent */
  headerTransparent?: boolean;
}

export interface LayoutVariant {
  /** Nom de la variante */
  name: string;
  
  /** Configuration du layout */
  config: Partial<LayoutProps>;
  
  /** Description de l'usage */
  description?: string;
}

// 🎨 VARIANTES PRÉDÉFINIES DU LAYOUT
export const LAYOUT_VARIANTS: Record<string, LayoutVariant> = {
  default: {
    name: 'Page Standard',
    config: {},
    description: 'Layout standard avec header, footer et container'
  },
  
  hero: {
    name: 'Page avec Hero',
    config: {
      fullWidth: true,
      headerTransparent: true
    },
    description: 'Pour pages avec section hero pleine largeur'
  },
  
  admin: {
    name: 'Page Administration',
    config: {
      noFooter: true,
      className: 'bg-gray-50'
    },
    description: 'Interface d\'administration sans footer'
  },
  
  landing: {
    name: 'Landing Page',
    config: {
      fullWidth: true,
      className: 'overflow-hidden'
    },
    description: 'Page de destination avec animations'
  },
  
  minimal: {
    name: 'Page Minimale',
    config: {
      noFooter: true,
      className: 'bg-white'
    },
    description: 'Design épuré pour formulaires ou auth'
  }
} as const;

export type LayoutVariantName = keyof typeof LAYOUT_VARIANTS;