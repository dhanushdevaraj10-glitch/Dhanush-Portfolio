import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Career', path: '/career' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Hobbies', path: '/hobbies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border-light)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center text-accent font-bold text-2xl font-mono tracking-tighter">
              &lt;/&gt;
            </div>
            <span className="font-serif text-xl font-bold text-[var(--color-charcoal)]">Dhanush D</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-[var(--color-soft-grey)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-3 py-1.5 border border-[var(--color-border-light)] rounded-sm text-sm font-medium text-[var(--color-charcoal)] hover:border-accent hover:text-accent transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-charcoal)] hover:text-accent focus:outline-none p-1.5 border border-[var(--color-border-light)] rounded-sm shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-4 mt-2 w-48 bg-white border border-[var(--color-border-light)] shadow-lg rounded-sm z-50">
          <div className="py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm font-medium ${
                    isActive
                      ? 'text-accent bg-gray-50'
                      : 'text-[var(--color-soft-grey)] hover:bg-gray-50 hover:text-accent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border-light)] bg-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[var(--color-soft-grey)] text-center md:text-left">
          &copy; {currentYear} Dhanush D. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/dhanush-d-88155640a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-soft-grey)] hover:text-accent transition-colors p-2 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a
            href="https://github.com/dhanushdevaraj10-glitch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-soft-grey)] hover:text-accent transition-colors p-2 flex items-center justify-center"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundEffects />
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
