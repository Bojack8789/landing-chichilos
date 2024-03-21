import React from 'react';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-primary shadow-md rounded px-8 py-6">
        <h2 className="text-xl font-semibold mb-4">Ejemplo de Tailwind CSS</h2>
        <p className="text-gray-700 mb-2">Este es un ejemplo de un componente React utilizando clases de Tailwind CSS.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Botón</button>
      </div>
    </div>
  );
};

export default App;
