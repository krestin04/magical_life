import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 via-green-400 to-yellow-400 bg-clip-text text-transparent">
            MAGICAL LIFE
          </div>
          <span className="text-sm text-gray-400 hidden sm:block">Центр творчества и фитнеса</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-green-400 transition-colors">О Центре</a>
          <a href="#news" className="hover:text-green-400 transition-colors">Новости</a>
          <a href="#teachers" className="hover:text-green-400 transition-colors">Педагоги</a>
          <a href="#contacts" className="hover:text-green-400 transition-colors">Контакты</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-3 flex flex-col gap-3 text-sm">
          <a href="#about" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>О Центре</a>
          <a href="#news" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>Новости</a>
          <a href="#teachers" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>Педагоги</a>
          <a href="#contacts" className="hover:text-green-400 transition-colors" onClick={() => setMenuOpen(false)}>Контакты</a>
        </nav>
      )}
    </header>
  );
}
