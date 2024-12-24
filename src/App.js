import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Architecture', href: '/architecture' },
    { name: 'Automobile', href: '/automobile' },
    { name: 'Paysage', href: '/paysage' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="Logo" className="h-10 w-10" />
            <span className="ml-3 text-xl font-semibold">Studio Photo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <a key={link.name} href={link.href} className="text-gray-900 hover:text-gray-600">
                {link.name}
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {links.map(link => (
              <a key={link.name} href={link.href} className="block text-gray-900 hover:text-gray-600">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const CategoryCard = ({ title, description, year, location, imgSrc }) => (
  <a href={`/${title.toLowerCase()}`} className="block group relative h-96 overflow-hidden">
    <img 
      src={imgSrc} 
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60">
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <div className="text-sm mb-2">{year}</div>
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-200 mb-2">{description}</p>
        {location && (
          <div className="text-xs text-gray-300">{location}</div>
        )}
      </div>
    </div>
  </a>
);

const App = () => {
  const categories = [
    {
      title: "Automobile",
      year: "2024",
      description: "Découvrez notre sélection de photos de voitures professionnelles en Suisse et à l'étranger, captivant chaque détail de nos voitures moderne et classic.",
      location: "Genève, Vevey (Suisse) | Évolution (France)",
      imgSrc: "/api/placeholder/1200/800"
    },
    {
      title: "Architecture",
      year: "2024",
      description: "Explorez notre collection de photographies architecturales mettant en valeur des designs contemporains et des espaces de vie uniques.",
      location: "Bali, Indonésie",
      imgSrc: "/api/placeholder/1200/800"
    },
    {
      title: "Paysage",
      year: "2024",
      description: "Admirez nos captures de paysages naturels spectaculaires, de l'océan aux montagnes.",
      location: "Seychelles",
      imgSrc: "/api/placeholder/1200/800"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-4">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </main>
    </div>
  );
};

export default App;
