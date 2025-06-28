// Location: Place this file in src/components/ alongside other component files like Layout.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// HomeButton component for navigation to excursion pages
const HomeButton = () => {
  const navigate = useNavigate();

  // Handles navigation to the specified destination path
  const handleDestinationClick = (path: string) => {
    navigate(path);
  };

  return (
    <button
      onClick={() => handleDestinationClick('/excursion/nosy-iranja')}
      className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="Voir toutes nos excursions"
    >
      Voir toutes nos excursions
    </button>
  );
};

export default HomeButton;