import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="ml-3 text-xl font-semibold">Studio Photo</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600">Accueil</a>
            <a href="#architecture" className="text-gray-900 hover:text-gray-600">Architecture</a>
            <a href="#automobile" className="text-gray-900 hover:text-gray-600">Automobile</a>
            <a href="#paysage" className="text-gray-900 hover:text-gray-600">Paysage</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="grid grid-cols-1 gap-8">
          <div className="relative h-96 overflow-hidden">
            <img src="/placeholder.jpg" alt="Architecture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-sm mb-2">2024</div>
                <h2 className="text-4xl font-bold mb-2">Architecture</h2>
                <p className="text-gray-200">Photographie d'architecture moderne</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;