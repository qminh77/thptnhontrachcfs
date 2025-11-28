import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Trang chủ', href: '#' },
    { name: 'Viết CFS', href: '#write-cfs' },
    { name: 'Tra cứu điểm', href: 'https://nhontrachcfs.edu.vn/tracuu/', external: true },
    { name: 'Page', href: '#page' },
    { name: 'Câu lạc bộ', href: '#clubs' },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src="/assets/logo/logo.png" alt="THPT Nhơn Trạch Confessions" />
          <span className="logo-text">NT Confessions</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
