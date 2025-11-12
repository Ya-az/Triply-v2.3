import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';
import { navigationLinks } from '../data/navigation.js';
import { GlassButton } from './ui/GlassButton.jsx';
import ThemeToggle from './ui/ThemeToggle.jsx';
import { BrandLogo } from './BrandLogo.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const scrollWithOffset = useCallback((element) => {
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    navigate('/');
    closeMenu();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const menuElement = menuRef.current;
    if (!menuElement) {
      return;
    }

    const focusable = menuElement.querySelectorAll('a[href], button:not([disabled])');
    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || focusable.length === 0) {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    if (firstElement) {
      firstElement.focus();
    }

    menuElement.addEventListener('keydown', handleKeyDown);
    return () => menuElement.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  return (
    <header className="fixed inset-x-0 top-0 has-experience-bar:top-10 z-50 border-b border-white/20 dark:border-dark-border/40 bg-white/75 dark:bg-dark-surface/90 backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <HashLink
          smooth
          to={{ pathname: '/', hash: '#hero' }}
          scroll={scrollWithOffset}
          className="text-triply-dark dark:text-dark-text-primary"
        >
          <BrandLogo showText size="md" />
        </HashLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={{ pathname: '/', hash: link.href }}
              scroll={scrollWithOffset}
              className="text-sm font-medium text-triply-slate/80 dark:text-dark-text-secondary transition-colors duration-200 hover:text-triply dark:hover:text-dark-text-primary"
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <div className="flex items-center gap-2 rounded-full bg-triply-mint/20 dark:bg-dark-elevated px-4 py-2 text-sm font-medium text-triply-dark dark:text-dark-text-primary hover:bg-triply-mint/30 dark:hover:bg-dark-elevated/80 transition-colors cursor-pointer">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>{user?.name}</span>
                </div>
              </Link>
              <GlassButton variant="outline" size="sm" onClick={handleLogout}>
                تسجيل الخروج
              </GlassButton>
            </>
          ) : (
            <>
              <Link to="/login">
                <GlassButton variant="outline" size="sm">
                  تسجيل الدخول
                </GlassButton>
              </Link>
              <Link to="/login">
                <GlassButton variant="primary" size="sm">ابدأ رحلتك</GlassButton>
              </Link>
            </>
          )}
        </div>

        {/* Mobile buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            ref={menuButtonRef}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-triply-mint/40 dark:border-dark-border/50 bg-white/70 dark:bg-dark-elevated/80 text-triply-dark dark:text-dark-text-primary shadow-soft dark:shadow-soft-dark transition duration-200 hover:border-triply-accent/70 dark:hover:border-triply-mint/60 hover:text-triply"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-label="قائمة التنقل"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className={clsx(
          'lg:hidden transition-all duration-300 ease-emphasized overflow-hidden border-t border-white/30 dark:border-dark-border/40 bg-white/85 dark:bg-dark-surface/95 backdrop-blur-xl',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col gap-2 px-6 py-4">
          {navigationLinks.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={{ pathname: '/', hash: link.href }}
              scroll={scrollWithOffset}
              className="rounded-2xl px-4 py-2 text-sm font-medium text-triply-dark/80 dark:text-dark-text-secondary transition-colors duration-150 hover:bg-triply-mint/40 dark:hover:bg-dark-elevated hover:text-triply dark:hover:text-dark-text-primary"
              onClick={closeMenu}
            >
              {link.label}
            </HashLink>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={closeMenu}>
                  <div className="rounded-xl bg-triply-mint/20 dark:bg-dark-elevated px-4 py-3 text-center text-sm font-medium text-triply-dark dark:text-dark-text-primary hover:bg-triply-mint/30 dark:hover:bg-dark-elevated/80 transition-colors w-full">
                    مرحباً، {user?.name}
                  </div>
                </Link>
                <GlassButton
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={handleLogout}
                >
                  تسجيل الخروج
                </GlassButton>
              </>
            ) : (
              <>
                <Link to="/login" className="w-full" onClick={closeMenu}>
                  <GlassButton variant="outline" size="sm" className="w-full">
                    تسجيل الدخول
                  </GlassButton>
                </Link>
                <Link to="/login" className="w-full" onClick={closeMenu}>
                  <GlassButton variant="primary" size="sm" className="w-full">
                    ابدأ رحلتك
                  </GlassButton>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export { Navbar };
