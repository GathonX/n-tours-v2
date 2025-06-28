// Location: Replace the existing content in src/Router.tsx
import React, { Suspense } from 'react';
import { routes, useRouter } from './utils/router';

// Composant Router
export const Router: React.FC = () => {
  const { currentPath } = useRouter();
  
  const currentRoute = routes.find(route => route.path === currentPath) || routes[0];
  const Component = currentRoute.component;
  
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>}>
      <Component />
    </Suspense>
  );
};