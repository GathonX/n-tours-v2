// Location: Replace the existing content in src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router'; // Correction : Importation nommée { Router }

// Main App component with routing configuration
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center py-10">Chargement...</div>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;