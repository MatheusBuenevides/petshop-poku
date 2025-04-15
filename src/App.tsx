// src/App.tsx
import React from 'react';
import FormPetShop from './components/FormPetShop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <FormPetShop />
    </div>
  );
};

export default App;
