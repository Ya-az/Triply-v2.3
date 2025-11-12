import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-2 rounded-xl bg-white/60 dark:bg-dark-surface/80 border border-triply-mint/30 dark:border-dark-border/50 shadow-sm hover:shadow-md dark:shadow-soft-dark transition-all duration-300"
      aria-label={theme === 'light' ? 'تبديل إلى الوضع الداكن' : 'تبديل إلى الوضع الفاتح'}
    >
      {/* Sun Icon (Light Mode) */}
      <svg
        className={`w-5 h-5 text-triply-accent dark:text-dark-text-muted transition-all duration-300 ${
          theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon Icon (Dark Mode) */}
      <svg
        className={`absolute inset-0 m-auto w-5 h-5 text-triply-mint dark:text-dark-text-primary transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>

      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-xl bg-triply-accent/0 group-hover:bg-triply-accent/5 dark:group-hover:bg-triply-mint/10 transition-colors duration-300" />
    </button>
  );
}
