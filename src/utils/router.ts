import React from 'react';
import type { RouteConfig, RouterHook } from '../types';


// Configuration des routes
export const routes: RouteConfig[] = [
  {
    path: '/',
    component: React.lazy(() => import('../pages/HomePage')),
    title: 'NORTINE TOURS - Accueil'
  },
  {
    path: '/excursion/nosy-iranja',
    component: React.lazy(() => import('../pages/NosyIranjaPage')),
    title: 'Nosy Iranja - Îles aux Tortues | NORTINE TOURS'
  },
  {
    path: '/excursion/lokobe',
    component: React.lazy(() => import('../pages/LokobePage')),
    title: 'Réserve Lokobe - Sanctuaire Biodiversité | NORTINE TOURS'
  },
  {
    path: '/excursion/tour-nosy-be',
    component: React.lazy(() => import('../pages/TourNosyBePage')),
    title: 'Tour de Nosy-Be - Île aux Parfums | NORTINE TOURS'
  },
  {
    path: '/excursion/nosy-komba',
    component: React.lazy(() => import('../pages/NosyKombaPage')),
    title: 'Nosy Komba & Tanikely - Aquarium Naturel | NORTINE TOURS'
  },
  {
    path: '/excursion/ambajaha',
    component: React.lazy(() => import('../pages/AmbanjaPage')),
    title: 'Tours Ambajaha - Cacao & Baobabs | NORTINE TOURS'
  },
  {
    path: '/excursion/nosy-sakatia',
    component: React.lazy(() => import('../pages/NosySakatiaPage')),
    title: 'Nosy Sakatia & Fanihy - Îles aux Orchidées | NORTINE TOURS'
  }, 
  {
  path: '/about',
  component: React.lazy(() => import('../pages/AboutPage')),
  title: 'À Propos | NORTINE TOURS'
},
];

// Hook pour la navigation
export const useRouter = (): RouterHook => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    // Mise à jour du titre
    const route = routes.find(r => r.path === path);
    if (route) {
      document.title = route.title;
    }
  };

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { currentPath, navigate };
};