// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Router } from './Router';
import { I18nextProvider } from 'react-i18next'; // Correct : seul I18nextProvider est importé de react-i18next
import i18n from './i18n'; // Assurez-vous que ce chemin est correct
import { Suspense } from 'react'; // Correction : importer Suspense depuis react

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Router />
      </Suspense>
    </I18nextProvider>
  </StrictMode>,
);