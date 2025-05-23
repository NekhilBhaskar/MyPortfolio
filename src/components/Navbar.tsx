import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Home, FolderGit2, GraduationCap, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: FolderGit2, label: 'Projects' },
    { path: '/education', icon: GraduationCap, label: 'Education' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-950 dark:border-b dark:border-gray-700 text-gray-800 dark:text-white py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="text-xl font-bold">Bhaskar's Portfolio</span>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-1 hover:text-blue-400 transition ${
                location.pathname === path ? 'text-blue-400' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>

        {/* mob nav */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mob */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-white dark:bg-gray-950 py-2 shadow-lg flex flex-col items-start px-4">
          {navLinks.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                location.pathname === path ? 'text-blue-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
